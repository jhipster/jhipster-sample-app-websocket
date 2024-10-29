import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class CSRFService {
  private readonly cookieService = inject(CookieService);

  getCSRF(name = 'XSRF-TOKEN'): string {
    return this.cookieService.get(name);
  }
}
