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
    PitchComponent.prototype.getDuration = function () {
        var ends = new Date(this.selectedPitch.attributes.ends);
        var starts = new Date(this.selectedPitch.attributes.starts);
        return this.utilsService.getTimeDifference(ends, starts);
    };
    PitchComponent.prototype.getGBPPrice = function () {
        if (this.selectedPitch.attributes && this.selectedPitch.attributes.currency === 'GBP') {
            return this.selectedPitch.attributes.price;
        }
        else {
            return (+this.selectedPitch.attributes.price * GBPtoEURrate).toFixed(2);
        }
    };
    PitchComponent.prototype.getEURPrice = function () {
        if (this.selectedPitch.attributes && this.selectedPitch.attributes.currency === 'GBP') {
            return (+this.selectedPitch.attributes.price / GBPtoEURrate).toFixed(2);
        }
        else {
            return this.selectedPitch.attributes.price;
        }
    };
    PitchComponent.prototype.onItemTap = function (event) {
        this.routerExtensions.navigate(['/pitches', this.selectedPitch.id]);
    };
    __decorate([
        core_1.Input("selectedPitchId"),
        __metadata("design:type", Object)
    ], PitchComponent.prototype, "selectedPitch", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl0Y2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGl0Y2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELHNEQUErRDtBQUcvRCxvRUFBa0U7QUFDbEUsa0VBQWdFO0FBRWhFLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQztBQVExQjtJQUlJLHdCQUNZLFlBQTBCLEVBQzFCLFlBQTBCLEVBQzFCLGdCQUFrQztRQUZsQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRzlDLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbkYsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUMvQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsQ0FBQztJQUNMLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbkYsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVFLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDL0MsQ0FBQztJQUNMLENBQUM7SUFFRCxrQ0FBUyxHQUFULFVBQVUsS0FBSztRQUNYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFsQ3lCO1FBQXpCLFlBQUssQ0FBQyxpQkFBaUIsQ0FBQzs7eURBQXNCO0lBRnRDLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFFLHVCQUF1QixDQUFFO1NBQ3pDLENBQUM7eUNBTTRCLDRCQUFZO1lBQ1osNEJBQVk7WUFDUix5QkFBZ0I7T0FQckMsY0FBYyxDQXFDMUI7SUFBRCxxQkFBQztDQUFBLEFBckNELElBcUNDO0FBckNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBQaXRjaCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9waXRjaC9waXRjaFwiO1xuaW1wb3J0IHsgUGl0Y2hTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BpdGNoL3BpdGNoLnNlcnZpY2VcIjtcbmltcG9ydCB7IFV0aWxzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbHMvdXRpbHMuc2VydmljZVwiO1xuXG5jb25zdCBHQlB0b0VVUnJhdGUgPSAxLjEzO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1waXRjaFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9waXRjaC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWyAnLi9waXRjaC5jb21wb25lbnQuY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFBpdGNoQ29tcG9uZW50IHtcbiAgICBcbiAgICBASW5wdXQoXCJzZWxlY3RlZFBpdGNoSWRcIikgc2VsZWN0ZWRQaXRjaDogUGl0Y2g7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwaXRjaFNlcnZpY2U6IFBpdGNoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB1dGlsc1NlcnZpY2U6IFV0aWxzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7XG5cbiAgICB9XG5cbiAgICBnZXREdXJhdGlvbigpOiBzdHJpbmcge1xuICAgICAgICBsZXQgZW5kcyA9IG5ldyBEYXRlKHRoaXMuc2VsZWN0ZWRQaXRjaC5hdHRyaWJ1dGVzLmVuZHMpO1xuICAgICAgICBsZXQgc3RhcnRzID0gbmV3IERhdGUodGhpcy5zZWxlY3RlZFBpdGNoLmF0dHJpYnV0ZXMuc3RhcnRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbHNTZXJ2aWNlLmdldFRpbWVEaWZmZXJlbmNlKGVuZHMsIHN0YXJ0cyk7XG4gICAgfVxuXG4gICAgZ2V0R0JQUHJpY2UoKTogc3RyaW5nIHtcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZFBpdGNoLmF0dHJpYnV0ZXMgJiYgdGhpcy5zZWxlY3RlZFBpdGNoLmF0dHJpYnV0ZXMuY3VycmVuY3kgPT09ICdHQlAnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFBpdGNoLmF0dHJpYnV0ZXMucHJpY2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKCt0aGlzLnNlbGVjdGVkUGl0Y2guYXR0cmlidXRlcy5wcmljZSAqIEdCUHRvRVVScmF0ZSkudG9GaXhlZCgyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXRFVVJQcmljZSgpOiBzdHJpbmcge1xuICAgICAgICBpZih0aGlzLnNlbGVjdGVkUGl0Y2guYXR0cmlidXRlcyAmJiB0aGlzLnNlbGVjdGVkUGl0Y2guYXR0cmlidXRlcy5jdXJyZW5jeSA9PT0gJ0dCUCcpIHtcbiAgICAgICAgICAgIHJldHVybiAoK3RoaXMuc2VsZWN0ZWRQaXRjaC5hdHRyaWJ1dGVzLnByaWNlIC8gR0JQdG9FVVJyYXRlKS50b0ZpeGVkKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRQaXRjaC5hdHRyaWJ1dGVzLnByaWNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25JdGVtVGFwKGV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9waXRjaGVzJywgdGhpcy5zZWxlY3RlZFBpdGNoLmlkXSk7XG4gICAgfVxufSJdfQ==