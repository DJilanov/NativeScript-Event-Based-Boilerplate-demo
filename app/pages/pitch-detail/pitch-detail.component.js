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
        var id = +this.route.snapshot.params["id"];
        this.pitch = this.pitchService.getPitch(id.toString());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl0Y2gtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBpdGNoLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBR2pELG9FQUFrRTtBQVFsRTtJQUdJLDhCQUNZLFlBQTBCLEVBQzFCLEtBQXFCO1FBRHJCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQzdCLENBQUM7SUFFTCx1Q0FBUSxHQUFSO1FBQ0ksSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBWFEsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFFLDhCQUE4QixDQUFFO1NBQ2hELENBQUM7eUNBSzRCLDRCQUFZO1lBQ25CLHVCQUFjO09BTHhCLG9CQUFvQixDQVloQztJQUFELDJCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFBpdGNoIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BpdGNoL3BpdGNoXCI7XG5pbXBvcnQgeyBQaXRjaFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcGl0Y2gvcGl0Y2guc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1waXRjaC1kZXRhaWxzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BpdGNoLWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWyAnLi9waXRjaC1kZXRhaWwuY29tcG9uZW50LmNzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBQaXRjaERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcGl0Y2g6IFBpdGNoO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGl0Y2hTZXJ2aWNlOiBQaXRjaFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgICAgICB0aGlzLnBpdGNoID0gdGhpcy5waXRjaFNlcnZpY2UuZ2V0UGl0Y2goaWQudG9TdHJpbmcoKSk7XG4gICAgfVxufVxuIl19