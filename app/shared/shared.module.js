"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var module_import_guard_1 = require("../core/module-import-guard");
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
            providers: []
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [common_1.CommonModule])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQStDO0FBQy9DLDBDQUErQztBQUUvQyxtRUFBbUU7QUFjbkU7SUFDQyxzQkFBcUMsWUFBMEI7UUFDOUQsMENBQW9CLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFIVyxZQUFZO1FBWnhCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxxQkFBWTtnQkFDWixxQkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFLEVBQ1I7WUFDRCxZQUFZLEVBQUUsRUFDYjtZQUNELFNBQVMsRUFBRSxFQUNWO1NBQ0osQ0FBQztRQUVhLFdBQUEsZUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLGVBQVEsRUFBRSxDQUFBO3lDQUFlLHFCQUFZO09BRG5ELFlBQVksQ0FJeEI7SUFBRCxtQkFBQztDQUFBLEFBSkQsSUFJQztBQUpZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgdGhyb3dJZkFscmVhZHlMb2FkZWQgfSBmcm9tICcuLi9jb3JlL21vZHVsZS1pbXBvcnQtZ3VhcmQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XHJcblx0Y29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29tbW9uTW9kdWxlKSB7XHJcblx0XHR0aHJvd0lmQWxyZWFkeUxvYWRlZChwYXJlbnRNb2R1bGUsICdTaGFyZWRNb2R1bGUnKTtcclxuXHR9XHJcbn0iXX0=