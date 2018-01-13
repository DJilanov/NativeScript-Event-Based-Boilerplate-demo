"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var pitch_detail_component_1 = require("../../pages/pitch-detail/pitch-detail.component");
describe('PitchDetailComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [],
            declarations: [
                pitch_detail_component_1.PitchDetailComponent
            ],
            imports: []
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(pitch_detail_component_1.PitchDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl0Y2gtZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGl0Y2gtZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXVDO0FBQ3ZDLGlEQUF5RTtBQUV6RSwwRkFBdUY7QUFFdkYsUUFBUSxDQUFDLHNCQUFzQixFQUFFO0lBQ2hDLElBQUksU0FBK0IsQ0FBQztJQUNwQyxJQUFJLE9BQStDLENBQUM7SUFFcEQsVUFBVSxDQUFDLGVBQUssQ0FBQztRQUNoQixpQkFBTyxDQUFDLHNCQUFzQixDQUFDO1lBQzlCLFNBQVMsRUFBRSxFQUVWO1lBQ0QsWUFBWSxFQUFFO2dCQUNiLDZDQUFvQjthQUNwQjtZQUNELE9BQU8sRUFBRSxFQUVSO1NBQ0QsQ0FBQzthQUNBLGlCQUFpQixFQUFFLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVKLFVBQVUsQ0FBQztRQUNWLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyw2Q0FBb0IsQ0FBQyxDQUFDO1FBQ3hELFNBQVMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDdEMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGVBQWUsRUFBRTtRQUNuQixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDaEMsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm5vLXVudXNlZC12YXJpYWJsZSAqL1xyXG5pbXBvcnQgeyBhc3luYywgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XHJcblxyXG5pbXBvcnQgeyBQaXRjaERldGFpbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL3BhZ2VzL3BpdGNoLWRldGFpbC9waXRjaC1kZXRhaWwuY29tcG9uZW50JztcclxuXHJcbmRlc2NyaWJlKCdQaXRjaERldGFpbENvbXBvbmVudCcsICgpID0+IHtcclxuXHRsZXQgY29tcG9uZW50OiBQaXRjaERldGFpbENvbXBvbmVudDtcclxuXHRsZXQgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxQaXRjaERldGFpbENvbXBvbmVudD47XHJcblxyXG5cdGJlZm9yZUVhY2goYXN5bmMoKCkgPT4ge1xyXG5cdFx0VGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcclxuXHRcdFx0cHJvdmlkZXJzOiBbXHJcblxyXG5cdFx0XHRdLFxyXG5cdFx0XHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdFx0XHRQaXRjaERldGFpbENvbXBvbmVudFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRpbXBvcnRzOiBbXHJcblxyXG5cdFx0XHRdXHJcblx0XHR9KVxyXG5cdFx0XHQuY29tcGlsZUNvbXBvbmVudHMoKTtcclxuXHR9KSk7XHJcblxyXG5cdGJlZm9yZUVhY2goKCkgPT4ge1xyXG5cdFx0Zml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KFBpdGNoRGV0YWlsQ29tcG9uZW50KTtcclxuXHRcdGNvbXBvbmVudCA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XHJcblx0XHRmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcclxuXHR9KTtcclxuXHJcblx0aXQoJ3Nob3VsZCBjcmVhdGUnLCAoKSA9PiB7XHJcblx0XHRleHBlY3QoY29tcG9uZW50KS50b0JlVHJ1dGh5KCk7XHJcblx0fSk7XHJcbn0pO1xyXG4iXX0=