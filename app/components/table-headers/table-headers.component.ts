import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { Pitch } from "../../services/pitch/pitch";
import { PitchService } from "../../services/pitch/pitch.service";

@Component({
    selector: "ns-table-headers",
    moduleId: module.id,
    templateUrl: "./table-headers.component.html",
    styleUrls: [ './table-headers.component.css' ]
})
export class TableHeadersComponent {

    constructor(
        private pitchService: PitchService,
        private routerExtensions: RouterExtensions
    ) {

    }
}