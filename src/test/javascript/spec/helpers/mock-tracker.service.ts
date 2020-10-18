import Spy = jasmine.Spy;

import { SpyObject } from './spyobject';
import { TrackerService } from 'app/core/tracker/tracker.service';

export class MockTrackerService extends SpyObject {
  connectSpy: Spy;
  disconnectSpy: Spy;

  constructor() {
    super(TrackerService);

    this.connectSpy = this.spy('connect').andReturn(this);
    this.disconnectSpy = this.spy('disconnect').andReturn(this);
  }
}
