"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var page_1 = require("ui/page");
var pitch_service_1 = require("../../services/pitch/pitch.service");
var event_bus_service_1 = require("../../core/event-bus/event-bus.service");
var pitchesPerPage = 10;
var PitchesComponent = (function () {
    function PitchesComponent(page, pitchService, eventBusService, routerExtensions) {
        var _this = this;
        this.page = page;
        this.pitchService = pitchService;
        this.eventBusService = eventBusService;
        this.routerExtensions = routerExtensions;
        this.pitches = new observable_array_1.ObservableArray();
        this.currentPage = 0;
        this.eventBusService.fetchedPitchData.subscribe(function (pitches) { return _this.fetchPitches(pitches); });
        this.eventBusService.changePitchesPagination.subscribe(function (data) { return _this.changePitchesPagination(data); });
    }
    PitchesComponent.prototype.fetchPitches = function (pitches) {
        this.fetchedPitches = pitches;
        this.updatePitches();
    };
    PitchesComponent.prototype.updatePitches = function () {
        this.pitches.length = 0;
        var lastElementIndex = Math.min(this.fetchedPitches.length, (this.currentPage + 1) * pitchesPerPage);
        for (var pitchCounter = 0 + this.currentPage * pitchesPerPage; pitchCounter < lastElementIndex; pitchCounter++) {
            this.pitches.push(this.fetchedPitches[pitchCounter]);
        }
        this.eventBusService.emitPaginationControllsAvailability({
            enabledNextPage: this.hasNextPage(),
            enabledPreviousPage: this.hasPreviousPage()
        });
    };
    PitchesComponent.prototype.changePitchesPagination = function (changeToNextPage) {
        if (changeToNextPage.next) {
            this.nextPage();
        }
        else {
            this.previousPage();
        }
    };
    PitchesComponent.prototype.hasNextPage = function () {
        return ((this.currentPage + 1) * 10) < this.fetchedPitches.length;
    };
    PitchesComponent.prototype.hasPreviousPage = function () {
        return this.currentPage > 0;
    };
    PitchesComponent.prototype.nextPage = function () {
        this.currentPage++;
        this.updatePitches();
    };
    PitchesComponent.prototype.previousPage = function () {
        this.currentPage--;
        this.updatePitches();
    };
    PitchesComponent.prototype.onItemTap = function (event) {
        this.routerExtensions.navigate(['/pitches', this.fetchedPitches[event.index].id]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl0Y2hlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaXRjaGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUNwRSxzREFBK0Q7QUFFL0QsMkVBQWtHO0FBQ2xHLGdDQUErQjtBQUcvQixvRUFBa0U7QUFDbEUsNEVBQXlFO0FBRXpFLElBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQztBQVExQjtJQUtJLDBCQUNZLElBQVUsRUFDVixZQUEwQixFQUMxQixlQUFnQyxFQUNoQyxnQkFBa0M7UUFKOUMsaUJBUUM7UUFQVyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFSOUMsWUFBTyxHQUEyQixJQUFJLGtDQUFlLEVBQVMsQ0FBQztRQUUvRCxnQkFBVyxHQUFXLENBQUMsQ0FBQztRQVFwQixJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQTtRQUN4RixJQUFJLENBQUMsZUFBZSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFBO0lBQ3hHLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsT0FBZ0I7UUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx3Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUM7UUFDckcsR0FBRyxDQUFBLENBQUMsSUFBSSxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxFQUFFLFlBQVksR0FBRyxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDO1lBQzVHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQ0FBbUMsQ0FBQztZQUNyRCxlQUFlLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNuQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFO1NBQzlDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxrREFBdUIsR0FBdkIsVUFBd0IsZ0JBQWdCO1FBQ3BDLEVBQUUsQ0FBQSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDO0lBQ0wsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7SUFDdEUsQ0FBQztJQUVELDBDQUFlLEdBQWY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx1Q0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsb0NBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQTVEUSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFFLHlCQUF5QixDQUFFO1NBQzNDLENBQUM7eUNBT29CLFdBQUk7WUFDSSw0QkFBWTtZQUNULG1DQUFlO1lBQ2QseUJBQWdCO09BVHJDLGdCQUFnQixDQTZENUI7SUFBRCx1QkFBQztDQUFBLEFBN0RELElBNkRDO0FBN0RZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbU9iamVjdCwgZnJvbU9iamVjdFJlY3Vyc2l2ZSwgUHJvcGVydHlDaGFuZ2VEYXRhLCBFdmVudERhdGEsIFdyYXBwZWRWYWx1ZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXksIENoYW5nZWREYXRhLCBDaGFuZ2VUeXBlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcclxuXHJcbmltcG9ydCB7IFBpdGNoIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BpdGNoL3BpdGNoXCI7XHJcbmltcG9ydCB7IFBpdGNoU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9waXRjaC9waXRjaC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEV2ZW50QnVzU2VydmljZSB9IGZyb20gXCIuLi8uLi9jb3JlL2V2ZW50LWJ1cy9ldmVudC1idXMuc2VydmljZVwiO1xyXG5cclxuY29uc3QgcGl0Y2hlc1BlclBhZ2UgPSAxMDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtcGl0Y2hlc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGl0Y2hlcy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbICcuL3BpdGNoZXMuY29tcG9uZW50LmNzcycgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGl0Y2hlc0NvbXBvbmVudCB7XHJcbiAgICBwaXRjaGVzOiBPYnNlcnZhYmxlQXJyYXk8UGl0Y2g+ID0gbmV3IE9ic2VydmFibGVBcnJheTxQaXRjaD4oKTtcclxuICAgIGZldGNoZWRQaXRjaGVzOiBQaXRjaFtdO1xyXG4gICAgY3VycmVudFBhZ2U6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcclxuICAgICAgICBwcml2YXRlIHBpdGNoU2VydmljZTogUGl0Y2hTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZXZlbnRCdXNTZXJ2aWNlOiBFdmVudEJ1c1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmV2ZW50QnVzU2VydmljZS5mZXRjaGVkUGl0Y2hEYXRhLnN1YnNjcmliZSgocGl0Y2hlcykgPT4gdGhpcy5mZXRjaFBpdGNoZXMocGl0Y2hlcykpXHJcbiAgICAgICAgdGhpcy5ldmVudEJ1c1NlcnZpY2UuY2hhbmdlUGl0Y2hlc1BhZ2luYXRpb24uc3Vic2NyaWJlKChkYXRhKSA9PiB0aGlzLmNoYW5nZVBpdGNoZXNQYWdpbmF0aW9uKGRhdGEpKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmZXRjaFBpdGNoZXMocGl0Y2hlczogUGl0Y2hbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZmV0Y2hlZFBpdGNoZXMgPSBwaXRjaGVzO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGl0Y2hlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBpdGNoZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5waXRjaGVzLmxlbmd0aCA9IDBcclxuICAgICAgICBsZXQgbGFzdEVsZW1lbnRJbmRleCA9IE1hdGgubWluKHRoaXMuZmV0Y2hlZFBpdGNoZXMubGVuZ3RoLCAodGhpcy5jdXJyZW50UGFnZSArIDEpICogcGl0Y2hlc1BlclBhZ2UpO1xyXG4gICAgICAgIGZvcihsZXQgcGl0Y2hDb3VudGVyID0gMCArIHRoaXMuY3VycmVudFBhZ2UgKiBwaXRjaGVzUGVyUGFnZTsgcGl0Y2hDb3VudGVyIDwgbGFzdEVsZW1lbnRJbmRleDsgcGl0Y2hDb3VudGVyKyspIHtcclxuICAgICAgICAgICAgdGhpcy5waXRjaGVzLnB1c2godGhpcy5mZXRjaGVkUGl0Y2hlc1twaXRjaENvdW50ZXJdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ldmVudEJ1c1NlcnZpY2UuZW1pdFBhZ2luYXRpb25Db250cm9sbHNBdmFpbGFiaWxpdHkoe1xyXG4gICAgICAgICAgICBlbmFibGVkTmV4dFBhZ2U6IHRoaXMuaGFzTmV4dFBhZ2UoKSxcclxuICAgICAgICAgICAgZW5hYmxlZFByZXZpb3VzUGFnZTogdGhpcy5oYXNQcmV2aW91c1BhZ2UoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUGl0Y2hlc1BhZ2luYXRpb24oY2hhbmdlVG9OZXh0UGFnZSk6IHZvaWQge1xyXG4gICAgICAgIGlmKGNoYW5nZVRvTmV4dFBhZ2UubmV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLm5leHRQYWdlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1BhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFzTmV4dFBhZ2UoKTogQm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICgodGhpcy5jdXJyZW50UGFnZSArIDEpICogMTApIDwgdGhpcy5mZXRjaGVkUGl0Y2hlcy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhc1ByZXZpb3VzUGFnZSgpOiBCb29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UGFnZSA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFBhZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSsrO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGl0Y2hlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzUGFnZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlLS07XHJcbiAgICAgICAgdGhpcy51cGRhdGVQaXRjaGVzKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uSXRlbVRhcChldmVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9waXRjaGVzJywgdGhpcy5mZXRjaGVkUGl0Y2hlc1tldmVudC5pbmRleF0uaWRdKTtcclxuICAgIH1cclxufSJdfQ==