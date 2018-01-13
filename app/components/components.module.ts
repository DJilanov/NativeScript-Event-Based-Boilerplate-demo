import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { throwIfAlreadyLoaded } from '../core/module-import-guard';

import { PitchComponent } from "./pitch/pitch.component";
import { SearchFormComponent } from "./search-form/search-form.component";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        NativeScriptModule
    ],
    exports: [
        PitchComponent,
        SearchFormComponent
    ],
    declarations: [
        PitchComponent,
        SearchFormComponent
    ]
})
export class ComponentsModule {
	constructor( @Optional() @SkipSelf() parentModule: CommonModule) {
		throwIfAlreadyLoaded(parentModule, 'ComponentsModule');
	}
}