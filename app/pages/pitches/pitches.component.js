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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl0Y2hlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaXRjaGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUM1RSxzREFBK0Q7QUFDL0QsK0RBQTRJO0FBQzVJLDJFQUFrRztBQUNsRyxnQ0FBK0I7QUFHL0Isb0VBQWtFO0FBQ2xFLDRFQUF5RTtBQVF6RTtJQUlJLDBCQUNZLElBQVUsRUFDVixZQUEwQixFQUMxQixlQUFnQyxFQUNoQyxnQkFBa0M7UUFKOUMsaUJBT0M7UUFOVyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFQOUMsWUFBTyxHQUEyQixJQUFJLGtDQUFlLEVBQVMsQ0FBQztRQUMvRCxhQUFRLEdBQWUsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFRcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUE7SUFDN0YsQ0FBQztJQUVELG1DQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsd0NBQWEsR0FBYixVQUFjLE9BQWdCO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixRQUFRLENBQUM7UUFDVCw4Q0FBOEM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNwQixzREFBc0Q7UUFDdEQsc0JBQXNCO0lBQzFCLENBQUM7SUFFRCxvQ0FBUyxHQUFULFVBQVUsS0FBSztRQUNYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBN0JRLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUUseUJBQXlCLENBQUU7U0FDM0MsQ0FBQzt5Q0FNb0IsV0FBSTtZQUNJLDRCQUFZO1lBQ1QsbUNBQWU7WUFDZCx5QkFBZ0I7T0FSckMsZ0JBQWdCLENBOEI1QjtJQUFELHVCQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5QlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5ICB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbU9iamVjdCwgZnJvbU9iamVjdFJlY3Vyc2l2ZSwgUHJvcGVydHlDaGFuZ2VEYXRhLCBFdmVudERhdGEsIFdyYXBwZWRWYWx1ZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5LCBDaGFuZ2VkRGF0YSwgQ2hhbmdlVHlwZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuXG5pbXBvcnQgeyBQaXRjaCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9waXRjaC9waXRjaFwiO1xuaW1wb3J0IHsgUGl0Y2hTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BpdGNoL3BpdGNoLnNlcnZpY2VcIjtcbmltcG9ydCB7IEV2ZW50QnVzU2VydmljZSB9IGZyb20gXCIuLi8uLi9jb3JlL2V2ZW50LWJ1cy9ldmVudC1idXMuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1waXRjaGVzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BpdGNoZXMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsgJy4vcGl0Y2hlcy5jb21wb25lbnQuY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFBpdGNoZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHBpdGNoZXM6IE9ic2VydmFibGVBcnJheTxQaXRjaD4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFBpdGNoPigpO1xuICAgIHBhZ2VEYXRhOiBPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUoKTtcblxuICAgIGNvbnN0cnVjdG9yKCBcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIHBpdGNoU2VydmljZTogUGl0Y2hTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGV2ZW50QnVzU2VydmljZTogRXZlbnRCdXNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcbiAgICApIHtcbiAgICAgICAgdGhpcy5ldmVudEJ1c1NlcnZpY2UuZmV0Y2hlZFBpdGNoRGF0YS5zdWJzY3JpYmUoKHBpdGNoZXMpID0+IHRoaXMudXBkYXRlUGl0Y2hlcyhwaXRjaGVzKSlcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIHVwZGF0ZVBpdGNoZXMocGl0Y2hlczogUGl0Y2hbXSkge1xuICAgICAgICB0aGlzLnBpdGNoZXMubGVuZ3RoID0gMFxuICAgICAgICB0aGlzLnBpdGNoZXMucHVzaChwaXRjaGVzKTtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIC8vIHRoaXMucGFnZURhdGEuc2V0KFwicGl0Y2hlc1wiLCB0aGlzLnBpdGNoZXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhwaXRjaGVzKVxuICAgICAgICAvLyB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJwaXRjaGVzLWxpc3RcIilbJ3JlZnJlc2gnXSgpO1xuICAgICAgICAvLyBsaXN0Vmlldy5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgb25JdGVtVGFwKGV2ZW50KSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9waXRjaGVzJywgdGhpcy5waXRjaGVzW2V2ZW50LmluZGV4XS5pZF0pO1xuICAgIH1cbn0iXX0=