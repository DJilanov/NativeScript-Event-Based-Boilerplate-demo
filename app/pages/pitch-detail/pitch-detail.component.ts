import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Pitch } from "../../services/pitch/pitch";
import { PitchService } from "../../services/pitch/pitch.service";

@Component({
    selector: "ns-pitch-details",
    moduleId: module.id,
    templateUrl: "./pitch-detail.component.html",
    styleUrls: [ './pitch-detail.component.css' ]
})
export class PitchDetailComponent implements OnInit {
    pitch: Pitch;

    constructor(
        private pitchService: PitchService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.pitch = this.pitchService.getPitch(id.toString());
    }
}
