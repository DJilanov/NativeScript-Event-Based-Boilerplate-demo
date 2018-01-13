import { Injectable } from "@angular/core";

@Injectable()
export class UtilsService {

    getTimeDifference(ends, starts) {
        let difference = (ends.getTime() - starts.getTime()) / 1000;
        let days = ~~(difference / 86400)
        let hrs = ~~(difference / 3600);
        let mins = ~~((difference % 3600) / 60);
        let secs = difference % 60;
        let response = '';
        if(days > 0) {
            response += `${days}d `;
        }
        if(hrs > 0) {
            response += `${hrs}h `;
        }
        if(mins > 0) {
            response += `${mins}m `;
        }
        if(secs > 0) {
            response += `${secs}s `;
        }
        return response;
    }
}
