import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from '../core/module-import-guard';

import { PitchService } from './pitch/pitch.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        PitchService
    ]
})
export class ServicesModule {
	constructor( @Optional() @SkipSelf() parentModule: CommonModule) {
		throwIfAlreadyLoaded(parentModule, 'ServiceModule');
	}
}