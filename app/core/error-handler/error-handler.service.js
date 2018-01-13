"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var event_bus_service_1 = require("../event-bus/event-bus.service");
var cannotConnect = 'Cannot connect to the server';
var noInternet = 'There is no internet connection to the server';
var ErrorHandlerService = (function () {
    function ErrorHandlerService(eventBusService) {
        this.eventBusService = eventBusService;
    }
    ErrorHandlerService.prototype.handleRequestError = function (error) {
        var errorMessage = '';
        if (error.status == 0) {
            errorMessage = noInternet;
        }
        else if (error.status) {
            errorMessage = error.json().Message || error.json().error || cannotConnect;
        }
        else {
            errorMessage = error;
        }
        this.eventBusService.emitRequestError({
            errorMessage: errorMessage
        });
    };
    ErrorHandlerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [event_bus_service_1.EventBusService])
    ], ErrorHandlerService);
    return ErrorHandlerService;
}());
exports.ErrorHandlerService = ErrorHandlerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFuZGxlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXJyb3ItaGFuZGxlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLG9FQUFpRTtBQUVqRSxJQUFNLGFBQWEsR0FBRyw4QkFBOEIsQ0FBQztBQUNyRCxJQUFNLFVBQVUsR0FBRywrQ0FBK0MsQ0FBQztBQUduRTtJQUNDLDZCQUNTLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUd6QyxDQUFDO0lBRUQsZ0RBQWtCLEdBQWxCLFVBQW1CLEtBQUs7UUFDdkIsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixZQUFZLEdBQUcsVUFBVSxDQUFDO1FBQzNCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekIsWUFBWSxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxhQUFhLENBQUM7UUFDNUUsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNyQyxZQUFZLEVBQUUsWUFBWTtTQUMxQixDQUFDLENBQUM7SUFDSixDQUFDO0lBbkJXLG1CQUFtQjtRQUQvQixpQkFBVSxFQUFFO3lDQUdjLG1DQUFlO09BRjdCLG1CQUFtQixDQW9CL0I7SUFBRCwwQkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEV2ZW50QnVzU2VydmljZSB9IGZyb20gJy4uL2V2ZW50LWJ1cy9ldmVudC1idXMuc2VydmljZSc7XHJcblxyXG5jb25zdCBjYW5ub3RDb25uZWN0ID0gJ0Nhbm5vdCBjb25uZWN0IHRvIHRoZSBzZXJ2ZXInO1xyXG5jb25zdCBub0ludGVybmV0ID0gJ1RoZXJlIGlzIG5vIGludGVybmV0IGNvbm5lY3Rpb24gdG8gdGhlIHNlcnZlcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFcnJvckhhbmRsZXJTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgZXZlbnRCdXNTZXJ2aWNlOiBFdmVudEJ1c1NlcnZpY2VcclxuXHQpIHsgXHJcblxyXG5cdH1cclxuXHJcblx0aGFuZGxlUmVxdWVzdEVycm9yKGVycm9yKSB7XHJcblx0XHRsZXQgZXJyb3JNZXNzYWdlID0gJyc7XHJcblx0XHRpZiAoZXJyb3Iuc3RhdHVzID09IDApIHtcclxuXHRcdFx0ZXJyb3JNZXNzYWdlID0gbm9JbnRlcm5ldDtcclxuXHRcdH0gZWxzZSBpZiAoZXJyb3Iuc3RhdHVzKSB7XHJcblx0XHRcdGVycm9yTWVzc2FnZSA9IGVycm9yLmpzb24oKS5NZXNzYWdlIHx8IGVycm9yLmpzb24oKS5lcnJvciB8fCBjYW5ub3RDb25uZWN0O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZXJyb3JNZXNzYWdlID0gZXJyb3I7XHJcblx0XHR9XHJcblx0XHR0aGlzLmV2ZW50QnVzU2VydmljZS5lbWl0UmVxdWVzdEVycm9yKHtcclxuXHRcdFx0ZXJyb3JNZXNzYWdlOiBlcnJvck1lc3NhZ2VcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=