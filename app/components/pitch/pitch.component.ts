import { Component, OnInit, Input } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { Pitch } from "../../services/pitch/pitch";
import { PitchService } from "../../services/pitch/pitch.service";

@Component({
    selector: "ns-pitch",
    moduleId: module.id,
    templateUrl: "./pitch.component.html",
    styleUrls: [ './pitch.component.css' ]
})
export class PitchComponent implements OnInit {
    
    @Input("selectedPitchId") selectedPitchId;

    selectedPitch: Pitch;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(
        private pitchService: PitchService,
        private routerExtensions: RouterExtensions
    ) {

    }

    ngOnInit(): void {
        this.selectedPitch = this.pitchService.getPitch(this.selectedPitchId);
    }

    onItemTap(event) {
        // this.routerExtensions.navigate(['/pitches', this.items[event.index].id]);
    }
}