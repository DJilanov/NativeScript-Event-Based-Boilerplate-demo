import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { PitchesComponent } from "./pages/pitches/pitches.component";
import { PitchDetailComponent } from "./pages/pitch-detail/pitch-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/pitches", pathMatch: "full" },
    { path: "pitches", component: PitchesComponent },
    { path: "pitches/:id", component: PitchDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }