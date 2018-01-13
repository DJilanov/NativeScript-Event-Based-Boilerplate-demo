import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from '../core/module-import-guard';

// import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [

    ],
    declarations: [
        
    ]
})
export class FeedbackModule {
	constructor( @Optional() @SkipSelf() parentModule: CommonModule) {
		throwIfAlreadyLoaded(parentModule, 'FeedbackModule');
	}
}