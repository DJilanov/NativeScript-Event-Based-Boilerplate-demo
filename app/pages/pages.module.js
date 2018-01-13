"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var module_import_guard_1 = require("../core/module-import-guard");
var components_module_1 = require("../components/components.module");
var pitches_component_1 = require("./pitches/pitches.component");
var pitch_detail_component_1 = require("./pitch-detail/pitch-detail.component");
var PagesModule = (function () {
    function PagesModule(parentModule) {
        module_import_guard_1.throwIfAlreadyLoaded(parentModule, 'PagesModule');
    }
    PagesModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                common_1.CommonModule,
                nativescript_module_1.NativeScriptModule,
                components_module_1.ComponentsModule
            ],
            exports: [
                pitches_component_1.PitchesComponent,
                pitch_detail_component_1.PitchDetailComponent
            ],
            declarations: [
                pitches_component_1.PitchesComponent,
                pitch_detail_component_1.PitchDetailComponent
            ]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [common_1.CommonModule])
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELGdGQUE4RTtBQUM5RSwwQ0FBK0M7QUFDL0MsMENBQStDO0FBRS9DLG1FQUFtRTtBQUVuRSxxRUFBbUU7QUFFbkUsaUVBQStEO0FBQy9ELGdGQUE2RTtBQWtCN0U7SUFDQyxxQkFBcUMsWUFBMEI7UUFDOUQsMENBQW9CLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFIVyxXQUFXO1FBaEJ2QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7Z0JBQ1oscUJBQVk7Z0JBQ1osd0NBQWtCO2dCQUNsQixvQ0FBZ0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsb0NBQWdCO2dCQUNoQiw2Q0FBb0I7YUFDdkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysb0NBQWdCO2dCQUNoQiw2Q0FBb0I7YUFDdkI7U0FDSixDQUFDO1FBRWEsV0FBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsZUFBUSxFQUFFLENBQUE7eUNBQWUscUJBQVk7T0FEbkQsV0FBVyxDQUl2QjtJQUFELGtCQUFDO0NBQUEsQUFKRCxJQUlDO0FBSlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyB0aHJvd0lmQWxyZWFkeUxvYWRlZCB9IGZyb20gJy4uL2NvcmUvbW9kdWxlLWltcG9ydC1ndWFyZCc7XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnRzTW9kdWxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBQaXRjaGVzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGl0Y2hlcy9waXRjaGVzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQaXRjaERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3BpdGNoLWRldGFpbC9waXRjaC1kZXRhaWwuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFJvdXRlck1vZHVsZSxcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIENvbXBvbmVudHNNb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgUGl0Y2hlc0NvbXBvbmVudCxcclxuICAgICAgICBQaXRjaERldGFpbENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFBpdGNoZXNDb21wb25lbnQsXHJcbiAgICAgICAgUGl0Y2hEZXRhaWxDb21wb25lbnRcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VzTW9kdWxlIHtcclxuXHRjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb21tb25Nb2R1bGUpIHtcclxuXHRcdHRocm93SWZBbHJlYWR5TG9hZGVkKHBhcmVudE1vZHVsZSwgJ1BhZ2VzTW9kdWxlJyk7XHJcblx0fVxyXG59Il19