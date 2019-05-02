import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  JhipsterWebsocketSampleApplicationSharedLibsModule,
  JhipsterWebsocketSampleApplicationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [JhipsterWebsocketSampleApplicationSharedLibsModule, JhipsterWebsocketSampleApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipsterWebsocketSampleApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterWebsocketSampleApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterWebsocketSampleApplicationSharedModule
    };
  }
}
