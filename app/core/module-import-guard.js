"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}
exports.throwIfAlreadyLoaded = throwIfAlreadyLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLWltcG9ydC1ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZHVsZS1pbXBvcnQtZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4QkFBcUMsWUFBaUIsRUFBRSxVQUFrQjtJQUN6RSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUksVUFBVSx5RUFBc0UsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7QUFDRixDQUFDO0FBSkQsb0RBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdGhyb3dJZkFscmVhZHlMb2FkZWQocGFyZW50TW9kdWxlOiBhbnksIG1vZHVsZU5hbWU6IHN0cmluZykge1xyXG5cdGlmIChwYXJlbnRNb2R1bGUpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihgJHttb2R1bGVOYW1lfSBoYXMgYWxyZWFkeSBiZWVuIGxvYWRlZC4gSW1wb3J0IENvcmUgbW9kdWxlcyBpbiB0aGUgQXBwTW9kdWxlIG9ubHkuYCk7XHJcblx0fVxyXG59Il19