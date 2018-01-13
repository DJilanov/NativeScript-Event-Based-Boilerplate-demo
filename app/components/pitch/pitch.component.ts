import { Component, Input } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { Pitch } from "../../services/pitch/pitch";
import { PitchService } from "../../services/pitch/pitch.service";
import { UtilsService } from "../../shared/utils/utils.service";

const GBPtoEURrate = 1.13;

@Component({
    selector: "ns-pitch",
    moduleId: module.id,
    templateUrl: "./pitch.component.html",
    styleUrls: [ './pitch.component.css' ]
})
export class PitchComponent {
    
    @Input("selectedPitchId") selectedPitch: Pitch;

    constructor(
        private pitchService: PitchService,
        private utilsService: UtilsService,
        private routerExtensions: RouterExtensions
    ) {

    }

    getDuration(): string {
        let ends = new Date(this.selectedPitch.attributes.ends);
        let starts = new Date(this.selectedPitch.attributes.starts);
        return this.utilsService.getTimeDifference(ends, starts);
    }

    getGBPPrice(): string {
        if(this.selectedPitch.attributes && this.selectedPitch.attributes.currency === 'GBP') {
            return this.selectedPitch.attributes.price;
        } else {
            return (+this.selectedPitch.attributes.price * GBPtoEURrate).toFixed(2);
        }
    }
    
    getEURPrice(): string {
        if(this.selectedPitch.attributes && this.selectedPitch.attributes.currency === 'GBP') {
            return (+this.selectedPitch.attributes.price / GBPtoEURrate).toFixed(2);
        } else {
            return this.selectedPitch.attributes.price;
        }
    }

    onItemTap(event): void {
        this.routerExtensions.navigate(['/pitches', this.selectedPitch.id]);
    }
}