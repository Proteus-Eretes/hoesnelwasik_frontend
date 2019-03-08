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
        this._fields = null;
    }

    setMatch(match, year) {
        this._match = match;
        this._year = year;
        this._clubs = null;
        this._fields = null;
    }

    async getBlocks() {
        const fields = JSON.parse(JSON.stringify(await this._getFields()));
        const blockList = fields.reduce((blocks, field) => {
            if (!blocks[field.blockid]) {
                blocks[field.blockid] = [];
            }
            blocks[field.blockid].push(field);
            return blocks;
        }, []);

        const blocks = [];

        for (let block in blockList) {
            blocks.push(blockList[block]);
        }
        return blocks;
    }

    async getFields() {
        const fields = JSON.parse(JSON.stringify(await this._getFields()));
        return fields.reduce((fieldOrdered, field) => {
            if (!fieldOrdered[field.numberofrowers]) {
                fieldOrdered[field.numberofrowers] = [];
            }
            fieldOrdered[field.numberofrowers].push(field);
            return fieldOrdered;
        }, []);
    }

    async _getFields() {
        if (this._fields === null) {
            const fields = await this._fetch(this._genRegattaUrl('velden/'));

            if (fields.error) {
                return [];
            }
            this._fields = fields.fields;
        }

        return this._fields;
    }

    async getClubs() {
        if (this._clubs === null) {
            const clubs = await this._fetch(this._genRegattaUrl('clublist/'));
            if (clubs.error) {
                return [];
            }
            this._clubs = clubs.clubs;
        }

        return this._clubs;
    }

    async _fetch(url) {
        const data = await super._fetch(url);
        this.match = !data.error;
        return data;
    }

    /**
     * @param {string} url
     * @return {string}
     * @protected
     */
    _genRegattaUrl(url) {
        return `/wd/${this._match}/${this._year}/${url}`;
    }

    async getEditions(regattaName) {
        const regattas = await this.getRegattas();

        return regattas.filter(regatta => {
            return regatta.shortname === regattaName;
        });
    }

    async getEdition() {
        const regattas = await this.getEditions(this._match);

        if (this._year > 0) {
            return regattas.filter(regatta => {
                return regatta.jaar === this._year;
            })[0];
        }

        return regattas.reduce((lastestRegatta, regatta) => {
            if (lastestRegatta.jaar < regatta.jaar) {
                return regatta;
            }
            return lastestRegatta;
        })
    }
}
