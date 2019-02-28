export class ResultStatus {
    /**
     * @param {int} status
     * @return {boolean}
     */
    static isValid(status) {
        return status === 0;
    }

    /**
     * @param {int} status
     * @return bool
     */
    static isExcluded(status) {
        return (status & 1) === 1;
    }

    /**
     * @param {int} status
     * @return bool
     */
    static isDisqualified(status) {
        return (status & 2) === 2;
    }

    /**
     * @param {int} status
     * @return bool
     */
    static isOutsideCompetition(status) {
        return (status & 4) === 4;
    }

    /**
     * @param {int} status
     * @return bool
     */
    static isDidNotStart(status) {
        return (status & 8) === 8;
    }

    /**
     * @param {int} status
     * @return bool
     */
    static isDidNotFinish(status) {
        return (status & 16) === 16;
    }

    /**
     * @param {int} status
     * @return {string}
     */
    static getStatus(status) {
        if (ResultStatus.isExcluded(status)) return 'Ex';
        if (ResultStatus.isDisqualified(status)) return 'Dq';
        if (ResultStatus.isOutsideCompetition(status)) return 'Ooc';
        if (ResultStatus.isDidNotStart(status)) return 'DNS';
        if (ResultStatus.isDidNotFinish(status)) return 'DNF';
        return '';
    }
}