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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZm9vdGVycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJsZS1mb290ZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxzREFBK0Q7QUFFL0QsNEVBQXlFO0FBUXpFO0lBS0ksK0JBQ1ksZUFBZ0MsRUFDaEMsZ0JBQWtDO1FBRjlDLGlCQUtDO1FBSlcsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFMOUMsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBTXhCLElBQUksQ0FBQyxlQUFlLENBQUMsK0JBQStCLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxFQUFwQyxDQUFvQyxDQUFDLENBQUE7SUFDbEgsQ0FBQztJQUVELHlEQUF5QixHQUF6QixVQUEwQixJQUFJO1FBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM1QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ3hELENBQUM7SUFFRCw0Q0FBWSxHQUFaLFVBQWEsSUFBSTtRQUNiLElBQUksQ0FBQyxlQUFlLENBQUMsMkJBQTJCLENBQUM7WUFDN0MsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUM7SUFDUCxDQUFDO0lBckJRLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBRSwrQkFBK0IsQ0FBRTtTQUNqRCxDQUFDO3lDQU8rQixtQ0FBZTtZQUNkLHlCQUFnQjtPQVByQyxxQkFBcUIsQ0FzQmpDO0lBQUQsNEJBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgRXZlbnRCdXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2NvcmUvZXZlbnQtYnVzL2V2ZW50LWJ1cy5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLXRhYmxlLWZvb3RlcnNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdGFibGUtZm9vdGVycy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWyAnLi90YWJsZS1mb290ZXJzLmNvbXBvbmVudC5jc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVGb290ZXJzQ29tcG9uZW50IHtcblxuICAgIGVuYWJsZWROZXh0UGFnZSA9IGZhbHNlO1xuICAgIGVuYWJsZWRQcmV2aW91c1BhZ2UgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGV2ZW50QnVzU2VydmljZTogRXZlbnRCdXNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcbiAgICApIHtcbiAgICAgICAgdGhpcy5ldmVudEJ1c1NlcnZpY2UucGFnaW5hdGlvbkNvbnRyb2xsc0F2YWlsYWJpbGl0eS5zdWJzY3JpYmUoKGRhdGEpID0+IHRoaXMudXBkYXRlUGFnaW5hdGlvbkNvbnRyb2xscyhkYXRhKSlcbiAgICB9XG5cbiAgICB1cGRhdGVQYWdpbmF0aW9uQ29udHJvbGxzKGRhdGEpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkTmV4dFBhZ2UgPSBkYXRhLmVuYWJsZWROZXh0UGFnZTtcbiAgICAgICAgdGhpcy5lbmFibGVkUHJldmlvdXNQYWdlID0gZGF0YS5lbmFibGVkUHJldmlvdXNQYWdlO1xuICAgIH1cblxuICAgIGdvVG9OZXh0UGFnZShuZXh0KSB7XG4gICAgICAgIHRoaXMuZXZlbnRCdXNTZXJ2aWNlLmVtaXRDaGFuZ2VQaXRjaGVzUGFnaW5hdGlvbih7XG4gICAgICAgICAgICBuZXh0OiBuZXh0XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=