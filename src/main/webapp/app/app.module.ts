import './vendor.ts';

import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2Webstorage } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';

import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { JhipsterWebsocketSampleApplicationSharedModule } from 'app/shared';
import { JhipsterWebsocketSampleApplicationCoreModule } from 'app/core';
import { JhipsterWebsocketSampleApplicationAppRoutingModule } from './app-routing.module';
import { JhipsterWebsocketSampleApplicationHomeModule } from './home/home.module';
import { JhipsterWebsocketSampleApplicationAccountModule } from './account/account.module';
import { JhipsterWebsocketSampleApplicationEntityModule } from './entities/entity.module';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
import { StateStorageService } from 'app/core/auth/state-storage.service';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterWebsocketSampleApplicationAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
        JhipsterWebsocketSampleApplicationSharedModule,
        JhipsterWebsocketSampleApplicationCoreModule,
        JhipsterWebsocketSampleApplicationHomeModule,
        JhipsterWebsocketSampleApplicationAccountModule,
        JhipsterWebsocketSampleApplicationEntityModule
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
    providers: [
        ProfileService,
        PaginationConfig,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true,
            deps: [StateStorageService, Injector]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
            deps: [JhiEventManager]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true,
            deps: [Injector]
        }
    ],
    bootstrap: [JhiMainComponent]
})
export class JhipsterWebsocketSampleApplicationAppModule {}
