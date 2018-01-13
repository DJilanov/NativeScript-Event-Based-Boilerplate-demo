/* tslint:disable:no-unused-variable */
import 'zone.js';
import { TestBed, async, inject } from '@angular/core/testing';

import { UtilsService } from '../../shared/utils/utils.service';

declare var beforeEach: any;
declare var describe: any;
declare var expect: any;
declare var it: any;
declare var responce: any;

describe('UtilsService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [],
			providers: [
				UtilsService
			]
		});
	});

	it('should ...', inject([UtilsService], (service: UtilsService) => {
		expect(service).toBeTruthy();
  }));

  it('should be sure the date difference works correctly', inject([UtilsService], (service: UtilsService) => {
		let ends = new Date('2017-04-04');
    let starts = new Date('2017-04-03');
		expect(service.getTimeDifference(ends, starts)).toBe('1d ');
	}));
  
  it('should be sure the date difference works correctly on no difference', inject([UtilsService], (service: UtilsService) => {
		let ends = new Date('2017-04-04');
    let starts = new Date('2017-04-04');
    expect(service.getTimeDifference(ends, starts)).toBe('');
  }));
});