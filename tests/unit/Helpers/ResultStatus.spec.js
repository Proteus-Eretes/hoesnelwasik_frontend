import { ResultStatus } from '../../../src/Helpers/ResultStatus';

describe('Results()', () => {
    it('Should find excluded teams', () => {
        expect(ResultStatus.isExcluded(1)).toBe(true);
        expect(ResultStatus.isExcluded(2)).toBe(false);
        expect(ResultStatus.isExcluded(3)).toBe(true);
        expect(ResultStatus.isExcluded(4)).toBe(false);
    });

    it('Should find disqualified teams', () => {
        expect(ResultStatus.isDisqualified(1)).toBe(false);
        expect(ResultStatus.isDisqualified(2)).toBe(true);
        expect(ResultStatus.isDisqualified(3)).toBe(true);
        expect(ResultStatus.isDisqualified(4)).toBe(false);
        expect(ResultStatus.isDisqualified(7)).toBe(true);
    });

    it('Should find outside competition teams', () => {
        expect(ResultStatus.isOutsideCompetition(1)).toBe(false);
        expect(ResultStatus.isOutsideCompetition(2)).toBe(false);
        expect(ResultStatus.isOutsideCompetition(3)).toBe(false);
        expect(ResultStatus.isOutsideCompetition(4)).toBe(true);
        expect(ResultStatus.isOutsideCompetition(5)).toBe(true);
    });

    it('Should find did not start teams', () => {
        expect(ResultStatus.isDidNotStart(8)).toBe(true);
        expect(ResultStatus.isDidNotStart(6)).toBe(false);
        expect(ResultStatus.isDidNotStart(9)).toBe(true);
        expect(ResultStatus.isDidNotStart(32)).toBe(false);
    });

    it('Should find did not finish teams', () => {
        expect(ResultStatus.isDidNotFinish(16)).toBe(true);
        expect(ResultStatus.isDidNotFinish(32)).toBe(false);
        expect(ResultStatus.isDidNotFinish(24)).toBe(true);
        expect(ResultStatus.isDidNotFinish(4)).toBe(false);
    });

    it('Should be able to get the status', () => {
        expect(ResultStatus.getStatus(1)).toBe('Ex');
        expect(ResultStatus.getStatus(2)).toBe('Dq');
        expect(ResultStatus.getStatus(3)).toBe('Ex');
        expect(ResultStatus.getStatus(4)).toBe('Ooc');
        expect(ResultStatus.getStatus(5)).toBe('Ex');
        expect(ResultStatus.getStatus(6)).toBe('Dq');
        expect(ResultStatus.getStatus(7)).toBe('Ex');
        expect(ResultStatus.getStatus(8)).toBe('DNS');
        expect(ResultStatus.getStatus(9)).toBe('Ex');
        expect(ResultStatus.getStatus(16)).toBe('DNF');
        expect(ResultStatus.getStatus(17)).toBe('Ex');
    });
});
