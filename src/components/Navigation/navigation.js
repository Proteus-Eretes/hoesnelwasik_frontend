import {openPage} from '../../Helpers/Routing';

export const highlightLink = (fullPath, linkText) =>
    fullPath.includes(linkText);

export function switchType({iframe, match, year}, type) {
    return `/${iframe ? 'iframe/' : ''}${match}/${year}/${type}`;
}


export function rowClicked($router, record) {
    if ($router.currentRoute.params.target === 'loting') {
        openPage($router, record.field_id);
    } else {
        openPage($router, record.fieldnameshort);
    }
}
