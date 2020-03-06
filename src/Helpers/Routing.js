const pushLink = (router, target, arg) =>
    router.push({ path: toField(router.currentRoute.params, target, arg) });

export const openPage = (router, field) => {
    if (router.currentRoute.fullPath.includes('loting')) {
        pushLink(router, 'loting', field);
    } else {
        pushLink(router, 'uitslagen', field);
    }
};

export const openSearch = (router, search) =>
    pushLink(router, 'search', search);

export const openClub = (router, club) => pushLink(router, 'club', club);

export const toField = ({ iframe, match, year }, type, field) =>
    `/${iframe ? 'iframe/' : ''}${match}/${year}/${type}/${field}`;

export const openRegatta = (
    router,
    { iframe, match, year },
    type = 'uitslagen',
    hash = 'blocks'
) => {
    router.push({
        path: `/${iframe ? 'iframe/' : ''}${match}/${year}/${type}`,
        hash
    });
};

export const openHome = ({ iframe, match, year }) => {
    if (iframe) {
        return `/iframe/${match}/${year}/`;
    }
    return `/`;
};
