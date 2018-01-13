import { Component, ChangeDetectionStrategy  } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Observable, fromObject, fromObjectRecursive, PropertyChangeData, EventData, WrappedValue } from "tns-core-modules/data/observable";
import { ObservableArray, ChangedData, ChangeType } from "tns-core-modules/data/observable-array";
import { Page } from 'ui/page';

import { Pitch } from "../../services/pitch/pitch";
import { PitchService } from "../../services/pitch/pitch.service";
import { EventBusService } from "../../core/event-bus/event-bus.service";

@Component({
    selector: "ns-pitches",
    moduleId: module.id,
    templateUrl: "./pitches.component.html",
    styleUrls: [ './pitches.component.css' ]
})
export class PitchesComponent {
    pitches: ObservableArray<Pitch> = new ObservableArray<Pitch>();
    pageData: Observable = new Observable();

    constructor( 
        private page: Page,
        private pitchService: PitchService,
        private eventBusService: EventBusService,
        private routerExtensions: RouterExtensions
    ) {
        this.eventBusService.fetchedPitchData.subscribe((pitches) => this.updatePitches(pitches))
    }

    updatePitches(pitches: Pitch[]): void {
        this.pitches.length = 0
        this.pitches.push(pitches);
    }

    onItemTap(event): void {
        this.routerExtensions.navigate(['/pitches', this.pitches[event.index].id]);
    }
}