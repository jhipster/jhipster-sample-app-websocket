import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';
import { Component, inject } from '@angular/core';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import dayjs from 'dayjs/esm';

import { ApplicationConfigService } from 'app/core/config/application-config.service';

import { fontAwesomeIcons } from './config/font-awesome-icons';
import { TrackerService } from './core/tracker/tracker.service';
import Main from './layouts/main/main';

@Component({
  selector: 'jhi-app',
  template: '<jhi-main />',
  imports: [Main],
})
export default class App {
  private readonly applicationConfigService = inject(ApplicationConfigService);
  private readonly iconLibrary = inject(FaIconLibrary);
  private readonly trackerService = inject(TrackerService);
  private readonly dpConfig = inject(NgbDatepickerConfig);

  constructor() {
    this.trackerService.setup();
    this.applicationConfigService.setEndpointPrefix(SERVER_API_URL);
    registerLocaleData(locale);
    this.iconLibrary.addIcons(...fontAwesomeIcons);
    this.dpConfig.minDate = { year: dayjs().subtract(100, 'year').year(), month: 1, day: 1 };
  }
}
