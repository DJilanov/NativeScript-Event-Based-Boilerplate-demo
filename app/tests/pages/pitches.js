"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var pitches_component_1 = require("../../pages/pitches/pitches.component");
describe('PitchesComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [],
            declarations: [
                pitches_component_1.PitchesComponent
            ],
            imports: []
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(pitches_component_1.PitchesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl0Y2hlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBpdGNoZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBdUM7QUFDdkMsaURBQXlFO0FBRXpFLDJFQUF5RTtBQUV6RSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7SUFDNUIsSUFBSSxTQUEyQixDQUFDO0lBQ2hDLElBQUksT0FBMkMsQ0FBQztJQUVoRCxVQUFVLENBQUMsZUFBSyxDQUFDO1FBQ2hCLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDOUIsU0FBUyxFQUFFLEVBRVY7WUFDRCxZQUFZLEVBQUU7Z0JBQ2Isb0NBQWdCO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFLEVBRVI7U0FDRCxDQUFDO2FBQ0EsaUJBQWlCLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRUosVUFBVSxDQUFDO1FBQ1YsT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLG9DQUFnQixDQUFDLENBQUM7UUFDcEQsU0FBUyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN0QyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZUFBZSxFQUFFO1FBQ25CLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLXZhcmlhYmxlICovXHJcbmltcG9ydCB7IGFzeW5jLCBDb21wb25lbnRGaXh0dXJlLCBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcclxuXHJcbmltcG9ydCB7IFBpdGNoZXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9wYWdlcy9waXRjaGVzL3BpdGNoZXMuY29tcG9uZW50JztcclxuXHJcbmRlc2NyaWJlKCdQaXRjaGVzQ29tcG9uZW50JywgKCkgPT4ge1xyXG5cdGxldCBjb21wb25lbnQ6IFBpdGNoZXNDb21wb25lbnQ7XHJcblx0bGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8UGl0Y2hlc0NvbXBvbmVudD47XHJcblxyXG5cdGJlZm9yZUVhY2goYXN5bmMoKCkgPT4ge1xyXG5cdFx0VGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcclxuXHRcdFx0cHJvdmlkZXJzOiBbXHJcblxyXG5cdFx0XHRdLFxyXG5cdFx0XHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdFx0XHRQaXRjaGVzQ29tcG9uZW50XHJcblx0XHRcdF0sXHJcblx0XHRcdGltcG9ydHM6IFtcclxuXHJcblx0XHRcdF1cclxuXHRcdH0pXHJcblx0XHRcdC5jb21waWxlQ29tcG9uZW50cygpO1xyXG5cdH0pKTtcclxuXHJcblx0YmVmb3JlRWFjaCgoKSA9PiB7XHJcblx0XHRmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoUGl0Y2hlc0NvbXBvbmVudCk7XHJcblx0XHRjb21wb25lbnQgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xyXG5cdFx0Zml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XHJcblx0fSk7XHJcblxyXG5cdGl0KCdzaG91bGQgY3JlYXRlJywgKCkgPT4ge1xyXG5cdFx0ZXhwZWN0KGNvbXBvbmVudCkudG9CZVRydXRoeSgpO1xyXG5cdH0pO1xyXG59KTtcclxuIl19