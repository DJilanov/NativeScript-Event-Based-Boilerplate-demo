"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var module_import_guard_1 = require("../core/module-import-guard");
var pitch_service_1 = require("./pitch/pitch.service");
var ServicesModule = (function () {
    function ServicesModule(parentModule) {
        module_import_guard_1.throwIfAlreadyLoaded(parentModule, 'ServiceModule');
    }
    ServicesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            providers: [
                pitch_service_1.PitchService
            ]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [common_1.CommonModule])
    ], ServicesModule);
    return ServicesModule;
}());
exports.ServicesModule = ServicesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmljZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUErQztBQUUvQyxtRUFBbUU7QUFFbkUsdURBQXFEO0FBVXJEO0lBQ0Msd0JBQXFDLFlBQTBCO1FBQzlELDBDQUFvQixDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBSFcsY0FBYztRQVIxQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7YUFDZjtZQUNELFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1NBQ0osQ0FBQztRQUVhLFdBQUEsZUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLGVBQVEsRUFBRSxDQUFBO3lDQUFlLHFCQUFZO09BRG5ELGNBQWMsQ0FJMUI7SUFBRCxxQkFBQztDQUFBLEFBSkQsSUFJQztBQUpZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgdGhyb3dJZkFscmVhZHlMb2FkZWQgfSBmcm9tICcuLi9jb3JlL21vZHVsZS1pbXBvcnQtZ3VhcmQnO1xyXG5cclxuaW1wb3J0IHsgUGl0Y2hTZXJ2aWNlIH0gZnJvbSAnLi9waXRjaC9waXRjaC5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgUGl0Y2hTZXJ2aWNlXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlc01vZHVsZSB7XHJcblx0Y29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29tbW9uTW9kdWxlKSB7XHJcblx0XHR0aHJvd0lmQWxyZWFkeUxvYWRlZChwYXJlbnRNb2R1bGUsICdTZXJ2aWNlTW9kdWxlJyk7XHJcblx0fVxyXG59Il19