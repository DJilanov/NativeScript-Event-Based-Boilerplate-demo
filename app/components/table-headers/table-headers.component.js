"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var pitch_service_1 = require("../../services/pitch/pitch.service");
var TableHeadersComponent = (function () {
    function TableHeadersComponent(pitchService, routerExtensions) {
        this.pitchService = pitchService;
        this.routerExtensions = routerExtensions;
    }
    TableHeadersComponent = __decorate([
        core_1.Component({
            selector: "ns-table-headers",
            moduleId: module.id,
            templateUrl: "./table-headers.component.html",
            styleUrls: ['./table-headers.component.css']
        }),
        __metadata("design:paramtypes", [pitch_service_1.PitchService,
            router_1.RouterExtensions])
    ], TableHeadersComponent);
    return TableHeadersComponent;
}());
exports.TableHeadersComponent = TableHeadersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVhZGVycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJsZS1oZWFkZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxzREFBK0Q7QUFHL0Qsb0VBQWtFO0FBUWxFO0lBRUksK0JBQ1ksWUFBMEIsRUFDMUIsZ0JBQWtDO1FBRGxDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFHOUMsQ0FBQztJQVBRLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBRSwrQkFBK0IsQ0FBRTtTQUNqRCxDQUFDO3lDQUk0Qiw0QkFBWTtZQUNSLHlCQUFnQjtPQUpyQyxxQkFBcUIsQ0FRakM7SUFBRCw0QkFBQztDQUFBLEFBUkQsSUFRQztBQVJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBQaXRjaCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9waXRjaC9waXRjaFwiO1xuaW1wb3J0IHsgUGl0Y2hTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BpdGNoL3BpdGNoLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtdGFibGUtaGVhZGVyc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90YWJsZS1oZWFkZXJzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbICcuL3RhYmxlLWhlYWRlcnMuY29tcG9uZW50LmNzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUhlYWRlcnNDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGl0Y2hTZXJ2aWNlOiBQaXRjaFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICkge1xuXG4gICAgfVxufSJdfQ==