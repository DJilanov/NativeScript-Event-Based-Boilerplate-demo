"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
require("zone.js");
var testing_1 = require("@angular/core/testing");
var utils_service_1 = require("../../shared/utils/utils.service");
describe('UtilsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [],
            providers: [
                utils_service_1.UtilsService
            ]
        });
    });
    it('should ...', testing_1.inject([utils_service_1.UtilsService], function (service) {
        expect(service).toBeTruthy();
    }));
    it('should be sure the date difference works correctly', testing_1.inject([utils_service_1.UtilsService], function (service) {
        var ends = new Date('2017-04-04');
        var starts = new Date('2017-04-03');
        expect(service.getTimeDifference(ends, starts)).toBe('1d ');
    }));
    it('should be sure the date difference works correctly on no difference', testing_1.inject([utils_service_1.UtilsService], function (service) {
        var ends = new Date('2017-04-04');
        var starts = new Date('2017-04-04');
        expect(service.getTimeDifference(ends, starts)).toBe('');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUF1QztBQUN2QyxtQkFBaUI7QUFDakIsaURBQStEO0FBRS9ELGtFQUFnRTtBQVFoRSxRQUFRLENBQUMsY0FBYyxFQUFFO0lBQ3hCLFVBQVUsQ0FBQztRQUNWLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDOUIsT0FBTyxFQUFFLEVBQUU7WUFDWCxTQUFTLEVBQUU7Z0JBQ1YsNEJBQVk7YUFDWjtTQUNELENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBTSxDQUFDLENBQUMsNEJBQVksQ0FBQyxFQUFFLFVBQUMsT0FBcUI7UUFDN0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixFQUFFLENBQUMsb0RBQW9ELEVBQUUsZ0JBQU0sQ0FBQyxDQUFDLDRCQUFZLENBQUMsRUFBRSxVQUFDLE9BQXFCO1FBQ3RHLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hDLElBQUksTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMscUVBQXFFLEVBQUUsZ0JBQU0sQ0FBQyxDQUFDLDRCQUFZLENBQUMsRUFBRSxVQUFDLE9BQXFCO1FBQ3ZILElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hDLElBQUksTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm5vLXVudXNlZC12YXJpYWJsZSAqL1xuaW1wb3J0ICd6b25lLmpzJztcbmltcG9ydCB7IFRlc3RCZWQsIGFzeW5jLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuXG5pbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMvdXRpbHMuc2VydmljZSc7XG5cbmRlY2xhcmUgdmFyIGJlZm9yZUVhY2g6IGFueTtcbmRlY2xhcmUgdmFyIGRlc2NyaWJlOiBhbnk7XG5kZWNsYXJlIHZhciBleHBlY3Q6IGFueTtcbmRlY2xhcmUgdmFyIGl0OiBhbnk7XG5kZWNsYXJlIHZhciByZXNwb25jZTogYW55O1xuXG5kZXNjcmliZSgnVXRpbHNTZXJ2aWNlJywgKCkgPT4ge1xuXHRiZWZvcmVFYWNoKCgpID0+IHtcblx0XHRUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuXHRcdFx0aW1wb3J0czogW10sXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0VXRpbHNTZXJ2aWNlXG5cdFx0XHRdXG5cdFx0fSk7XG5cdH0pO1xuXG5cdGl0KCdzaG91bGQgLi4uJywgaW5qZWN0KFtVdGlsc1NlcnZpY2VdLCAoc2VydmljZTogVXRpbHNTZXJ2aWNlKSA9PiB7XG5cdFx0ZXhwZWN0KHNlcnZpY2UpLnRvQmVUcnV0aHkoKTtcbiAgfSkpO1xuXG4gIGl0KCdzaG91bGQgYmUgc3VyZSB0aGUgZGF0ZSBkaWZmZXJlbmNlIHdvcmtzIGNvcnJlY3RseScsIGluamVjdChbVXRpbHNTZXJ2aWNlXSwgKHNlcnZpY2U6IFV0aWxzU2VydmljZSkgPT4ge1xuXHRcdGxldCBlbmRzID0gbmV3IERhdGUoJzIwMTctMDQtMDQnKTtcbiAgICBsZXQgc3RhcnRzID0gbmV3IERhdGUoJzIwMTctMDQtMDMnKTtcblx0XHRleHBlY3Qoc2VydmljZS5nZXRUaW1lRGlmZmVyZW5jZShlbmRzLCBzdGFydHMpKS50b0JlKCcxZCAnKTtcblx0fSkpO1xuICBcbiAgaXQoJ3Nob3VsZCBiZSBzdXJlIHRoZSBkYXRlIGRpZmZlcmVuY2Ugd29ya3MgY29ycmVjdGx5IG9uIG5vIGRpZmZlcmVuY2UnLCBpbmplY3QoW1V0aWxzU2VydmljZV0sIChzZXJ2aWNlOiBVdGlsc1NlcnZpY2UpID0+IHtcblx0XHRsZXQgZW5kcyA9IG5ldyBEYXRlKCcyMDE3LTA0LTA0Jyk7XG4gICAgbGV0IHN0YXJ0cyA9IG5ldyBEYXRlKCcyMDE3LTA0LTA0Jyk7XG4gICAgZXhwZWN0KHNlcnZpY2UuZ2V0VGltZURpZmZlcmVuY2UoZW5kcywgc3RhcnRzKSkudG9CZSgnJyk7XG4gIH0pKTtcbn0pOyJdfQ==