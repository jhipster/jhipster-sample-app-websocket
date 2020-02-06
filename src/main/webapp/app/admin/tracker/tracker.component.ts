import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TrackerService } from 'app/core/tracker/tracker.service';
import { TrackerActivity } from 'app/core/tracker/tracker-activity.model';

@Component({
  selector: 'jhi-tracker',
  templateUrl: './tracker.component.html'
})
export class TrackerComponent implements OnInit, OnDestroy {
  activities: TrackerActivity[] = [];
  subscription?: Subscription;

  constructor(private trackerService: TrackerService) {}

  showActivity(activity: TrackerActivity): void {
    let existingActivity = false;

    for (let index = 0; index < this.activities.length; index++) {
      if (this.activities[index].sessionId === activity.sessionId) {
        existingActivity = true;
        if (activity.page === 'logout') {
          this.activities.splice(index, 1);
        } else {
          this.activities[index] = activity;
        }
      }
    }

    if (!existingActivity && activity.page !== 'logout') {
      this.activities.push(activity);
    }
  }

  ngOnInit(): void {
    this.trackerService.subscribe();
    this.subscription = this.trackerService.receive().subscribe((activity: TrackerActivity) => {
      this.showActivity(activity);
    });
  }

  ngOnDestroy(): void {
    this.trackerService.unsubscribe();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
