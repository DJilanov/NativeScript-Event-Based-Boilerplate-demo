"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var search_form_component_1 = require("../../components/search-form/search-form.component");
describe('SearchFormComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [],
            declarations: [
                search_form_component_1.SearchFormComponent
            ],
            imports: []
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(search_form_component_1.SearchFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUF1QztBQUN2QyxpREFBeUU7QUFFekUsNEZBQXlGO0FBRXpGLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtJQUMvQixJQUFJLFNBQThCLENBQUM7SUFDbkMsSUFBSSxPQUE4QyxDQUFDO0lBRW5ELFVBQVUsQ0FBQyxlQUFLLENBQUM7UUFDaEIsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM5QixTQUFTLEVBQUUsRUFFVjtZQUNELFlBQVksRUFBRTtnQkFDYiwyQ0FBbUI7YUFDbkI7WUFDRCxPQUFPLEVBQUUsRUFFUjtTQUNELENBQUM7YUFDQSxpQkFBaUIsRUFBRSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixVQUFVLENBQUM7UUFDVixPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsMkNBQW1CLENBQUMsQ0FBQztRQUN2RCxTQUFTLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxlQUFlLEVBQUU7UUFDbkIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpuby11bnVzZWQtdmFyaWFibGUgKi9cclxuaW1wb3J0IHsgYXN5bmMsIENvbXBvbmVudEZpeHR1cmUsIFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xyXG5cclxuaW1wb3J0IHsgU2VhcmNoRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2VhcmNoLWZvcm0vc2VhcmNoLWZvcm0uY29tcG9uZW50JztcclxuXHJcbmRlc2NyaWJlKCdTZWFyY2hGb3JtQ29tcG9uZW50JywgKCkgPT4ge1xyXG5cdGxldCBjb21wb25lbnQ6IFNlYXJjaEZvcm1Db21wb25lbnQ7XHJcblx0bGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8U2VhcmNoRm9ybUNvbXBvbmVudD47XHJcblxyXG5cdGJlZm9yZUVhY2goYXN5bmMoKCkgPT4ge1xyXG5cdFx0VGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcclxuXHRcdFx0cHJvdmlkZXJzOiBbXHJcblxyXG5cdFx0XHRdLFxyXG5cdFx0XHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdFx0XHRTZWFyY2hGb3JtQ29tcG9uZW50XHJcblx0XHRcdF0sXHJcblx0XHRcdGltcG9ydHM6IFtcclxuXHJcblx0XHRcdF1cclxuXHRcdH0pXHJcblx0XHRcdC5jb21waWxlQ29tcG9uZW50cygpO1xyXG5cdH0pKTtcclxuXHJcblx0YmVmb3JlRWFjaCgoKSA9PiB7XHJcblx0XHRmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoU2VhcmNoRm9ybUNvbXBvbmVudCk7XHJcblx0XHRjb21wb25lbnQgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xyXG5cdFx0Zml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XHJcblx0fSk7XHJcblxyXG5cdGl0KCdzaG91bGQgY3JlYXRlJywgKCkgPT4ge1xyXG5cdFx0ZXhwZWN0KGNvbXBvbmVudCkudG9CZVRydXRoeSgpO1xyXG5cdH0pO1xyXG59KTtcclxuIl19