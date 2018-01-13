import { Component, ChangeDetectionStrategy  } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Observable, fromObject, fromObjectRecursive, PropertyChangeData, EventData, WrappedValue } from "tns-core-modules/data/observable";
import { ObservableArray, ChangedData, ChangeType } from "tns-core-modules/data/observable-array";
import { Page } from 'ui/page';

import { Pitch } from "../../services/pitch/pitch";
import { PitchService } from "../../services/pitch/pitch.service";
import { EventBusService } from "../../core/event-bus/event-bus.service";

const pitchesPerPage = 10;

@Component({
    selector: "ns-pitches",
    moduleId: module.id,
    templateUrl: "./pitches.component.html",
    styleUrls: [ './pitches.component.css' ]
})
export class PitchesComponent {
    pitches: ObservableArray<Pitch> = new ObservableArray<Pitch>();
    fetchedPitches: Pitch[];
    currentPage: number = 0;

    constructor( 
        private page: Page,
        private pitchService: PitchService,
        private eventBusService: EventBusService,
        private routerExtensions: RouterExtensions
    ) {
        this.eventBusService.fetchedPitchData.subscribe((pitches) => this.fetchPitches(pitches))
        this.eventBusService.changePitchesPagination.subscribe((data) => this.changePitchesPagination(data))
    }
    
    fetchPitches(pitches: Pitch[]): void {
        this.fetchedPitches = pitches;
        this.updatePitches();
    }

    updatePitches(): void {
        this.pitches.length = 0
        let lastElementIndex = Math.min(this.fetchedPitches.length, (this.currentPage + 1) * pitchesPerPage);
        for(let pitchCounter = 0 + this.currentPage * pitchesPerPage; pitchCounter < lastElementIndex; pitchCounter++) {
            this.pitches.push(this.fetchedPitches[pitchCounter]);
        }
        this.eventBusService.emitPaginationControllsAvailability({
            enabledNextPage: this.hasNextPage(),
            enabledPreviousPage: this.hasPreviousPage()
        })
    }

    changePitchesPagination(changeToNextPage): void {
        if(changeToNextPage.next) {
            this.nextPage();
        } else {
            this.previousPage();
        }
    }

    hasNextPage(): Boolean {
        return ((this.currentPage + 1) * 10) < this.fetchedPitches.length;
    }
    
    hasPreviousPage(): Boolean {
        return this.currentPage > 0;
    }

    nextPage(): void {
        this.currentPage++;
        this.updatePitches();
    }

    previousPage(): void {
        this.currentPage--;
        this.updatePitches();
    }
    
    onItemTap(event): void {
        this.routerExtensions.navigate(['/pitches', this.fetchedPitches[event.index].id]);
    }
}