import {openRegatta} from "../../Helpers/Routing";

export const highlightLink = (fullPath, linkText) => fullPath.includes(linkText);

export function switchType(currentRoute, type) {
    const par = currentRoute.params;
    const match = par.match;
    const year = par.year;
    const field = par.field;
    if (
        field !== undefined &&
        !currentRoute.fullPath.includes('club') &&
        !currentRoute.fullPath.includes('search')
    ) {
        return `/iframe/${match}/${year}/${type}/${field}`;
    } else {
        return `/iframe/${match}/${year}/${type}`;
    }
}

export function openNextRegatta($router, regattas, {iframe, match, year}) {
    const years = regattas
        .filter(regatta => regatta.jaar > year)
        .map(regatta => +regatta.jaar)
        .sort();
    openRegatta($router, {iframe, match, year: years[0]});
}

export function openPrevRegatta($router, regattas, {iframe, match, year}) {
    const years = regattas
        .filter(regatta => regatta.jaar < year)
        .map(regatta => +regatta.jaar)
        .sort();
    openRegatta($router, {iframe, match, year: years[years.length - 1]});
}