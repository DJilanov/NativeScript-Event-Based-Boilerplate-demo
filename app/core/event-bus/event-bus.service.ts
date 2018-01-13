import { Injectable, EventEmitter } from '@angular/core';

@Injectable()

/**
 * @EventBusService used for connections between modules
 */
export class EventBusService {

	public requestError: EventEmitter<any>;
	public fetchedPitchData: EventEmitter<any>;

	constructor() {
		this.requestError = new EventEmitter();
		this.fetchedPitchData = new EventEmitter();
	}

	public emitRequestError(data) {
		this.requestError.emit(data);
	}
	
	public emitFetchedPitchData(data) {
		this.fetchedPitchData.emit(data);
	}
}
