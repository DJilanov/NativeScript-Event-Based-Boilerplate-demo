"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var pitch_component_1 = require("../../components/pitch/pitch.component");
describe('PitchComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [],
            declarations: [
                pitch_component_1.PitchComponent
            ],
            imports: []
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(pitch_component_1.PitchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUF1QztBQUN2QyxpREFBeUU7QUFFekUsMEVBQXdFO0FBRXhFLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUMxQixJQUFJLFNBQXlCLENBQUM7SUFDOUIsSUFBSSxPQUF5QyxDQUFDO0lBRTlDLFVBQVUsQ0FBQyxlQUFLLENBQUM7UUFDaEIsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM5QixTQUFTLEVBQUUsRUFFVjtZQUNELFlBQVksRUFBRTtnQkFDYixnQ0FBYzthQUNkO1lBQ0QsT0FBTyxFQUFFLEVBRVI7U0FDRCxDQUFDO2FBQ0EsaUJBQWlCLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRUosVUFBVSxDQUFDO1FBQ1YsT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLGdDQUFjLENBQUMsQ0FBQztRQUNsRCxTQUFTLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxlQUFlLEVBQUU7UUFDbkIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpuby11bnVzZWQtdmFyaWFibGUgKi9cclxuaW1wb3J0IHsgYXN5bmMsIENvbXBvbmVudEZpeHR1cmUsIFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xyXG5cclxuaW1wb3J0IHsgUGl0Y2hDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BpdGNoL3BpdGNoLmNvbXBvbmVudCc7XHJcblxyXG5kZXNjcmliZSgnUGl0Y2hDb21wb25lbnQnLCAoKSA9PiB7XHJcblx0bGV0IGNvbXBvbmVudDogUGl0Y2hDb21wb25lbnQ7XHJcblx0bGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8UGl0Y2hDb21wb25lbnQ+O1xyXG5cclxuXHRiZWZvcmVFYWNoKGFzeW5jKCgpID0+IHtcclxuXHRcdFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cclxuXHRcdFx0XSxcclxuXHRcdFx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRcdFx0UGl0Y2hDb21wb25lbnRcclxuXHRcdFx0XSxcclxuXHRcdFx0aW1wb3J0czogW1xyXG5cclxuXHRcdFx0XVxyXG5cdFx0fSlcclxuXHRcdFx0LmNvbXBpbGVDb21wb25lbnRzKCk7XHJcblx0fSkpO1xyXG5cclxuXHRiZWZvcmVFYWNoKCgpID0+IHtcclxuXHRcdGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChQaXRjaENvbXBvbmVudCk7XHJcblx0XHRjb21wb25lbnQgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xyXG5cdFx0Zml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XHJcblx0fSk7XHJcblxyXG5cdGl0KCdzaG91bGQgY3JlYXRlJywgKCkgPT4ge1xyXG5cdFx0ZXhwZWN0KGNvbXBvbmVudCkudG9CZVRydXRoeSgpO1xyXG5cdH0pO1xyXG59KTtcclxuIl19