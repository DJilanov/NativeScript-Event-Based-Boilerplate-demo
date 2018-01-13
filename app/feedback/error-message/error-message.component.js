"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var backend_service_1 = require("../../core/backend/backend.service");
var event_bus_service_1 = require("../../core/event-bus/event-bus.service");
var ErrorMessageComponent = (function () {
    function ErrorMessageComponent(backendService, eventBusService) {
        var _this = this;
        this.backendService = backendService;
        this.eventBusService = eventBusService;
        this.retryCountMaxInterval = 10000;
        this.type = 'alert';
        this.customError = '';
        this.showErrorMessage = false;
        this.errorMessage = '';
        this.eventBusService.requestError.subscribe(function (data) { return _this.showError(data); });
    }
    ErrorMessageComponent.prototype.showError = function (data) {
        this.errorMessage = data.errorMessage;
        this.showErrorMessage = true;
    };
    ErrorMessageComponent.prototype.hideError = function () {
        this.showErrorMessage = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorMessageComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorMessageComponent.prototype, "customError", void 0);
    ErrorMessageComponent = __decorate([
        core_1.Component({
            selector: 'app-error-message',
            animations: [
                animations_1.trigger('errorWindowSlide', [
                    animations_1.transition(':enter', [
                        animations_1.style({ transform: 'translateY(100%)' }),
                        animations_1.animate('300ms', animations_1.style({ transform: 'translateY(0)' }))
                    ]),
                    animations_1.transition(':leave', [
                        animations_1.style({ transform: 'translateY(0)' }),
                        animations_1.animate('300ms', animations_1.style({ transform: 'translateY(100%)' }))
                    ])
                ]),
                animations_1.trigger('fadeInThanks', [
                    animations_1.transition(':enter', [
                        animations_1.style({ opacity: 0 }),
                        animations_1.animate('500ms', animations_1.style({ opacity: 1 }))
                    ])
                ]),
                animations_1.trigger('expandForm', [
                    animations_1.transition(':enter', [
                        animations_1.style({ height: 0, margin: 0 }),
                        animations_1.animate('300ms', animations_1.style({ height: '*', margin: '*' }))
                    ])
                ]),
                animations_1.trigger('moveToHideRetry', [
                    animations_1.transition(':leave', [
                        animations_1.style({ height: '*', opacity: 0, margin: '*', padding: '*' }),
                        animations_1.animate('300ms', animations_1.style({ height: 0, margin: 0, padding: 0 }))
                    ])
                ])
            ],
            templateUrl: './error-message.component.html',
            styleUrls: ['./error-message.component.scss']
        }),
        __metadata("design:paramtypes", [backend_service_1.BackendService,
            event_bus_service_1.EventBusService])
    ], ErrorMessageComponent);
    return ErrorMessageComponent;
}());
exports.ErrorMessageComponent = ErrorMessageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlcnJvci1tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRDtBQUNqRCxrREFBZ0Y7QUFFaEYsc0VBQW9FO0FBQ3BFLDRFQUF5RTtBQXdDekU7SUFRQywrQkFDUyxjQUE4QixFQUM5QixlQUFnQztRQUZ6QyxpQkFLQztRQUpRLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFUakMsMEJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBRTdCLFNBQUksR0FBVyxPQUFPLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDbEMscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBTWpCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQXBCLENBQW9CLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQseUNBQVMsR0FBVCxVQUFVLElBQUk7UUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQseUNBQVMsR0FBVDtRQUNDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQW5CUTtRQUFSLFlBQUssRUFBRTs7dURBQXdCO0lBQ3ZCO1FBQVIsWUFBSyxFQUFFOzs4REFBMEI7SUFKdEIscUJBQXFCO1FBcENqQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixVQUFVLEVBQUU7Z0JBQ1gsb0JBQU8sQ0FBQyxrQkFBa0IsRUFBRTtvQkFDM0IsdUJBQVUsQ0FBQyxRQUFRLEVBQUU7d0JBQ3BCLGtCQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQzt3QkFDeEMsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsa0JBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO3FCQUN2RCxDQUFDO29CQUNGLHVCQUFVLENBQUMsUUFBUSxFQUFFO3dCQUNwQixrQkFBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDO3dCQUNyQyxvQkFBTyxDQUFDLE9BQU8sRUFBRSxrQkFBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztxQkFDMUQsQ0FBQztpQkFDRixDQUFDO2dCQUNGLG9CQUFPLENBQUMsY0FBYyxFQUFFO29CQUN2Qix1QkFBVSxDQUFDLFFBQVEsRUFBRTt3QkFDcEIsa0JBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzt3QkFDckIsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsa0JBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUN2QyxDQUFDO2lCQUNGLENBQUM7Z0JBQ0Ysb0JBQU8sQ0FBQyxZQUFZLEVBQUU7b0JBQ3JCLHVCQUFVLENBQUMsUUFBUSxFQUFFO3dCQUNwQixrQkFBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7d0JBQy9CLG9CQUFPLENBQUMsT0FBTyxFQUFFLGtCQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO3FCQUNyRCxDQUFDO2lCQUNGLENBQUM7Z0JBQ0Ysb0JBQU8sQ0FBQyxpQkFBaUIsRUFBRTtvQkFDMUIsdUJBQVUsQ0FBQyxRQUFRLEVBQUU7d0JBQ3BCLGtCQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7d0JBQzdELG9CQUFPLENBQUMsT0FBTyxFQUFFLGtCQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQzdELENBQUM7aUJBQ0YsQ0FBQzthQUNGO1lBQ0QsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM3QyxDQUFDO3lDQVd3QixnQ0FBYztZQUNiLG1DQUFlO09BVjdCLHFCQUFxQixDQXVCakM7SUFBRCw0QkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdHJpZ2dlciwgdHJhbnNpdGlvbiwgc3R5bGUsIGFuaW1hdGUsIHN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucydcclxuXHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9iYWNrZW5kL2JhY2tlbmQuc2VydmljZSc7XHJcbmltcG9ydCB7IEV2ZW50QnVzU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvZXZlbnQtYnVzL2V2ZW50LWJ1cy5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgdmFyICQ6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYXBwLWVycm9yLW1lc3NhZ2UnLFxyXG5cdGFuaW1hdGlvbnM6IFtcclxuXHRcdHRyaWdnZXIoJ2Vycm9yV2luZG93U2xpZGUnLCBbXHJcblx0XHRcdHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuXHRcdFx0XHRzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknIH0pLFxyXG5cdFx0XHRcdGFuaW1hdGUoJzMwMG1zJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyB9KSlcclxuXHRcdFx0XSksXHJcblx0XHRcdHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcclxuXHRcdFx0XHRzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH0pLFxyXG5cdFx0XHRcdGFuaW1hdGUoJzMwMG1zJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJyB9KSlcclxuXHRcdFx0XSlcclxuXHRcdF0pLFxyXG5cdFx0dHJpZ2dlcignZmFkZUluVGhhbmtzJywgW1xyXG5cdFx0XHR0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXHJcblx0XHRcdFx0c3R5bGUoeyBvcGFjaXR5OiAwIH0pLFxyXG5cdFx0XHRcdGFuaW1hdGUoJzUwMG1zJywgc3R5bGUoeyBvcGFjaXR5OiAxIH0pKVxyXG5cdFx0XHRdKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKCdleHBhbmRGb3JtJywgW1xyXG5cdFx0XHR0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXHJcblx0XHRcdFx0c3R5bGUoeyBoZWlnaHQ6IDAsIG1hcmdpbjogMCB9KSxcclxuXHRcdFx0XHRhbmltYXRlKCczMDBtcycsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIG1hcmdpbjogJyonIH0pKVxyXG5cdFx0XHRdKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKCdtb3ZlVG9IaWRlUmV0cnknLCBbXHJcblx0XHRcdHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcclxuXHRcdFx0XHRzdHlsZSh7IGhlaWdodDogJyonLCBvcGFjaXR5OiAwLCBtYXJnaW46ICcqJywgcGFkZGluZzogJyonIH0pLFxyXG5cdFx0XHRcdGFuaW1hdGUoJzMwMG1zJywgc3R5bGUoeyBoZWlnaHQ6IDAsIG1hcmdpbjogMCwgcGFkZGluZzogMCB9KSlcclxuXHRcdFx0XSlcclxuXHRcdF0pXHJcblx0XSxcclxuXHR0ZW1wbGF0ZVVybDogJy4vZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRXJyb3JNZXNzYWdlQ29tcG9uZW50IHtcclxuXHRwcml2YXRlIHJldHJ5Q291bnRNYXhJbnRlcnZhbCA9IDEwMDAwO1xyXG5cclxuXHRASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAnYWxlcnQnO1xyXG5cdEBJbnB1dCgpIGN1c3RvbUVycm9yOiBzdHJpbmcgPSAnJztcclxuXHRzaG93RXJyb3JNZXNzYWdlID0gZmFsc2U7XHJcblx0ZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBiYWNrZW5kU2VydmljZTogQmFja2VuZFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGV2ZW50QnVzU2VydmljZTogRXZlbnRCdXNTZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLmV2ZW50QnVzU2VydmljZS5yZXF1ZXN0RXJyb3Iuc3Vic2NyaWJlKChkYXRhKSA9PiB0aGlzLnNob3dFcnJvcihkYXRhKSk7XHJcblx0fVxyXG5cclxuXHRzaG93RXJyb3IoZGF0YSkge1xyXG5cdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSBkYXRhLmVycm9yTWVzc2FnZTtcclxuXHRcdHRoaXMuc2hvd0Vycm9yTWVzc2FnZSA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRoaWRlRXJyb3IoKSB7XHJcblx0XHR0aGlzLnNob3dFcnJvck1lc3NhZ2UgPSBmYWxzZTtcclxuXHR9XHJcbn1cclxuIl19