"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var observable_1 = require("tns-core-modules/data/observable");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var page_1 = require("ui/page");
var pitch_service_1 = require("../../services/pitch/pitch.service");
var event_bus_service_1 = require("../../core/event-bus/event-bus.service");
var PitchesComponent = (function () {
    function PitchesComponent(page, pitchService, eventBusService, routerExtensions) {
        var _this = this;
        this.page = page;
        this.pitchService = pitchService;
        this.eventBusService = eventBusService;
        this.routerExtensions = routerExtensions;
        this.pitches = new observable_array_1.ObservableArray();
        this.pageData = new observable_1.Observable();
        this.eventBusService.fetchedPitchData.subscribe(function (pitches) { return _this.updatePitches(pitches); });
    }
    PitchesComponent.prototype.ngOnInit = function () {
        // this.myItems = this.itemService.getItems();
        // this.viewModel.set("myItems", this.myItems);
        // // ListView will be updated automatically when new item is pushed.
        // this.myItems.push({title:"Publishing"});
        // this.page.bindingContext = this.viewModel;
    };
    PitchesComponent.prototype.updatePitches = function (pitches) {
        this.pitches.length = 0;
        this.pitches.push(pitches);
        debugger;
        // this.pageData.set("pitches", this.pitches);
        console.log(pitches);
        // this.page.getViewById("pitches-list")['refresh']();
        // listView.refresh();
    };
    PitchesComponent.prototype.pageLoaded = function (args) {
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
            }];
        var items = new observable_array_1.ObservableArray([]);
        var pageData = new observable_1.Observable();
        this.page.bindingContext = pageData;
        items.push(data);
        pageData.set("pitches", items);
    };
    PitchesComponent.prototype.loadMore = function (args) {
        debugger;
    };
    PitchesComponent.prototype.onItemTap = function (event) {
        this.routerExtensions.navigate(['/pitches', this.pitches[event.index].id]);
    };
    PitchesComponent = __decorate([
        core_1.Component({
            selector: "ns-pitches",
            moduleId: module.id,
            templateUrl: "./pitches.component.html",
            styleUrls: ['./pitches.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page,
            pitch_service_1.PitchService,
            event_bus_service_1.EventBusService,
            router_1.RouterExtensions])
    ], PitchesComponent);
    return PitchesComponent;
}());
exports.PitchesComponent = PitchesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl0Y2hlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaXRjaGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUM1RSxzREFBK0Q7QUFDL0QsK0RBQTRJO0FBQzVJLDJFQUFrRztBQUNsRyxnQ0FBK0I7QUFHL0Isb0VBQWtFO0FBQ2xFLDRFQUF5RTtBQVF6RTtJQUlJLDBCQUNZLElBQVUsRUFDVixZQUEwQixFQUMxQixlQUFnQyxFQUNoQyxnQkFBa0M7UUFKOUMsaUJBT0M7UUFOVyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFQOUMsWUFBTyxHQUEyQixJQUFJLGtDQUFlLEVBQVMsQ0FBQztRQUMvRCxhQUFRLEdBQWUsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFRcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUE7SUFDN0YsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSw4Q0FBOEM7UUFDOUMsK0NBQStDO1FBRS9DLHFFQUFxRTtRQUNyRSwyQ0FBMkM7UUFFM0MsNkNBQTZDO0lBQ2pELENBQUM7SUFFRCx3Q0FBYSxHQUFiLFVBQWMsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLFFBQVEsQ0FBQztRQUNULDhDQUE4QztRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3BCLHNEQUFzRDtRQUN0RCxzQkFBc0I7SUFDMUIsQ0FBQztJQUNELHFDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ1gsUUFBUSxDQUFDO1FBQ1QsSUFBSSxJQUFJLEdBQUcsQ0FBQztnQkFDUixVQUFVLEVBQUUsZ0JBQWdCO2dCQUM1QixZQUFZLEVBQUUsQ0FBQztnQkFDZixVQUFVLEVBQUUsWUFBWTthQUNyQjtZQUNEO2dCQUNGLFVBQVUsRUFBRSxVQUFVO2dCQUN0QixZQUFZLEVBQUUsQ0FBQztnQkFDZixVQUFVLEVBQUUsWUFBWTthQUNyQixDQUFDLENBQUE7UUFDRixJQUFJLEtBQUssR0FBRyxJQUFJLGtDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEMsSUFBSSxRQUFRLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO1FBRXBDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELG1DQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1QsUUFBUSxDQUFDO0lBQ2IsQ0FBQztJQUVELG9DQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUEzRFEsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBRSx5QkFBeUIsQ0FBRTtTQUMzQyxDQUFDO3lDQU1vQixXQUFJO1lBQ0ksNEJBQVk7WUFDVCxtQ0FBZTtZQUNkLHlCQUFnQjtPQVJyQyxnQkFBZ0IsQ0E0RDVCO0lBQUQsdUJBQUM7Q0FBQSxBQTVERCxJQTREQztBQTVEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tT2JqZWN0LCBmcm9tT2JqZWN0UmVjdXJzaXZlLCBQcm9wZXJ0eUNoYW5nZURhdGEsIEV2ZW50RGF0YSwgV3JhcHBlZFZhbHVlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXksIENoYW5nZWREYXRhLCBDaGFuZ2VUeXBlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5cbmltcG9ydCB7IFBpdGNoIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BpdGNoL3BpdGNoXCI7XG5pbXBvcnQgeyBQaXRjaFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcGl0Y2gvcGl0Y2guc2VydmljZVwiO1xuaW1wb3J0IHsgRXZlbnRCdXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2NvcmUvZXZlbnQtYnVzL2V2ZW50LWJ1cy5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLXBpdGNoZXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGl0Y2hlcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWyAnLi9waXRjaGVzLmNvbXBvbmVudC5jc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgUGl0Y2hlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcGl0Y2hlczogT2JzZXJ2YWJsZUFycmF5PFBpdGNoPiA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8UGl0Y2g+KCk7XG4gICAgcGFnZURhdGE6IE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZSgpO1xuXG4gICAgY29uc3RydWN0b3IoIFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgcGl0Y2hTZXJ2aWNlOiBQaXRjaFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZXZlbnRCdXNTZXJ2aWNlOiBFdmVudEJ1c1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICkge1xuICAgICAgICB0aGlzLmV2ZW50QnVzU2VydmljZS5mZXRjaGVkUGl0Y2hEYXRhLnN1YnNjcmliZSgocGl0Y2hlcykgPT4gdGhpcy51cGRhdGVQaXRjaGVzKHBpdGNoZXMpKVxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyB0aGlzLm15SXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgICAgIC8vIHRoaXMudmlld01vZGVsLnNldChcIm15SXRlbXNcIiwgdGhpcy5teUl0ZW1zKTtcbiAgICBcbiAgICAgICAgLy8gLy8gTGlzdFZpZXcgd2lsbCBiZSB1cGRhdGVkIGF1dG9tYXRpY2FsbHkgd2hlbiBuZXcgaXRlbSBpcyBwdXNoZWQuXG4gICAgICAgIC8vIHRoaXMubXlJdGVtcy5wdXNoKHt0aXRsZTpcIlB1Ymxpc2hpbmdcIn0pO1xuICAgIFxuICAgICAgICAvLyB0aGlzLnBhZ2UuYmluZGluZ0NvbnRleHQgPSB0aGlzLnZpZXdNb2RlbDtcbiAgICB9XG5cbiAgICB1cGRhdGVQaXRjaGVzKHBpdGNoZXM6IFBpdGNoW10pIHtcbiAgICAgICAgdGhpcy5waXRjaGVzLmxlbmd0aCA9IDBcbiAgICAgICAgdGhpcy5waXRjaGVzLnB1c2gocGl0Y2hlcyk7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAvLyB0aGlzLnBhZ2VEYXRhLnNldChcInBpdGNoZXNcIiwgdGhpcy5waXRjaGVzKTtcbiAgICAgICAgY29uc29sZS5sb2cocGl0Y2hlcylcbiAgICAgICAgLy8gdGhpcy5wYWdlLmdldFZpZXdCeUlkKFwicGl0Y2hlcy1saXN0XCIpWydyZWZyZXNoJ10oKTtcbiAgICAgICAgLy8gbGlzdFZpZXcucmVmcmVzaCgpO1xuICAgIH1cbiAgICBwYWdlTG9hZGVkKGFyZ3MpIHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIHZhciBkYXRhID0gW3tcbiAgICAgICAgICAgIFwidGVzdE5hbWVcIjogXCJNdWx0aXBsaXppZXJlblwiLFxuICAgICAgICAgICAgXCJ0ZXN0S2xhc3NlXCI6IDMsXG4gICAgICAgICAgICBcInRlc3RGYWNoXCI6IFwiTWF0aGVtYXRpa1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidGVzdE5hbWVcIjogXCJBZGRpZXJlblwiLFxuICAgICAgICAgICAgXCJ0ZXN0S2xhc3NlXCI6IDMsXG4gICAgICAgICAgICBcInRlc3RGYWNoXCI6IFwiTWF0aGVtYXRpa1wiXG4gICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgIHZhciBpdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoW10pO1xuICAgICAgICAgICAgICB2YXIgcGFnZURhdGEgPSBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLnBhZ2UuYmluZGluZ0NvbnRleHQgPSBwYWdlRGF0YTtcbiAgICAgICAgXG4gICAgICAgIGl0ZW1zLnB1c2goZGF0YSk7XG4gICAgICAgIFxuICAgICAgICBwYWdlRGF0YS5zZXQoXCJwaXRjaGVzXCIsIGl0ZW1zKTtcbiAgICB9XG5cbiAgICBsb2FkTW9yZShhcmdzKSB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgIH1cblxuICAgIG9uSXRlbVRhcChldmVudCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvcGl0Y2hlcycsIHRoaXMucGl0Y2hlc1tldmVudC5pbmRleF0uaWRdKTtcbiAgICB9XG59Il19