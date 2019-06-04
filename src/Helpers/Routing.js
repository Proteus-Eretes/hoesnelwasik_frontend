const pushLink = (router, target, arg) => router.push({path: toField(router.currentRoute.params, target, arg)});

export const openPage = (router, field) => {
    if (router.currentRoute.fullPath.includes('loting')) {
        pushLink(router, 'loting', field);
    } else {
        pushLink(router, 'uitslagen', field);
    }
};

export const openSearch = (router, search) => pushLink(router, 'search', search);

export const openClub = (router, club) => pushLink(router, 'club', club);

export const toField = (routerParams, type, field) =>
    `/${routerParams.iframe ? 'iframe/' : ''}${routerParams.match}/${
        routerParams.year
    }/${type}/${field}`;
