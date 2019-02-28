import {Service} from "./Service";


export class Regatta extends Service {

    /**
     * {@inheritDoc}
     * @param {string} baseUrl
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

    async getBlocks() {
        const fields = JSON.parse(JSON.stringify(await this._getFields()));
        return fields.reduce((blocks, field) => {
            if (!blocks[field.blockid]) {
                blocks[field.blockid] = [];
            }
            blocks[field.blockid][field.slotid] = field;
            return blocks;
        }, []);
    }

    async getFields() {
        const fields = JSON.parse(JSON.stringify(await this._getFields()));
        return fields.reduce((fieldOrdered, field) => {
            fieldOrdered[field.numberofrowers] = field;
            return fieldOrdered;
        }, []);
    }

    async _getFields() {
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