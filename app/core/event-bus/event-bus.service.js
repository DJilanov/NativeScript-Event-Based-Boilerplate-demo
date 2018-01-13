"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EventBusService = (function () {
    function EventBusService() {
        this.requestError = new core_1.EventEmitter();
        this.fetchedPitchData = new core_1.EventEmitter();
        this.changePitchesPagination = new core_1.EventEmitter();
        this.paginationControllsAvailability = new core_1.EventEmitter();
    }
    EventBusService.prototype.emitRequestError = function (data) {
        this.requestError.emit(data);
    };
    EventBusService.prototype.emitFetchedPitchData = function (data) {
        this.fetchedPitchData.emit(data);
    };
    EventBusService.prototype.emitChangePitchesPagination = function (data) {
        this.changePitchesPagination.emit(data);
    };
    EventBusService.prototype.emitPaginationControllsAvailability = function (data) {
        this.paginationControllsAvailability.emit(data);
    };
    EventBusService = __decorate([
        core_1.Injectable()
        /**
         * @EventBusService used for connections between modules
         */
        ,
        __metadata("design:paramtypes", [])
    ], EventBusService);
    return EventBusService;
}());
exports.EventBusService = EventBusService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtYnVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmVudC1idXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQU96RDtJQU9DO1FBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQywrQkFBK0IsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0lBRU0sMENBQWdCLEdBQXZCLFVBQXdCLElBQUk7UUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLDhDQUFvQixHQUEzQixVQUE0QixJQUFJO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLHFEQUEyQixHQUFsQyxVQUFtQyxJQUFJO1FBQ3RDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLDZEQUFtQyxHQUExQyxVQUEyQyxJQUFJO1FBQzlDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQTVCVyxlQUFlO1FBTDNCLGlCQUFVLEVBQUU7UUFFYjs7V0FFRzs7O09BQ1UsZUFBZSxDQTZCM0I7SUFBRCxzQkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcblxyXG4vKipcclxuICogQEV2ZW50QnVzU2VydmljZSB1c2VkIGZvciBjb25uZWN0aW9ucyBiZXR3ZWVuIG1vZHVsZXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBFdmVudEJ1c1NlcnZpY2Uge1xyXG5cclxuXHRwdWJsaWMgcmVxdWVzdEVycm9yOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHRwdWJsaWMgZmV0Y2hlZFBpdGNoRGF0YTogRXZlbnRFbWl0dGVyPGFueT47XHJcblx0cHVibGljIGNoYW5nZVBpdGNoZXNQYWdpbmF0aW9uOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHRwdWJsaWMgcGFnaW5hdGlvbkNvbnRyb2xsc0F2YWlsYWJpbGl0eTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5yZXF1ZXN0RXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0XHR0aGlzLmZldGNoZWRQaXRjaERhdGEgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0XHR0aGlzLmNoYW5nZVBpdGNoZXNQYWdpbmF0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdFx0dGhpcy5wYWdpbmF0aW9uQ29udHJvbGxzQXZhaWxhYmlsaXR5ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGVtaXRSZXF1ZXN0RXJyb3IoZGF0YSk6IHZvaWQge1xyXG5cdFx0dGhpcy5yZXF1ZXN0RXJyb3IuZW1pdChkYXRhKTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIGVtaXRGZXRjaGVkUGl0Y2hEYXRhKGRhdGEpOiB2b2lkIHtcclxuXHRcdHRoaXMuZmV0Y2hlZFBpdGNoRGF0YS5lbWl0KGRhdGEpO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZW1pdENoYW5nZVBpdGNoZXNQYWdpbmF0aW9uKGRhdGEpOiB2b2lkIHtcclxuXHRcdHRoaXMuY2hhbmdlUGl0Y2hlc1BhZ2luYXRpb24uZW1pdChkYXRhKTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIGVtaXRQYWdpbmF0aW9uQ29udHJvbGxzQXZhaWxhYmlsaXR5KGRhdGEpOiB2b2lkIHtcclxuXHRcdHRoaXMucGFnaW5hdGlvbkNvbnRyb2xsc0F2YWlsYWJpbGl0eS5lbWl0KGRhdGEpO1xyXG5cdH1cclxufVxyXG4iXX0=