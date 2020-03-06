import { openRegatta, openPage } from '../../Helpers/Routing';

export const highlightLink = (fullPath, linkText) =>
    fullPath.includes(linkText);

export function switchType({ iframe, match, year}, type) {
    return `/${iframe ? 'iframe/' : ''}${match}/${year}/${type}`;
}   

export function openNextRegatta($router, regattas, { iframe, match, year }) {
    const years = regattas
        .filter(regatta => regatta.jaar > year)
        .map(regatta => +regatta.jaar)
        .sort();
    openRegatta($router, { iframe, match, year: years[0] });
}

export function openPrevRegatta($router, regattas, { iframe, match, year }) {
    const years = regattas
        .filter(regatta => regatta.jaar < year)
        .map(regatta => +regatta.jaar)
        .sort();
    openRegatta($router, { iframe, match, year: years[years.length - 1] });
}

export function rowClicked(record) {
    if (this.$router.currentRoute.params.target === 'loting'){
        openPage(this.$router, record.field_id);
    } else {
        openPage(this.$router, record.fieldnameshort);
    }
}
