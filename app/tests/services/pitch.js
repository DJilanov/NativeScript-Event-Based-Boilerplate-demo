"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
require("zone.js");
var testing_1 = require("@angular/core/testing");
var pitch_service_1 = require("../../services/pitch/pitch.service");
describe('PitchService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [],
            providers: [
                pitch_service_1.PitchService
            ]
        });
    });
    it('should ...', testing_1.inject([pitch_service_1.PitchService], function (service) {
        expect(service).toBeTruthy();
    }));
    it('should be sure the date difference works correctly', testing_1.inject([pitch_service_1.PitchService], function (service) {
        service.setPitches([
            {
                "type": "slots",
                "id": "454721",
                "attributes": {
                    "starts": "2018-01-15T06:40:00+00:00",
                    "ends": "2018-01-15T07:20:00+00:00",
                    "price": "12.05",
                    "admin_fee": "0.00",
                    "currency": "GBP",
                    "availabilities": 4
                }
            },
            {
                "type": "slots",
                "id": "454722",
                "attributes": {
                    "starts": "2018-01-15T07:20:00+00:00",
                    "ends": "2018-01-15T08:00:00+00:00",
                    "price": "9.90",
                    "admin_fee": "0.00",
                    "currency": "GBP",
                    "availabilities": 0
                }
            }
        ]);
        expect(service.getPitch('454722').attributes.price).toBe('9.90');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUF1QztBQUN2QyxtQkFBaUI7QUFDakIsaURBQStEO0FBRS9ELG9FQUFrRTtBQVFsRSxRQUFRLENBQUMsY0FBYyxFQUFFO0lBQ3hCLFVBQVUsQ0FBQztRQUNWLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDOUIsT0FBTyxFQUFFLEVBQUU7WUFDWCxTQUFTLEVBQUU7Z0JBQ1YsNEJBQVk7YUFDWjtTQUNELENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBTSxDQUFDLENBQUMsNEJBQVksQ0FBQyxFQUFFLFVBQUMsT0FBcUI7UUFDN0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixFQUFFLENBQUMsb0RBQW9ELEVBQUUsZ0JBQU0sQ0FBQyxDQUFDLDRCQUFZLENBQUMsRUFBRSxVQUFDLE9BQXFCO1FBQ3BHLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDakI7Z0JBQ0UsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsWUFBWSxFQUFFO29CQUNWLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLE1BQU0sRUFBRSwyQkFBMkI7b0JBQ25DLE9BQU8sRUFBRSxPQUFPO29CQUNoQixXQUFXLEVBQUUsTUFBTTtvQkFDbkIsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCLGdCQUFnQixFQUFFLENBQUM7aUJBQ3RCO2FBQ0o7WUFDRDtnQkFDSSxNQUFNLEVBQUUsT0FBTztnQkFDZixJQUFJLEVBQUUsUUFBUTtnQkFDZCxZQUFZLEVBQUU7b0JBQ1YsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsTUFBTSxFQUFFLDJCQUEyQjtvQkFDbkMsT0FBTyxFQUFFLE1BQU07b0JBQ2YsV0FBVyxFQUFFLE1BQU07b0JBQ25CLFVBQVUsRUFBRSxLQUFLO29CQUNqQixnQkFBZ0IsRUFBRSxDQUFDO2lCQUN0QjthQUNKO1NBQUMsQ0FBQyxDQUFDO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpuby11bnVzZWQtdmFyaWFibGUgKi9cbmltcG9ydCAnem9uZS5qcyc7XG5pbXBvcnQgeyBUZXN0QmVkLCBhc3luYywgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcblxuaW1wb3J0IHsgUGl0Y2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcGl0Y2gvcGl0Y2guc2VydmljZSc7XG5cbmRlY2xhcmUgdmFyIGJlZm9yZUVhY2g6IGFueTtcbmRlY2xhcmUgdmFyIGRlc2NyaWJlOiBhbnk7XG5kZWNsYXJlIHZhciBleHBlY3Q6IGFueTtcbmRlY2xhcmUgdmFyIGl0OiBhbnk7XG5kZWNsYXJlIHZhciByZXNwb25jZTogYW55O1xuXG5kZXNjcmliZSgnUGl0Y2hTZXJ2aWNlJywgKCkgPT4ge1xuXHRiZWZvcmVFYWNoKCgpID0+IHtcblx0XHRUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuXHRcdFx0aW1wb3J0czogW10sXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0UGl0Y2hTZXJ2aWNlXG5cdFx0XHRdXG5cdFx0fSk7XG5cdH0pO1xuXG5cdGl0KCdzaG91bGQgLi4uJywgaW5qZWN0KFtQaXRjaFNlcnZpY2VdLCAoc2VydmljZTogUGl0Y2hTZXJ2aWNlKSA9PiB7XG5cdFx0ZXhwZWN0KHNlcnZpY2UpLnRvQmVUcnV0aHkoKTtcbiAgfSkpO1xuXG4gIGl0KCdzaG91bGQgYmUgc3VyZSB0aGUgZGF0ZSBkaWZmZXJlbmNlIHdvcmtzIGNvcnJlY3RseScsIGluamVjdChbUGl0Y2hTZXJ2aWNlXSwgKHNlcnZpY2U6IFBpdGNoU2VydmljZSkgPT4ge1xuICAgIHNlcnZpY2Uuc2V0UGl0Y2hlcyhbXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcInNsb3RzXCIsXG4gICAgICAgIFwiaWRcIjogXCI0NTQ3MjFcIixcbiAgICAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgICAgICAgICAgIFwic3RhcnRzXCI6IFwiMjAxOC0wMS0xNVQwNjo0MDowMCswMDowMFwiLFxuICAgICAgICAgICAgXCJlbmRzXCI6IFwiMjAxOC0wMS0xNVQwNzoyMDowMCswMDowMFwiLFxuICAgICAgICAgICAgXCJwcmljZVwiOiBcIjEyLjA1XCIsXG4gICAgICAgICAgICBcImFkbWluX2ZlZVwiOiBcIjAuMDBcIixcbiAgICAgICAgICAgIFwiY3VycmVuY3lcIjogXCJHQlBcIixcbiAgICAgICAgICAgIFwiYXZhaWxhYmlsaXRpZXNcIjogNFxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcInNsb3RzXCIsXG4gICAgICAgIFwiaWRcIjogXCI0NTQ3MjJcIixcbiAgICAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgICAgICAgICAgIFwic3RhcnRzXCI6IFwiMjAxOC0wMS0xNVQwNzoyMDowMCswMDowMFwiLFxuICAgICAgICAgICAgXCJlbmRzXCI6IFwiMjAxOC0wMS0xNVQwODowMDowMCswMDowMFwiLFxuICAgICAgICAgICAgXCJwcmljZVwiOiBcIjkuOTBcIixcbiAgICAgICAgICAgIFwiYWRtaW5fZmVlXCI6IFwiMC4wMFwiLFxuICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiBcIkdCUFwiLFxuICAgICAgICAgICAgXCJhdmFpbGFiaWxpdGllc1wiOiAwXG4gICAgICAgIH1cbiAgICB9XSk7XG5cdFx0ZXhwZWN0KHNlcnZpY2UuZ2V0UGl0Y2goJzQ1NDcyMicpLmF0dHJpYnV0ZXMucHJpY2UpLnRvQmUoJzkuOTAnKTtcblx0fSkpO1xufSk7Il19