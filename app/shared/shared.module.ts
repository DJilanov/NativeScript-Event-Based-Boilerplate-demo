import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { throwIfAlreadyLoaded } from '../core/module-import-guard';

import { UtilsService } from './utils/utils.service';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
    ],
    exports: [
    ],
    declarations: [
    ],
    providers: [
        UtilsService
    ]
})
export class SharedModule {
	constructor( @Optional() @SkipSelf() parentModule: CommonModule) {
		throwIfAlreadyLoaded(parentModule, 'SharedModule');
	}
}