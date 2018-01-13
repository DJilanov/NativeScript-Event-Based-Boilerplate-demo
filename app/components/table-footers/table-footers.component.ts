import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { Pitch } from "../../services/pitch/pitch";
import { PitchService } from "../../services/pitch/pitch.service";

@Component({
    selector: "ns-table-footers",
    moduleId: module.id,
    templateUrl: "./table-footers.component.html",
    styleUrls: [ './table-footers.component.css' ]
})
export class TableFootersComponent {

    constructor(
        private pitchService: PitchService,
        private routerExtensions: RouterExtensions
    ) {

    }
}