"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var pitch_service_1 = require("../../services/pitch/pitch.service");
var utils_service_1 = require("../../shared/utils/utils.service");
var GBPtoEURrate = 1.13;
var PitchComponent = (function () {
    function PitchComponent(pitchService, utilsService, routerExtensions) {
        this.pitchService = pitchService;
        this.utilsService = utilsService;
        this.routerExtensions = routerExtensions;
    }
    PitchComponent.prototype.ngOnInit = function () {
        // debugger;
    };
    PitchComponent.prototype.getDuration = function () {
        var ends = new Date(this.pitch.attributes.ends);
        var starts = new Date(this.pitch.attributes.starts);
        return this.utilsService.getTimeDifference(ends, starts);
    };
    PitchComponent.prototype.getGBPPrice = function () {
        if (this.pitch.attributes && this.pitch.attributes.currency === 'GBP') {
            return this.pitch.attributes.price;
        }
        else {
            return (+this.pitch.attributes.price * GBPtoEURrate).toFixed(2);
        }
    };
    PitchComponent.prototype.getEURPrice = function () {
        if (this.pitch.attributes && this.pitch.attributes.currency === 'GBP') {
            return (+this.pitch.attributes.price / GBPtoEURrate).toFixed(2);
        }
        else {
            return this.pitch.attributes.price;
        }
    };
    PitchComponent.prototype.onItemTap = function (event) {
        this.routerExtensions.navigate(['/pitches', this.pitch.id]);
    };
    __decorate([
        core_1.Input("pitch"),
        __metadata("design:type", Object)
    ], PitchComponent.prototype, "pitch", void 0);
    PitchComponent = __decorate([
        core_1.Component({
            selector: "ns-pitch",
            moduleId: module.id,
            templateUrl: "./pitch.component.html",
            styleUrls: ['./pitch.component.css']
        }),
        __metadata("design:paramtypes", [pitch_service_1.PitchService,
            utils_service_1.UtilsService,
            router_1.RouterExtensions])
    ], PitchComponent);
    return PitchComponent;
}());
exports.PitchComponent = PitchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl0Y2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGl0Y2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELHNEQUErRDtBQUcvRCxvRUFBa0U7QUFDbEUsa0VBQWdFO0FBRWhFLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQztBQVExQjtJQUlJLHdCQUNZLFlBQTBCLEVBQzFCLFlBQTBCLEVBQzFCLGdCQUFrQztRQUZsQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRzlDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksWUFBWTtJQUNoQixDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELElBQUksTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25FLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDdkMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25FLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBdENlO1FBQWYsWUFBSyxDQUFDLE9BQU8sQ0FBQzs7aURBQWM7SUFGcEIsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUUsdUJBQXVCLENBQUU7U0FDekMsQ0FBQzt5Q0FNNEIsNEJBQVk7WUFDWiw0QkFBWTtZQUNSLHlCQUFnQjtPQVByQyxjQUFjLENBeUMxQjtJQUFELHFCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUGl0Y2ggfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcGl0Y2gvcGl0Y2hcIjtcbmltcG9ydCB7IFBpdGNoU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9waXRjaC9waXRjaC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3V0aWxzL3V0aWxzLnNlcnZpY2VcIjtcblxuY29uc3QgR0JQdG9FVVJyYXRlID0gMS4xMztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtcGl0Y2hcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGl0Y2guY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsgJy4vcGl0Y2guY29tcG9uZW50LmNzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBQaXRjaENvbXBvbmVudCB7XG4gICAgXG4gICAgQElucHV0KFwicGl0Y2hcIikgcGl0Y2g6IFBpdGNoO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGl0Y2hTZXJ2aWNlOiBQaXRjaFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdXRpbHNTZXJ2aWNlOiBVdGlsc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICkge1xuXG4gICAgfVxuICAgIFxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICB9XG5cbiAgICBnZXREdXJhdGlvbigpOiBzdHJpbmcge1xuICAgICAgICBsZXQgZW5kcyA9IG5ldyBEYXRlKHRoaXMucGl0Y2guYXR0cmlidXRlcy5lbmRzKTtcbiAgICAgICAgbGV0IHN0YXJ0cyA9IG5ldyBEYXRlKHRoaXMucGl0Y2guYXR0cmlidXRlcy5zdGFydHMpO1xuICAgICAgICByZXR1cm4gdGhpcy51dGlsc1NlcnZpY2UuZ2V0VGltZURpZmZlcmVuY2UoZW5kcywgc3RhcnRzKTtcbiAgICB9XG5cbiAgICBnZXRHQlBQcmljZSgpOiBzdHJpbmcge1xuICAgICAgICBpZih0aGlzLnBpdGNoLmF0dHJpYnV0ZXMgJiYgdGhpcy5waXRjaC5hdHRyaWJ1dGVzLmN1cnJlbmN5ID09PSAnR0JQJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGl0Y2guYXR0cmlidXRlcy5wcmljZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoK3RoaXMucGl0Y2guYXR0cmlidXRlcy5wcmljZSAqIEdCUHRvRVVScmF0ZSkudG9GaXhlZCgyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXRFVVJQcmljZSgpOiBzdHJpbmcge1xuICAgICAgICBpZih0aGlzLnBpdGNoLmF0dHJpYnV0ZXMgJiYgdGhpcy5waXRjaC5hdHRyaWJ1dGVzLmN1cnJlbmN5ID09PSAnR0JQJykge1xuICAgICAgICAgICAgcmV0dXJuICgrdGhpcy5waXRjaC5hdHRyaWJ1dGVzLnByaWNlIC8gR0JQdG9FVVJyYXRlKS50b0ZpeGVkKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGl0Y2guYXR0cmlidXRlcy5wcmljZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSXRlbVRhcChldmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvcGl0Y2hlcycsIHRoaXMucGl0Y2guaWRdKTtcbiAgICB9XG59Il19