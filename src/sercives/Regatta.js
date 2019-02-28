import {Service} from "./Service";


export class Regatta extends Service {

    /**
     * {@inheritDoc}
     * @param {string} match
     * @param {number} year
     */
    constructor(baseUrl, match, year) {
        super(baseUrl);
        this._match = match;
        this._year = year ? year : 0;
        this._clubs = null;
        this._fields = null;
        this.match = false;
    }


    setYear(year) {
        this._year = year;
        this._clubs = null;
    }

    setMatch(match, year) {
        this._match = match;
        this._year = year;
        this._clubs = null;
    }


    async _getFeilds() {
        if (this._fields === null) {
            const fields = await this._fetch('velden');

            if (fields.error) {
                return [];
            }
            this._fields = fields.fields;
        }

        return this._fields;
    }

    async getClubs() {
        if (this._clubs === null) {
            const clubs = await this._fetch('clublist');
            if (clubs.error) {
                return [];
            }
            this._clubs = clubs.clubs;
        }

        return this._clubs;
    }

    async _fetch(url) {
        const data = await super._fetch(`/wd/${this._match}/${this._year}/${url}/`);
        this.match = !data.error;
        return data;
    }
}