import { Route } from '@angular/router';

import { TrackerComponent } from './tracker.component';

export const trackerRoute: Route = {
  path: '',
  component: TrackerComponent,
  data: {
    pageTitle: 'tracker.title',
  },
};
