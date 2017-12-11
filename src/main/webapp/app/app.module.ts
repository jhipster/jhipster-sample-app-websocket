import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterWebsocketSampleApplicationSharedModule, UserRouteAccessService } from './shared';
import { JhipsterWebsocketSampleApplicationAppRoutingModule} from './app-routing.module';
import { JhipsterWebsocketSampleApplicationHomeModule } from './home/home.module';
import { JhipsterWebsocketSampleApplicationAdminModule } from './admin/admin.module';
import { JhipsterWebsocketSampleApplicationAccountModule } from './account/account.module';
import { JhipsterWebsocketSampleApplicationEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

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
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterWebsocketSampleApplicationSharedModule,
        JhipsterWebsocketSampleApplicationHomeModule,
        JhipsterWebsocketSampleApplicationAdminModule,
        JhipsterWebsocketSampleApplicationAccountModule,
        JhipsterWebsocketSampleApplicationEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterWebsocketSampleApplicationAppModule {}
