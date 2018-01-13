import { Component, Input, OnInit } from "@angular/core";
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
    
    @Input("pitch") pitch: Pitch;

    constructor(
        private pitchService: PitchService,
        private utilsService: UtilsService,
        private routerExtensions: RouterExtensions
    ) {

    }
    
    ngOnInit(): void {
        // debugger;
    }

    getDuration(): string {
        let ends = new Date(this.pitch.attributes.ends);
        let starts = new Date(this.pitch.attributes.starts);
        return this.utilsService.getTimeDifference(ends, starts);
    }

    getGBPPrice(): string {
        if(this.pitch.attributes && this.pitch.attributes.currency === 'GBP') {
            return this.pitch.attributes.price;
        } else {
            return (+this.pitch.attributes.price * GBPtoEURrate).toFixed(2);
        }
    }
    
    getEURPrice(): string {
        if(this.pitch.attributes && this.pitch.attributes.currency === 'GBP') {
            return (+this.pitch.attributes.price / GBPtoEURrate).toFixed(2);
        } else {
            return this.pitch.attributes.price;
        }
    }

    onItemTap(event): void {
        this.routerExtensions.navigate(['/pitches', this.pitch.id]);
    }
}