import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { throwIfAlreadyLoaded } from '../core/module-import-guard';

import { ComponentsModule } from '../components/components.module';

import { PitchesComponent } from "./pitches/pitches.component";
import { PitchDetailComponent } from "./pitch-detail/pitch-detail.component";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        NativeScriptModule,
        ComponentsModule
    ],
    exports: [
        PitchesComponent,
        PitchDetailComponent
    ],
    declarations: [
        PitchesComponent,
        PitchDetailComponent
    ]
})
export class PagesModule {
	constructor( @Optional() @SkipSelf() parentModule: CommonModule) {
		throwIfAlreadyLoaded(parentModule, 'PagesModule');
	}
}