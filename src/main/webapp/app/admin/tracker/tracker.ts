import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';

import { Subscription } from 'rxjs';

import { TrackerActivity } from 'app/core/tracker/tracker-activity.model';
import { TrackerService } from 'app/core/tracker/tracker.service';
import SharedModule from 'app/shared/shared.module';

@Component({
  selector: 'jhi-tracker',
  imports: [SharedModule],
  templateUrl: './tracker.html',
})
export default class Tracker implements OnInit, OnDestroy {
  activities = signal<TrackerActivity[]>([]);
  subscription?: Subscription;

  private readonly trackerService = inject(TrackerService);

  showActivity(activity: TrackerActivity): void {
    const existingActivity = false;

    this.activities.update(activities => {
      activities = [...activities];
      const sessionIndex = activities.findIndex(a => a.sessionId === activity.sessionId);
      if (sessionIndex > -1) {
        // Update or remove existing session activity
        if (activity.page === 'logout') {
          activities.splice(sessionIndex, 1);
        } else {
          activities[sessionIndex] = activity;
        }
      } else if (activity.page !== 'logout') {
        activities.push(activity);
      }

      return activities;
    });
  }

  ngOnInit(): void {
    this.subscription = this.trackerService.subscribe({
      next: (activity: TrackerActivity) => {
        this.showActivity(activity);
      },
    });
    this.trackerService.sendActivity();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
