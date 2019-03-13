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
