"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PitchService = (function () {
    function PitchService() {
        this.pitches = new Array();
    }
    PitchService.prototype.setPitches = function (pitches) {
        this.pitches = pitches;
    };
    PitchService.prototype.getPitches = function () {
        return this.pitches;
    };
    PitchService.prototype.getPitch = function (id) {
        return this.pitches.filter(function (pitch) { return pitch.id === id; })[0];
    };
    PitchService = __decorate([
        core_1.Injectable()
    ], PitchService);
    return PitchService;
}());
exports.PitchService = PitchService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl0Y2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBpdGNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFLM0M7SUFEQTtRQUVZLFlBQU8sR0FBRyxJQUFJLEtBQUssRUFBUyxDQUFDO0lBYXpDLENBQUM7SUFYRyxpQ0FBVSxHQUFWLFVBQVcsT0FBTztRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRCxpQ0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVELCtCQUFRLEdBQVIsVUFBUyxFQUFVO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQWJRLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTtPQUNBLFlBQVksQ0FjeEI7SUFBRCxtQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFBpdGNoIH0gZnJvbSBcIi4vcGl0Y2hcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBpdGNoU2VydmljZSB7XG4gICAgcHJpdmF0ZSBwaXRjaGVzID0gbmV3IEFycmF5PFBpdGNoPigpO1xuXG4gICAgc2V0UGl0Y2hlcyhwaXRjaGVzKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGl0Y2hlcyA9IHBpdGNoZXM7XG4gICAgfVxuXG4gICAgZ2V0UGl0Y2hlcygpOiBQaXRjaFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGl0Y2hlcztcbiAgICB9XG5cbiAgICBnZXRQaXRjaChpZDogc3RyaW5nKTogUGl0Y2gge1xuICAgICAgICByZXR1cm4gdGhpcy5waXRjaGVzLmZpbHRlcihwaXRjaCA9PiBwaXRjaC5pZCA9PT0gaWQpWzBdO1xuICAgIH1cbn1cbiJdfQ==