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
                table_footers_component_1.TableFootersComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCxnRkFBOEU7QUFDOUUsMENBQStDO0FBQy9DLDBDQUErQztBQUUvQyxtRUFBbUU7QUFFbkUsMkRBQXlEO0FBQ3pELDZFQUEwRTtBQUMxRSxtRkFBZ0Y7QUFDaEYsbUZBQWdGO0FBcUJoRjtJQUNDLDBCQUFxQyxZQUEwQjtRQUM5RCwwQ0FBb0IsQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBSFcsZ0JBQWdCO1FBbkI1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7Z0JBQ1oscUJBQVk7Z0JBQ1osd0NBQWtCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLGdDQUFjO2dCQUNkLDJDQUFtQjtnQkFDbkIsK0NBQXFCO2dCQUNyQiwrQ0FBcUI7YUFDeEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsZ0NBQWM7Z0JBQ2QsMkNBQW1CO2dCQUNuQiwrQ0FBcUI7Z0JBQ3JCLCtDQUFxQjthQUN4QjtTQUNKLENBQUM7UUFFYSxXQUFBLGVBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxlQUFRLEVBQUUsQ0FBQTt5Q0FBZSxxQkFBWTtPQURuRCxnQkFBZ0IsQ0FJNUI7SUFBRCx1QkFBQztDQUFBLEFBSkQsSUFJQztBQUpZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IHRocm93SWZBbHJlYWR5TG9hZGVkIH0gZnJvbSAnLi4vY29yZS9tb2R1bGUtaW1wb3J0LWd1YXJkJztcclxuXHJcbmltcG9ydCB7IFBpdGNoQ29tcG9uZW50IH0gZnJvbSBcIi4vcGl0Y2gvcGl0Y2guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlYXJjaEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2gtZm9ybS9zZWFyY2gtZm9ybS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGFibGVGb290ZXJzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFibGUtZm9vdGVycy90YWJsZS1mb290ZXJzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUYWJsZUhlYWRlcnNDb21wb25lbnQgfSBmcm9tIFwiLi90YWJsZS1oZWFkZXJzL3RhYmxlLWhlYWRlcnMuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFJvdXRlck1vZHVsZSxcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFBpdGNoQ29tcG9uZW50LFxyXG4gICAgICAgIFNlYXJjaEZvcm1Db21wb25lbnQsXHJcbiAgICAgICAgVGFibGVGb290ZXJzQ29tcG9uZW50LFxyXG4gICAgICAgIFRhYmxlSGVhZGVyc0NvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFBpdGNoQ29tcG9uZW50LFxyXG4gICAgICAgIFNlYXJjaEZvcm1Db21wb25lbnQsXHJcbiAgICAgICAgVGFibGVGb290ZXJzQ29tcG9uZW50LFxyXG4gICAgICAgIFRhYmxlSGVhZGVyc0NvbXBvbmVudFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50c01vZHVsZSB7XHJcblx0Y29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29tbW9uTW9kdWxlKSB7XHJcblx0XHR0aHJvd0lmQWxyZWFkeUxvYWRlZChwYXJlbnRNb2R1bGUsICdDb21wb25lbnRzTW9kdWxlJyk7XHJcblx0fVxyXG59Il19