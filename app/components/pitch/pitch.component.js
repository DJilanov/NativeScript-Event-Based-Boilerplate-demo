"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var pitch_service_1 = require("../../services/pitch/pitch.service");
var PitchComponent = (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function PitchComponent(pitchService, routerExtensions) {
        this.pitchService = pitchService;
        this.routerExtensions = routerExtensions;
    }
    PitchComponent.prototype.ngOnInit = function () {
        this.selectedPitch = this.pitchService.getPitch(this.selectedPitchId);
    };
    PitchComponent.prototype.onItemTap = function (event) {
        // this.routerExtensions.navigate(['/pitches', this.items[event.index].id]);
    };
    __decorate([
        core_1.Input("selectedPitchId"),
        __metadata("design:type", Object)
    ], PitchComponent.prototype, "selectedPitchId", void 0);
    PitchComponent = __decorate([
        core_1.Component({
            selector: "ns-pitch",
            moduleId: module.id,
            templateUrl: "./pitch.component.html",
            styleUrls: ['./pitch.component.css']
        }),
        __metadata("design:paramtypes", [pitch_service_1.PitchService,
            router_1.RouterExtensions])
    ], PitchComponent);
    return PitchComponent;
}());
exports.PitchComponent = PitchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl0Y2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGl0Y2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELHNEQUErRDtBQUcvRCxvRUFBa0U7QUFRbEU7SUFNSSw2SUFBNkk7SUFDN0ksaUhBQWlIO0lBQ2pILHdCQUNZLFlBQTBCLEVBQzFCLGdCQUFrQztRQURsQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRzlDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsNEVBQTRFO0lBQ2hGLENBQUM7SUFuQnlCO1FBQXpCLFlBQUssQ0FBQyxpQkFBaUIsQ0FBQzs7MkRBQWlCO0lBRmpDLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFFLHVCQUF1QixDQUFFO1NBQ3pDLENBQUM7eUNBVTRCLDRCQUFZO1lBQ1IseUJBQWdCO09BVnJDLGNBQWMsQ0FzQjFCO0lBQUQscUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBQaXRjaCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9waXRjaC9waXRjaFwiO1xuaW1wb3J0IHsgUGl0Y2hTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BpdGNoL3BpdGNoLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtcGl0Y2hcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGl0Y2guY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsgJy4vcGl0Y2guY29tcG9uZW50LmNzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBQaXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgXG4gICAgQElucHV0KFwic2VsZWN0ZWRQaXRjaElkXCIpIHNlbGVjdGVkUGl0Y2hJZDtcblxuICAgIHNlbGVjdGVkUGl0Y2g6IFBpdGNoO1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGl0Y2hTZXJ2aWNlOiBQaXRjaFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQaXRjaCA9IHRoaXMucGl0Y2hTZXJ2aWNlLmdldFBpdGNoKHRoaXMuc2VsZWN0ZWRQaXRjaElkKTtcbiAgICB9XG5cbiAgICBvbkl0ZW1UYXAoZXZlbnQpIHtcbiAgICAgICAgLy8gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3BpdGNoZXMnLCB0aGlzLml0ZW1zW2V2ZW50LmluZGV4XS5pZF0pO1xuICAgIH1cbn0iXX0=