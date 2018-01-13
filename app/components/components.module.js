"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var module_import_guard_1 = require("../core/module-import-guard");
var pitch_component_1 = require("./pitch/pitch.component");
var search_form_component_1 = require("./search-form/search-form.component");
var table_footers_component_1 = require("./table-footers/table-footers.component");
var table_headers_component_1 = require("./table-headers/table-headers.component");
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
                search_form_component_1.SearchFormComponent,
                table_headers_component_1.TableHeadersComponent
            ],
            declarations: [
                pitch_component_1.PitchComponent,
                search_form_component_1.SearchFormComponent,
                table_footers_component_1.TableFootersComponent,
                table_headers_component_1.TableHeadersComponent
            ]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [common_1.CommonModule])
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCxnRkFBOEU7QUFDOUUsMENBQStDO0FBQy9DLDBDQUErQztBQUUvQyxtRUFBbUU7QUFFbkUsMkRBQXlEO0FBQ3pELDZFQUEwRTtBQUMxRSxtRkFBZ0Y7QUFDaEYsbUZBQWdGO0FBb0JoRjtJQUNDLDBCQUFxQyxZQUEwQjtRQUM5RCwwQ0FBb0IsQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBSFcsZ0JBQWdCO1FBbEI1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7Z0JBQ1oscUJBQVk7Z0JBQ1osd0NBQWtCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLGdDQUFjO2dCQUNkLDJDQUFtQjtnQkFDbkIsK0NBQXFCO2FBQ3hCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGdDQUFjO2dCQUNkLDJDQUFtQjtnQkFDbkIsK0NBQXFCO2dCQUNyQiwrQ0FBcUI7YUFDeEI7U0FDSixDQUFDO1FBRWEsV0FBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsZUFBUSxFQUFFLENBQUE7eUNBQWUscUJBQVk7T0FEbkQsZ0JBQWdCLENBSTVCO0lBQUQsdUJBQUM7Q0FBQSxBQUpELElBSUM7QUFKWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyB0aHJvd0lmQWxyZWFkeUxvYWRlZCB9IGZyb20gJy4uL2NvcmUvbW9kdWxlLWltcG9ydC1ndWFyZCc7XHJcblxyXG5pbXBvcnQgeyBQaXRjaENvbXBvbmVudCB9IGZyb20gXCIuL3BpdGNoL3BpdGNoLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZWFyY2hGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoLWZvcm0vc2VhcmNoLWZvcm0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRhYmxlRm9vdGVyc0NvbXBvbmVudCB9IGZyb20gXCIuL3RhYmxlLWZvb3RlcnMvdGFibGUtZm9vdGVycy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGFibGVIZWFkZXJzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFibGUtaGVhZGVycy90YWJsZS1oZWFkZXJzLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBQaXRjaENvbXBvbmVudCxcclxuICAgICAgICBTZWFyY2hGb3JtQ29tcG9uZW50LFxyXG4gICAgICAgIFRhYmxlSGVhZGVyc0NvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFBpdGNoQ29tcG9uZW50LFxyXG4gICAgICAgIFNlYXJjaEZvcm1Db21wb25lbnQsXHJcbiAgICAgICAgVGFibGVGb290ZXJzQ29tcG9uZW50LFxyXG4gICAgICAgIFRhYmxlSGVhZGVyc0NvbXBvbmVudFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50c01vZHVsZSB7XHJcblx0Y29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29tbW9uTW9kdWxlKSB7XHJcblx0XHR0aHJvd0lmQWxyZWFkeUxvYWRlZChwYXJlbnRNb2R1bGUsICdDb21wb25lbnRzTW9kdWxlJyk7XHJcblx0fVxyXG59Il19