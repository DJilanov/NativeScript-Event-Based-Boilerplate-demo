import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { DatePicker } from "ui/date-picker";
import { TextField } from "ui/text-field";
import { Page } from "ui/page";

import { BackendService } from "../../core/backend/backend.service";
import { EventBusService } from "../../core/event-bus/event-bus.service";

import { PitchService } from "../../services/pitch/pitch.service";

const dateRange = {
    minDate: new Date(1975, 0, 29),
    maxDate: new Date(2045, 0, 29)
};

@Component({
    selector: "ns-search-form",
    moduleId: module.id,
    templateUrl: "./search-form.component.html",
    styleUrls: [ './search-form.component.css' ]
})

export class SearchFormComponent {

    pitchId: number = 32990;
    startDate: Date = new Date();
    endDate: Date = new Date();

    startDateButtonVisible: Boolean = false;
    startDatePickerVisible: Boolean = false;
    endDateButtonVisible: Boolean = false
    endDatePickerVisible: Boolean = false
    
    constructor(
        private page: Page,
        private pitchService: PitchService,
        private backendService: BackendService,
        private eventBusService: EventBusService
    ) {

    }
    
    showStartDatePicker(): void {
        let textFieldStartDate = this.page.getViewById<TextField>("startDateTextField");
        this.startDateButtonVisible = true;
        this.startDatePickerVisible = true;

        setTimeout(function() {
            textFieldStartDate.dismissSoftInput();
        }, 100);
    }
    
    showEndDatePicker(): void {
        let textFieldEndDate = this.page.getViewById<TextField>("endDateTextField");
        this.endDateButtonVisible = true;
        this.endDatePickerVisible = true;

        setTimeout(function() {
            textFieldEndDate.dismissSoftInput();
        }, 100);
    }
    
    enterStartDate(): void {
        let datePicker = this.page.getViewById<DatePicker>("startDatePicker");
        let selectedDate = new Date(datePicker.year, datePicker.month - 1, datePicker.day);
        this.startDate = selectedDate;
        this.startDateButtonVisible = false;
        this.startDatePickerVisible = false;
    }

    enterEndDate(): void {
        let datePicker = this.page.getViewById<DatePicker>("endDatePicker");
        let selectedDate = new Date(datePicker.year, datePicker.month - 1, datePicker.day);
        this.endDate = selectedDate;
        this.endDateButtonVisible = false;
        this.endDatePickerVisible = false;
    }

    onDatePickerLoaded(args): void {
        let datePicker = <DatePicker>args.object;
        datePicker.minDate = dateRange.minDate;
        datePicker.maxDate = dateRange.maxDate;
    }

    onSeachTap(event): void {
        let idInput = this.page.getViewById<TextField>("pitchId");
        idInput.dismissSoftInput();
        this.backendService.fetchPitches({
            id: idInput.text,
            startDate: this.startDate.toISOString().split('T')[0],
            endDate: this.endDate.toISOString().split('T')[0],
        }).then(response => { 
            return response.json(); 
        }).then((jsonData) => {
            this.pitchService.setPitches(jsonData.data)
            this.eventBusService.emitFetchedPitchData(jsonData.data);
        });
    }
    
}