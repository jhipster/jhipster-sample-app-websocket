import { Injectable, inject } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

import { CSRF_TOKEN_COOKIE_NAME } from 'app/shared/jhipster/constants';

@Injectable({ providedIn: 'root' })
export class CSRFService {
  private readonly cookieService = inject(CookieService);

  getCSRF(name = CSRF_TOKEN_COOKIE_NAME): string {
    return this.cookieService.get(name);
  }
}
