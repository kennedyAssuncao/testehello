import { NgModule } from '@angular/core';

import { TestehelloSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TestehelloSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TestehelloSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TestehelloSharedCommonModule {}
