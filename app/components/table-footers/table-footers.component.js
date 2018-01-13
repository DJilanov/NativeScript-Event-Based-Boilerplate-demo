"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var event_bus_service_1 = require("../../core/event-bus/event-bus.service");
var TableFootersComponent = (function () {
    function TableFootersComponent(eventBusService, routerExtensions) {
        var _this = this;
        this.eventBusService = eventBusService;
        this.routerExtensions = routerExtensions;
        this.enabledNextPage = false;
        this.enabledPreviousPage = false;
        this.eventBusService.paginationControllsAvailability.subscribe(function (data) { return _this.updatePaginationControlls(data); });
    }
    TableFootersComponent.prototype.updatePaginationControlls = function (data) {
        this.enabledNextPage = data.enabledNextPage;
        this.enabledPreviousPage = data.enabledPreviousPage;
    };
    TableFootersComponent.prototype.goToNextPage = function (next) {
        console.log('go to next page:', next);
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
        __metadata("design:paramtypes", [event_bus_service_1.EventBusService,
            router_1.RouterExtensions])
    ], TableFootersComponent);
    return TableFootersComponent;
}());
exports.TableFootersComponent = TableFootersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZm9vdGVycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJsZS1mb290ZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxzREFBK0Q7QUFFL0QsNEVBQXlFO0FBUXpFO0lBS0ksK0JBQ1ksZUFBZ0MsRUFDaEMsZ0JBQWtDO1FBRjlDLGlCQUtDO1FBSlcsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFMOUMsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBTXhCLElBQUksQ0FBQyxlQUFlLENBQUMsK0JBQStCLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxFQUFwQyxDQUFvQyxDQUFDLENBQUE7SUFDbEgsQ0FBQztJQUVELHlEQUF5QixHQUF6QixVQUEwQixJQUFJO1FBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM1QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ3hELENBQUM7SUFFRCw0Q0FBWSxHQUFaLFVBQWEsSUFBSTtRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsQ0FBQztZQUM3QyxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztJQUNQLENBQUM7SUF0QlEscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFFLCtCQUErQixDQUFFO1NBQ2pELENBQUM7eUNBTytCLG1DQUFlO1lBQ2QseUJBQWdCO09BUHJDLHFCQUFxQixDQXVCakM7SUFBRCw0QkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBFdmVudEJ1c1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vY29yZS9ldmVudC1idXMvZXZlbnQtYnVzLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtdGFibGUtZm9vdGVyc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90YWJsZS1mb290ZXJzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbICcuL3RhYmxlLWZvb3RlcnMuY29tcG9uZW50LmNzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUZvb3RlcnNDb21wb25lbnQge1xuXG4gICAgZW5hYmxlZE5leHRQYWdlID0gZmFsc2U7XG4gICAgZW5hYmxlZFByZXZpb3VzUGFnZSA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZXZlbnRCdXNTZXJ2aWNlOiBFdmVudEJ1c1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICkge1xuICAgICAgICB0aGlzLmV2ZW50QnVzU2VydmljZS5wYWdpbmF0aW9uQ29udHJvbGxzQXZhaWxhYmlsaXR5LnN1YnNjcmliZSgoZGF0YSkgPT4gdGhpcy51cGRhdGVQYWdpbmF0aW9uQ29udHJvbGxzKGRhdGEpKVxuICAgIH1cblxuICAgIHVwZGF0ZVBhZ2luYXRpb25Db250cm9sbHMoZGF0YSkge1xuICAgICAgICB0aGlzLmVuYWJsZWROZXh0UGFnZSA9IGRhdGEuZW5hYmxlZE5leHRQYWdlO1xuICAgICAgICB0aGlzLmVuYWJsZWRQcmV2aW91c1BhZ2UgPSBkYXRhLmVuYWJsZWRQcmV2aW91c1BhZ2U7XG4gICAgfVxuXG4gICAgZ29Ub05leHRQYWdlKG5leHQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dvIHRvIG5leHQgcGFnZTonLCBuZXh0KTtcbiAgICAgICAgdGhpcy5ldmVudEJ1c1NlcnZpY2UuZW1pdENoYW5nZVBpdGNoZXNQYWdpbmF0aW9uKHtcbiAgICAgICAgICAgIG5leHQ6IG5leHRcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==