"use strict";
var voter_service_1 = require("./voter.service");
var Observable_1 = require("rxjs/Observable");
describe('VoterService', function () {
    var voterService;
    var mockHttp;
    beforeEach(function () {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new voter_service_1.VoterService(mockHttp);
    });
    describe('deleteVoter', function () {
        it('should remove the voter from the list of voters', function () {
            var session = { id: 6, voters: ['joe', 'john'] };
            mockHttp.delete.and.returnValue(Observable_1.Observable.of(false));
            voterService.deleteVoter(3, session, 'joe');
            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('john');
        });
        it('should call http delete with the right url', function () {
            var session = { id: 6, voters: ['joe', 'john'] };
            mockHttp.delete.and.returnValue(Observable_1.Observable.of(false));
            voterService.deleteVoter(3, session, 'joe');
            expect(mockHttp.delete).toHaveBeenCalledWith("/api/events/3/sessions/6/voters/joe");
            expect(mockHttp.delete).toHaveBeenCalledTimes(1);
        });
    });
    describe('addVoter', function () {
        it('should call http post with the right url', function () {
            var session = { id: 6, voters: ['john'] };
            mockHttp.post.and.returnValue(Observable_1.Observable.of(false));
            voterService.addVoter(3, session, 'joe');
            expect(mockHttp.post).toHaveBeenCalledWith("/api/events/3/sessions/6/voters/joe", '{}', jasmine.anything());
            expect(mockHttp.post).toHaveBeenCalledTimes(1);
        });
    });
});
//# sourceMappingURL=voter.service.spec.js.map