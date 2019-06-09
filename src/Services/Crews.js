import {Regatta} from "./Regatta";


export class Crews extends Regatta {
    /**
     * {@inheritDoc}
     * @param {string} baseUrl
     * @param {string} match
     * @param {number} year
     * @param {string} endpoint
     * @param {string} field
     */
    constructor(baseUrl, match, year, field, endpoint) {
        super(baseUrl, match, year);
        this._endpoint = endpoint;
        this._field = field.replace(/\+/g, '%2B');
        this.crews = null;
    }

    async getCrews() {
        if (this.crews === null) {
            const crews = await this._fetch(this._genCrewUrl());
            if (crews.error) {
                return [];
            }
            this.crews = crews.teams;
        }
        return this.crews;
    }

    setField(field) {
        this._field = field;
        this.crews = null;
    }

    setYear(year) {
        super.setYear(year);
        this.crews = null;
    }

    setMatch(match, year) {
        super.setMatch(match, year);
        this.crews = null;
    }

    /**
     * @return {string}
     * @protected
     */
    _genCrewUrl() {
        return this._genRegattaUrl(`${this._field}/${this._endpoint}`);
    }
}
