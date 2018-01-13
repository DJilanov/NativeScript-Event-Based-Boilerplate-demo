import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
@Injectable()
export class BackendService {

	constructor() { 

	}

	fetchPitches(data) {
		return this.backendRequest('GET', `${data.id}/slots?filter[starts]=${data.startDate}&filter[ends]=${data.endDate}`);
	}

	backendRequest(requestType, requestTarget, requestData?) {
		console.log('target:', environment.apiUrl + requestTarget)
		if(requestType === 'POST') {
			return fetch(environment.apiUrl + requestTarget, {
				method: requestType,
				headers: new Headers({ "Content-Type": "application/json" }),
				body: JSON.stringify(requestData)
			})
		} else {
			return fetch(environment.apiUrl + requestTarget, {
				method: requestType,
				headers: new Headers({ "Content-Type": "application/json" })
			})
		}
	}

}
