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
        this._field = field;
        this.crews = null;
    }

    async getCrews() {
        if (this.crews === null) {
            const crews = await this._fetch(this.getCrewUrl());
            if (crews.error) {
                return [];
            }
            this.crews = crews.teams;
        }
        return this.crews;
    }

    getCrewUrl() {
        return this.genRegattaUrl(`${this._field}/${this._endpoint}`);
    }
}
