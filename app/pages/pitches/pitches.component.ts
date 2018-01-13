import { Component, OnInit, ChangeDetectionStrategy  } from "@angular/core";
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
export class PitchesComponent implements OnInit {
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

    ngOnInit(): void {
        // this.myItems = this.itemService.getItems();
        // this.viewModel.set("myItems", this.myItems);
    
        // // ListView will be updated automatically when new item is pushed.
        // this.myItems.push({title:"Publishing"});
    
        // this.page.bindingContext = this.viewModel;
    }

    updatePitches(pitches: Pitch[]) {
        this.pitches.length = 0
        this.pitches.push(pitches);
        debugger;
        // this.pageData.set("pitches", this.pitches);
        console.log(pitches)
        // this.page.getViewById("pitches-list")['refresh']();
        // listView.refresh();
    }
    pageLoaded(args) {
        debugger;
        var data = [{
            "testName": "Multiplizieren",
            "testKlasse": 3,
            "testFach": "Mathematik"
              },
              {
            "testName": "Addieren",
            "testKlasse": 3,
            "testFach": "Mathematik"
              }]
              var items = new ObservableArray([]);
              var pageData = new Observable();
        this.page.bindingContext = pageData;
        
        items.push(data);
        
        pageData.set("pitches", items);
    }

    loadMore(args) {
        debugger;
    }

    onItemTap(event) {
        this.routerExtensions.navigate(['/pitches', this.pitches[event.index].id]);
    }
}