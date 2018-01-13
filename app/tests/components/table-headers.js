"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var table_headers_component_1 = require("../../components/table-headers/table-headers.component");
describe('PitchComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [],
            declarations: [
                table_headers_component_1.TableHeadersComponent
            ],
            imports: []
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(table_headers_component_1.TableHeadersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVhZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhYmxlLWhlYWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBdUM7QUFDdkMsaURBQXlFO0FBRXpFLGtHQUErRjtBQUUvRixRQUFRLENBQUMsZ0JBQWdCLEVBQUU7SUFDMUIsSUFBSSxTQUFnQyxDQUFDO0lBQ3JDLElBQUksT0FBZ0QsQ0FBQztJQUVyRCxVQUFVLENBQUMsZUFBSyxDQUFDO1FBQ2hCLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDOUIsU0FBUyxFQUFFLEVBRVY7WUFDRCxZQUFZLEVBQUU7Z0JBQ2IsK0NBQXFCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFLEVBRVI7U0FDRCxDQUFDO2FBQ0EsaUJBQWlCLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRUosVUFBVSxDQUFDO1FBQ1YsT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLCtDQUFxQixDQUFDLENBQUM7UUFDekQsU0FBUyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN0QyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZUFBZSxFQUFFO1FBQ25CLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLXZhcmlhYmxlICovXHJcbmltcG9ydCB7IGFzeW5jLCBDb21wb25lbnRGaXh0dXJlLCBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcclxuXHJcbmltcG9ydCB7IFRhYmxlSGVhZGVyc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGFibGUtaGVhZGVycy90YWJsZS1oZWFkZXJzLmNvbXBvbmVudCc7XHJcblxyXG5kZXNjcmliZSgnUGl0Y2hDb21wb25lbnQnLCAoKSA9PiB7XHJcblx0bGV0IGNvbXBvbmVudDogVGFibGVIZWFkZXJzQ29tcG9uZW50O1xyXG5cdGxldCBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPFRhYmxlSGVhZGVyc0NvbXBvbmVudD47XHJcblxyXG5cdGJlZm9yZUVhY2goYXN5bmMoKCkgPT4ge1xyXG5cdFx0VGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcclxuXHRcdFx0cHJvdmlkZXJzOiBbXHJcblxyXG5cdFx0XHRdLFxyXG5cdFx0XHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdFx0XHRUYWJsZUhlYWRlcnNDb21wb25lbnRcclxuXHRcdFx0XSxcclxuXHRcdFx0aW1wb3J0czogW1xyXG5cclxuXHRcdFx0XVxyXG5cdFx0fSlcclxuXHRcdFx0LmNvbXBpbGVDb21wb25lbnRzKCk7XHJcblx0fSkpO1xyXG5cclxuXHRiZWZvcmVFYWNoKCgpID0+IHtcclxuXHRcdGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChUYWJsZUhlYWRlcnNDb21wb25lbnQpO1xyXG5cdFx0Y29tcG9uZW50ID0gZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcclxuXHRcdGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cdH0pO1xyXG5cclxuXHRpdCgnc2hvdWxkIGNyZWF0ZScsICgpID0+IHtcclxuXHRcdGV4cGVjdChjb21wb25lbnQpLnRvQmVUcnV0aHkoKTtcclxuXHR9KTtcclxufSk7XHJcbiJdfQ==