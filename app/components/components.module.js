"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var module_import_guard_1 = require("../core/module-import-guard");
var pitch_component_1 = require("./pitch/pitch.component");
var search_form_component_1 = require("./search-form/search-form.component");
var ComponentsModule = (function () {
    function ComponentsModule(parentModule) {
        module_import_guard_1.throwIfAlreadyLoaded(parentModule, 'ComponentsModule');
    }
    ComponentsModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                common_1.CommonModule,
                nativescript_module_1.NativeScriptModule
            ],
            exports: [
                pitch_component_1.PitchComponent,
                search_form_component_1.SearchFormComponent
            ],
            declarations: [
                pitch_component_1.PitchComponent,
                search_form_component_1.SearchFormComponent
            ]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [common_1.CommonModule])
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCxnRkFBOEU7QUFDOUUsMENBQStDO0FBQy9DLDBDQUErQztBQUUvQyxtRUFBbUU7QUFFbkUsMkRBQXlEO0FBQ3pELDZFQUEwRTtBQWlCMUU7SUFDQywwQkFBcUMsWUFBMEI7UUFDOUQsMENBQW9CLENBQUMsWUFBWSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUhXLGdCQUFnQjtRQWY1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7Z0JBQ1oscUJBQVk7Z0JBQ1osd0NBQWtCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLGdDQUFjO2dCQUNkLDJDQUFtQjthQUN0QjtZQUNELFlBQVksRUFBRTtnQkFDVixnQ0FBYztnQkFDZCwyQ0FBbUI7YUFDdEI7U0FDSixDQUFDO1FBRWEsV0FBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsZUFBUSxFQUFFLENBQUE7eUNBQWUscUJBQVk7T0FEbkQsZ0JBQWdCLENBSTVCO0lBQUQsdUJBQUM7Q0FBQSxBQUpELElBSUM7QUFKWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyB0aHJvd0lmQWxyZWFkeUxvYWRlZCB9IGZyb20gJy4uL2NvcmUvbW9kdWxlLWltcG9ydC1ndWFyZCc7XHJcblxyXG5pbXBvcnQgeyBQaXRjaENvbXBvbmVudCB9IGZyb20gXCIuL3BpdGNoL3BpdGNoLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZWFyY2hGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoLWZvcm0vc2VhcmNoLWZvcm0uY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFJvdXRlck1vZHVsZSxcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFBpdGNoQ29tcG9uZW50LFxyXG4gICAgICAgIFNlYXJjaEZvcm1Db21wb25lbnRcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBQaXRjaENvbXBvbmVudCxcclxuICAgICAgICBTZWFyY2hGb3JtQ29tcG9uZW50XHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRzTW9kdWxlIHtcclxuXHRjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb21tb25Nb2R1bGUpIHtcclxuXHRcdHRocm93SWZBbHJlYWR5TG9hZGVkKHBhcmVudE1vZHVsZSwgJ0NvbXBvbmVudHNNb2R1bGUnKTtcclxuXHR9XHJcbn0iXX0=