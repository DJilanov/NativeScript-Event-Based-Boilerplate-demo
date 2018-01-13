/* tslint:disable:no-unused-variable */
import 'zone.js';
import { TestBed, async, inject } from '@angular/core/testing';

import { PitchService } from '../../services/pitch/pitch.service';

declare var beforeEach: any;
declare var describe: any;
declare var expect: any;
declare var it: any;
declare var responce: any;

describe('PitchService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [],
			providers: [
				PitchService
			]
		});
	});

	it('should ...', inject([PitchService], (service: PitchService) => {
		expect(service).toBeTruthy();
  }));

  it('should be sure the date difference works correctly', inject([PitchService], (service: PitchService) => {
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
    }]);
		expect(service.getPitch('454722').attributes.price).toBe('9.90');
	}));
});