"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var module_import_guard_1 = require("../core/module-import-guard");
var utils_service_1 = require("./utils/utils.service");
var SharedModule = (function () {
    function SharedModule(parentModule) {
        module_import_guard_1.throwIfAlreadyLoaded(parentModule, 'SharedModule');
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                common_1.CommonModule,
            ],
            exports: [],
            declarations: [],
            providers: [
                utils_service_1.UtilsService
            ]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [common_1.CommonModule])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQStDO0FBQy9DLDBDQUErQztBQUUvQyxtRUFBbUU7QUFFbkUsdURBQXFEO0FBZXJEO0lBQ0Msc0JBQXFDLFlBQTBCO1FBQzlELDBDQUFvQixDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBSFcsWUFBWTtRQWJ4QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7Z0JBQ1oscUJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRSxFQUNSO1lBQ0QsWUFBWSxFQUFFLEVBQ2I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtTQUNKLENBQUM7UUFFYSxXQUFBLGVBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxlQUFRLEVBQUUsQ0FBQTt5Q0FBZSxxQkFBWTtPQURuRCxZQUFZLENBSXhCO0lBQUQsbUJBQUM7Q0FBQSxBQUpELElBSUM7QUFKWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IHRocm93SWZBbHJlYWR5TG9hZGVkIH0gZnJvbSAnLi4vY29yZS9tb2R1bGUtaW1wb3J0LWd1YXJkJztcclxuXHJcbmltcG9ydCB7IFV0aWxzU2VydmljZSB9IGZyb20gJy4vdXRpbHMvdXRpbHMuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFJvdXRlck1vZHVsZSxcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFV0aWxzU2VydmljZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcclxuXHRjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb21tb25Nb2R1bGUpIHtcclxuXHRcdHRocm93SWZBbHJlYWR5TG9hZGVkKHBhcmVudE1vZHVsZSwgJ1NoYXJlZE1vZHVsZScpO1xyXG5cdH1cclxufSJdfQ==