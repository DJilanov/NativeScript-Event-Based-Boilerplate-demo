"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var environment_1 = require("../../environments/environment");
var BackendService = (function () {
    function BackendService() {
    }
    BackendService.prototype.fetchPitches = function (data) {
        return this.backendRequest('GET', data.id + "/slots?filter[starts]=" + data.startDate + "&filter[ends]=" + data.endDate);
    };
    BackendService.prototype.backendRequest = function (requestType, requestTarget, requestData) {
        console.log('target:', environment_1.environment.apiUrl + requestTarget);
        if (requestType === 'POST') {
            return fetch(environment_1.environment.apiUrl + requestTarget, {
                method: requestType,
                headers: new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify(requestData)
            });
        }
        else {
            return fetch(environment_1.environment.apiUrl + requestTarget, {
                method: requestType,
                headers: new Headers({ "Content-Type": "application/json" })
            });
        }
    };
    BackendService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDhEQUE2RDtBQUU3RDtJQUVDO0lBRUEsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBSyxJQUFJLENBQUMsRUFBRSw4QkFBeUIsSUFBSSxDQUFDLFNBQVMsc0JBQWlCLElBQUksQ0FBQyxPQUFTLENBQUMsQ0FBQztJQUNySCxDQUFDO0lBRUQsdUNBQWMsR0FBZCxVQUFlLFdBQVcsRUFBRSxhQUFhLEVBQUUsV0FBWTtRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSx5QkFBVyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsQ0FBQTtRQUMxRCxFQUFFLENBQUEsQ0FBQyxXQUFXLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsS0FBSyxDQUFDLHlCQUFXLENBQUMsTUFBTSxHQUFHLGFBQWEsRUFBRTtnQkFDaEQsTUFBTSxFQUFFLFdBQVc7Z0JBQ25CLE9BQU8sRUFBRSxJQUFJLE9BQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO2dCQUM1RCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7YUFDakMsQ0FBQyxDQUFBO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQyx5QkFBVyxDQUFDLE1BQU0sR0FBRyxhQUFhLEVBQUU7Z0JBQ2hELE1BQU0sRUFBRSxXQUFXO2dCQUNuQixPQUFPLEVBQUUsSUFBSSxPQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQzthQUM1RCxDQUFDLENBQUE7UUFDSCxDQUFDO0lBQ0YsQ0FBQztJQXhCVyxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7O09BQ0EsY0FBYyxDQTBCMUI7SUFBRCxxQkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkgeyBcclxuXHJcblx0fVxyXG5cclxuXHRmZXRjaFBpdGNoZXMoZGF0YSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYmFja2VuZFJlcXVlc3QoJ0dFVCcsIGAke2RhdGEuaWR9L3Nsb3RzP2ZpbHRlcltzdGFydHNdPSR7ZGF0YS5zdGFydERhdGV9JmZpbHRlcltlbmRzXT0ke2RhdGEuZW5kRGF0ZX1gKTtcclxuXHR9XHJcblxyXG5cdGJhY2tlbmRSZXF1ZXN0KHJlcXVlc3RUeXBlLCByZXF1ZXN0VGFyZ2V0LCByZXF1ZXN0RGF0YT8pIHtcclxuXHRcdGNvbnNvbGUubG9nKCd0YXJnZXQ6JywgZW52aXJvbm1lbnQuYXBpVXJsICsgcmVxdWVzdFRhcmdldClcclxuXHRcdGlmKHJlcXVlc3RUeXBlID09PSAnUE9TVCcpIHtcclxuXHRcdFx0cmV0dXJuIGZldGNoKGVudmlyb25tZW50LmFwaVVybCArIHJlcXVlc3RUYXJnZXQsIHtcclxuXHRcdFx0XHRtZXRob2Q6IHJlcXVlc3RUeXBlLFxyXG5cdFx0XHRcdGhlYWRlcnM6IG5ldyBIZWFkZXJzKHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSksXHJcblx0XHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdERhdGEpXHJcblx0XHRcdH0pXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gZmV0Y2goZW52aXJvbm1lbnQuYXBpVXJsICsgcmVxdWVzdFRhcmdldCwge1xyXG5cdFx0XHRcdG1ldGhvZDogcmVxdWVzdFR5cGUsXHJcblx0XHRcdFx0aGVhZGVyczogbmV3IEhlYWRlcnMoeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9KVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuIl19