import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { throwIfAlreadyLoaded } from '../core/module-import-guard';

import { PitchComponent } from "./pitch/pitch.component";
import { SearchFormComponent } from "./search-form/search-form.component";
import { TableFootersComponent } from "./table-footers/table-footers.component";
import { TableHeadersComponent } from "./table-headers/table-headers.component";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        NativeScriptModule
    ],
    exports: [
        PitchComponent,
        SearchFormComponent,
        TableFootersComponent,
        TableHeadersComponent
    ],
    declarations: [
        PitchComponent,
        SearchFormComponent,
        TableFootersComponent,
        TableHeadersComponent
    ]
})
export class ComponentsModule {
	constructor( @Optional() @SkipSelf() parentModule: CommonModule) {
		throwIfAlreadyLoaded(parentModule, 'ComponentsModule');
	}
}