import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd, Event } from '@angular/router';
import { Subscription, Observer } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import SockJS from 'sockjs-client';
import { RxStomp } from '@stomp/rx-stomp';

import { CSRFService } from 'app/core/auth/csrf.service';
import { AccountService } from '../auth/account.service';
import { Account } from '../auth/account.model';
import { TrackerActivity } from './tracker-activity.model';

const DESTINATION_TRACKER = '/topic/tracker';
const DESTINATION_ACTIVITY = '/topic/activity';

@Injectable({ providedIn: 'root' })
export class TrackerService {
  private rxStomp?: RxStomp;
  private routerSubscription: Subscription | null = null;

  constructor(
    private router: Router,
    private accountService: AccountService,
    private csrfService: CSRFService,
    private location: Location,
  ) {}

  setup(): void {
    this.rxStomp = new RxStomp();
    this.rxStomp.configure({
      // eslint-disable-next-line no-console
      debug: (msg: string): void => console.log(new Date(), msg),
    });

    this.accountService.getAuthenticationState().subscribe({
      next: (account: Account | null) => {
        if (account) {
          this.connect();
        } else {
          this.disconnect();
        }
      },
    });

    this.rxStomp.connected$.subscribe(() => {
      this.sendActivity();

      this.routerSubscription = this.router.events
        .pipe(filter((event: Event) => event instanceof NavigationEnd))
        .subscribe(() => this.sendActivity());
    });
  }

  get stomp(): RxStomp {
    if (!this.rxStomp) {
      throw new Error('Stomp connection not initialized');
    }
    return this.rxStomp;
  }

  public subscribe(observer: Partial<Observer<TrackerActivity>>): Subscription {
    return (
      this.stomp
        .watch(DESTINATION_TRACKER)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        .pipe(map(imessage => JSON.parse(imessage.body)))
        .subscribe(observer)
    );
  }

  private connect(): void {
    this.updateCredentials();
    return this.stomp.activate();
  }

  private disconnect(): Promise<void> {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
      this.routerSubscription = null;
    }
    return this.stomp.deactivate();
  }

  private buildUrl(): string {
    // building absolute path so that websocket doesn't fail when deploying with a context path
    let url = '/websocket/tracker';
    url = this.location.prepareExternalUrl(url);
    return url;
  }

  private updateCredentials(): void {
    this.stomp.configure({
      webSocketFactory: () => SockJS(this.buildUrl()),
      connectHeaders: {
        ['X-XSRF-TOKEN']: this.csrfService.getCSRF('XSRF-TOKEN'),
      },
    });
  }

  private sendActivity(): void {
    this.stomp.publish({
      destination: DESTINATION_ACTIVITY,
      body: JSON.stringify({ page: this.router.routerState.snapshot.url }),
    });
  }
}
