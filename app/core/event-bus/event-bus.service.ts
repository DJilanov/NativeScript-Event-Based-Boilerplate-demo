import { Injectable, EventEmitter } from '@angular/core';

@Injectable()

/**
 * @EventBusService used for connections between modules
 */
export class EventBusService {

	public requestError: EventEmitter<any>;
	public fetchedPitchData: EventEmitter<any>;
	public changePitchesPagination: EventEmitter<any>;
	public paginationControllsAvailability: EventEmitter<any>;

	constructor() {
		this.requestError = new EventEmitter();
		this.fetchedPitchData = new EventEmitter();
		this.changePitchesPagination = new EventEmitter();
		this.paginationControllsAvailability = new EventEmitter();
	}

	public emitRequestError(data): void {
		this.requestError.emit(data);
	}
	
	public emitFetchedPitchData(data): void {
		this.fetchedPitchData.emit(data);
	}
	
	public emitChangePitchesPagination(data): void {
		this.changePitchesPagination.emit(data);
	}
	
	public emitPaginationControllsAvailability(data): void {
		this.paginationControllsAvailability.emit(data);
	}
}
