"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var module_import_guard_1 = require("../core/module-import-guard");
// import { ErrorMessageComponent } from './error-message/error-message.component';
var FeedbackModule = (function () {
    function FeedbackModule(parentModule) {
        module_import_guard_1.throwIfAlreadyLoaded(parentModule, 'FeedbackModule');
    }
    FeedbackModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            exports: [],
            declarations: []
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [common_1.CommonModule])
    ], FeedbackModule);
    return FeedbackModule;
}());
exports.FeedbackModule = FeedbackModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2subW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVlZGJhY2subW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUErQztBQUUvQyxtRUFBbUU7QUFFbkUsbUZBQW1GO0FBYW5GO0lBQ0Msd0JBQXFDLFlBQTBCO1FBQzlELDBDQUFvQixDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFIVyxjQUFjO1FBWDFCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxxQkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFLEVBRVI7WUFDRCxZQUFZLEVBQUUsRUFFYjtTQUNKLENBQUM7UUFFYSxXQUFBLGVBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxlQUFRLEVBQUUsQ0FBQTt5Q0FBZSxxQkFBWTtPQURuRCxjQUFjLENBSTFCO0lBQUQscUJBQUM7Q0FBQSxBQUpELElBSUM7QUFKWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IHRocm93SWZBbHJlYWR5TG9hZGVkIH0gZnJvbSAnLi4vY29yZS9tb2R1bGUtaW1wb3J0LWd1YXJkJztcclxuXHJcbi8vIGltcG9ydCB7IEVycm9yTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vZXJyb3ItbWVzc2FnZS9lcnJvci1tZXNzYWdlLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZWVkYmFja01vZHVsZSB7XHJcblx0Y29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29tbW9uTW9kdWxlKSB7XHJcblx0XHR0aHJvd0lmQWxyZWFkeUxvYWRlZChwYXJlbnRNb2R1bGUsICdGZWVkYmFja01vZHVsZScpO1xyXG5cdH1cclxufSJdfQ==