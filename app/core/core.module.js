"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var backend_service_1 = require("./backend/backend.service");
var error_handler_service_1 = require("./error-handler/error-handler.service");
var event_bus_service_1 = require("./event-bus/event-bus.service");
var module_import_guard_1 = require("./module-import-guard");
var CoreModule = (function () {
    function CoreModule(parentModule) {
        module_import_guard_1.throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            providers: [
                backend_service_1.BackendService,
                event_bus_service_1.EventBusService,
                error_handler_service_1.ErrorHandlerService
            ]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCwwQ0FBK0M7QUFFL0MsNkRBQTJEO0FBQzNELCtFQUE0RTtBQUM1RSxtRUFBZ0U7QUFFaEUsNkRBQTZEO0FBWTdEO0lBQ0Msb0JBQXFDLFlBQXdCO1FBQzVELDBDQUFvQixDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBSFcsVUFBVTtRQVZ0QixlQUFRLENBQUM7WUFDVCxPQUFPLEVBQUU7Z0JBQ1IscUJBQVk7YUFDWjtZQUNELFNBQVMsRUFBRTtnQkFDVixnQ0FBYztnQkFDZCxtQ0FBZTtnQkFDZiwyQ0FBbUI7YUFDbkI7U0FDRCxDQUFDO1FBRWEsV0FBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsZUFBUSxFQUFFLENBQUE7eUNBQWUsVUFBVTtPQURqRCxVQUFVLENBSXRCO0lBQUQsaUJBQUM7Q0FBQSxBQUpELElBSUM7QUFKWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9iYWNrZW5kL2JhY2tlbmQuc2VydmljZSc7XHJcbmltcG9ydCB7IEVycm9ySGFuZGxlclNlcnZpY2UgfSBmcm9tICcuL2Vycm9yLWhhbmRsZXIvZXJyb3ItaGFuZGxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnRCdXNTZXJ2aWNlIH0gZnJvbSAnLi9ldmVudC1idXMvZXZlbnQtYnVzLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgdGhyb3dJZkFscmVhZHlMb2FkZWQgfSBmcm9tICcuL21vZHVsZS1pbXBvcnQtZ3VhcmQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGVcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0QmFja2VuZFNlcnZpY2UsXHJcblx0XHRFdmVudEJ1c1NlcnZpY2UsXHJcblx0XHRFcnJvckhhbmRsZXJTZXJ2aWNlXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcblx0Y29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29yZU1vZHVsZSkge1xyXG5cdFx0dGhyb3dJZkFscmVhZHlMb2FkZWQocGFyZW50TW9kdWxlLCAnQ29yZU1vZHVsZScpO1xyXG5cdH1cclxufVxyXG4iXX0=