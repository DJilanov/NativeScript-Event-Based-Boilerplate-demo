"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var event_bus_service_1 = require("../../core/event-bus/event-bus.service");
var TableFootersComponent = (function () {
    function TableFootersComponent(eventBusService) {
        var _this = this;
        this.eventBusService = eventBusService;
        this.enabledNextPage = false;
        this.enabledPreviousPage = false;
        this.eventBusService.paginationControllsAvailability.subscribe(function (data) { return _this.updatePaginationControlls(data); });
    }
    TableFootersComponent.prototype.updatePaginationControlls = function (data) {
        this.enabledNextPage = data.enabledNextPage;
        this.enabledPreviousPage = data.enabledPreviousPage;
    };
    TableFootersComponent.prototype.goToNextPage = function (next) {
        this.eventBusService.emitChangePitchesPagination({
            next: next
        });
    };
    TableFootersComponent = __decorate([
        core_1.Component({
            selector: "ns-table-footers",
            moduleId: module.id,
            templateUrl: "./table-footers.component.html",
            styleUrls: ['./table-footers.component.css']
        }),
        __metadata("design:paramtypes", [event_bus_service_1.EventBusService])
    ], TableFootersComponent);
    return TableFootersComponent;
}());
exports.TableFootersComponent = TableFootersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZm9vdGVycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJsZS1mb290ZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQyw0RUFBeUU7QUFRekU7SUFLSSwrQkFDWSxlQUFnQztRQUQ1QyxpQkFJQztRQUhXLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUo1QyxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4Qix3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFLeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQywrQkFBK0IsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLEVBQXBDLENBQW9DLENBQUMsQ0FBQTtJQUNsSCxDQUFDO0lBRUQseURBQXlCLEdBQXpCLFVBQTBCLElBQUk7UUFDMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzVDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDeEQsQ0FBQztJQUVELDRDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsQ0FBQztZQUM3QyxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztJQUNQLENBQUM7SUFwQlEscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFFLCtCQUErQixDQUFFO1NBQ2pELENBQUM7eUNBTytCLG1DQUFlO09BTm5DLHFCQUFxQixDQXFCakM7SUFBRCw0QkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEV2ZW50QnVzU2VydmljZSB9IGZyb20gXCIuLi8uLi9jb3JlL2V2ZW50LWJ1cy9ldmVudC1idXMuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy10YWJsZS1mb290ZXJzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3RhYmxlLWZvb3RlcnMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsgJy4vdGFibGUtZm9vdGVycy5jb21wb25lbnQuY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlRm9vdGVyc0NvbXBvbmVudCB7XG5cbiAgICBlbmFibGVkTmV4dFBhZ2UgPSBmYWxzZTtcbiAgICBlbmFibGVkUHJldmlvdXNQYWdlID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBldmVudEJ1c1NlcnZpY2U6IEV2ZW50QnVzU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLmV2ZW50QnVzU2VydmljZS5wYWdpbmF0aW9uQ29udHJvbGxzQXZhaWxhYmlsaXR5LnN1YnNjcmliZSgoZGF0YSkgPT4gdGhpcy51cGRhdGVQYWdpbmF0aW9uQ29udHJvbGxzKGRhdGEpKVxuICAgIH1cblxuICAgIHVwZGF0ZVBhZ2luYXRpb25Db250cm9sbHMoZGF0YSkge1xuICAgICAgICB0aGlzLmVuYWJsZWROZXh0UGFnZSA9IGRhdGEuZW5hYmxlZE5leHRQYWdlO1xuICAgICAgICB0aGlzLmVuYWJsZWRQcmV2aW91c1BhZ2UgPSBkYXRhLmVuYWJsZWRQcmV2aW91c1BhZ2U7XG4gICAgfVxuXG4gICAgZ29Ub05leHRQYWdlKG5leHQpIHtcbiAgICAgICAgdGhpcy5ldmVudEJ1c1NlcnZpY2UuZW1pdENoYW5nZVBpdGNoZXNQYWdpbmF0aW9uKHtcbiAgICAgICAgICAgIG5leHQ6IG5leHRcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==