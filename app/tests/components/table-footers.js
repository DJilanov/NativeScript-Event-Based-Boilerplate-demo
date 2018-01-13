"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var table_footers_component_1 = require("../../components/table-footers/table-footers.component");
describe('TableFootersComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [],
            declarations: [
                table_footers_component_1.TableFootersComponent
            ],
            imports: []
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(table_footers_component_1.TableFootersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZm9vdGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhYmxlLWZvb3RlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBdUM7QUFDdkMsaURBQXlFO0FBRXpFLGtHQUErRjtBQUUvRixRQUFRLENBQUMsdUJBQXVCLEVBQUU7SUFDakMsSUFBSSxTQUFnQyxDQUFDO0lBQ3JDLElBQUksT0FBZ0QsQ0FBQztJQUVyRCxVQUFVLENBQUMsZUFBSyxDQUFDO1FBQ2hCLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDOUIsU0FBUyxFQUFFLEVBRVY7WUFDRCxZQUFZLEVBQUU7Z0JBQ2IsK0NBQXFCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFLEVBRVI7U0FDRCxDQUFDO2FBQ0EsaUJBQWlCLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRUosVUFBVSxDQUFDO1FBQ1YsT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLCtDQUFxQixDQUFDLENBQUM7UUFDekQsU0FBUyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN0QyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZUFBZSxFQUFFO1FBQ25CLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLXZhcmlhYmxlICovXHJcbmltcG9ydCB7IGFzeW5jLCBDb21wb25lbnRGaXh0dXJlLCBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcclxuXHJcbmltcG9ydCB7IFRhYmxlRm9vdGVyc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGFibGUtZm9vdGVycy90YWJsZS1mb290ZXJzLmNvbXBvbmVudCc7XHJcblxyXG5kZXNjcmliZSgnVGFibGVGb290ZXJzQ29tcG9uZW50JywgKCkgPT4ge1xyXG5cdGxldCBjb21wb25lbnQ6IFRhYmxlRm9vdGVyc0NvbXBvbmVudDtcclxuXHRsZXQgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxUYWJsZUZvb3RlcnNDb21wb25lbnQ+O1xyXG5cclxuXHRiZWZvcmVFYWNoKGFzeW5jKCgpID0+IHtcclxuXHRcdFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cclxuXHRcdFx0XSxcclxuXHRcdFx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRcdFx0VGFibGVGb290ZXJzQ29tcG9uZW50XHJcblx0XHRcdF0sXHJcblx0XHRcdGltcG9ydHM6IFtcclxuXHJcblx0XHRcdF1cclxuXHRcdH0pXHJcblx0XHRcdC5jb21waWxlQ29tcG9uZW50cygpO1xyXG5cdH0pKTtcclxuXHJcblx0YmVmb3JlRWFjaCgoKSA9PiB7XHJcblx0XHRmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoVGFibGVGb290ZXJzQ29tcG9uZW50KTtcclxuXHRcdGNvbXBvbmVudCA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XHJcblx0XHRmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcclxuXHR9KTtcclxuXHJcblx0aXQoJ3Nob3VsZCBjcmVhdGUnLCAoKSA9PiB7XHJcblx0XHRleHBlY3QoY29tcG9uZW50KS50b0JlVHJ1dGh5KCk7XHJcblx0fSk7XHJcbn0pO1xyXG4iXX0=