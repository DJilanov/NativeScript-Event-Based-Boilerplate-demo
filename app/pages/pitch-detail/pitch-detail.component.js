"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pitch_service_1 = require("../../services/pitch/pitch.service");
var PitchDetailComponent = (function () {
    function PitchDetailComponent(pitchService, route) {
        this.pitchService = pitchService;
        this.route = route;
    }
    PitchDetailComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params["id"];
        this.pitch = this.pitchService.getPitch(id);
    };
    PitchDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-pitch-details",
            moduleId: module.id,
            templateUrl: "./pitch-detail.component.html",
            styleUrls: ['./pitch-detail.component.css']
        }),
        __metadata("design:paramtypes", [pitch_service_1.PitchService,
            router_1.ActivatedRoute])
    ], PitchDetailComponent);
    return PitchDetailComponent;
}());
exports.PitchDetailComponent = PitchDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl0Y2gtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBpdGNoLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBR2pELG9FQUFrRTtBQVFsRTtJQUdJLDhCQUNZLFlBQTBCLEVBQzFCLEtBQXFCO1FBRHJCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQzdCLENBQUM7SUFFTCx1Q0FBUSxHQUFSO1FBQ0ksSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQVhRLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBRSw4QkFBOEIsQ0FBRTtTQUNoRCxDQUFDO3lDQUs0Qiw0QkFBWTtZQUNuQix1QkFBYztPQUx4QixvQkFBb0IsQ0FZaEM7SUFBRCwyQkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBQaXRjaCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9waXRjaC9waXRjaFwiO1xuaW1wb3J0IHsgUGl0Y2hTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BpdGNoL3BpdGNoLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtcGl0Y2gtZGV0YWlsc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9waXRjaC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsgJy4vcGl0Y2gtZGV0YWlsLmNvbXBvbmVudC5jc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgUGl0Y2hEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHBpdGNoOiBQaXRjaDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBpdGNoU2VydmljZTogUGl0Y2hTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgICAgICB0aGlzLnBpdGNoID0gdGhpcy5waXRjaFNlcnZpY2UuZ2V0UGl0Y2goaWQpO1xuICAgIH1cbn1cbiJdfQ==