import { Service } from './Service';
import moment from 'moment';

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
        this._message = '';
    }

    setYear(year) {
        this._year = year;
        this._clubs = null;
        this._fields = null;
        this._message = '';
    }

    setMatch(match, year) {
        this._match = match;
        this._year = year;
        this._clubs = null;
        this._fields = null;
        this._message = '';
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
            blockList[block].sort((a, b) => {
                return a.startorder - b.startorder;
            });

            blocks.push(blockList[block]);
        }

        blocks.sort((a, b) => {
            const dateA = moment(a[0].daydate, 'YYYY-MM-DD');
            const dateB = moment(b[0].daydate, 'YYYY-MM-DD');
            if (dateA.isAfter(dateB)) {
                return 1;
            } else if (dateA.isBefore(dateB)) {
                return -1;
            } else if (dateA.isSame(dateB)) {
                const timeA = moment(a[0].starttime, 'HH:mm:ss');
                const timeB = moment(b[0].starttime, 'HH:mm:ss');

                if (timeA.isAfter(timeB)) {
                    return 1;
                } else if (timeA.isBefore(timeB)) {
                    return -1;
                } else {
                    return 0;
                }
            } else {
                return 0;
            }
        });

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
        if ('message' in data) {
            this._message = data.message;
        }
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

    getRegattas(iframe, regattaName) {
        if (iframe) {
            return this.getEditions(regattaName);
        }

        return super.getRegattas();
    }

    async getEdition() {
        const regattas = await this.getEditions(this._match);

        return {
            message: this._message,
            ...this._getRegatta(regattas),
            hasMessage: this._message.length > 0
        };
    }

    _getRegatta(regattas) {
        if (this._year > 0) {
            return regattas.filter(regatta => {
                return regatta.jaar === this._year;
            })[0];
        }

        return regattas.sort((regattaA, regattaB) => regattaB.jaar - regattaA.jaar)[0];
    }
}
