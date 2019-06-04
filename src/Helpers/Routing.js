export const openPage = (router, field) => {
    let target;
    if (router.currentRoute.fullPath.includes('loting')) {
        target = 'loting';
    } else {
        target = 'uitslagen';
    }

    router.push({path: toField(router.currentRoute.params, target, field)});
};

export const toField = (routerParams, type, field) =>
    `/${routerParams.iframe ? 'iframe/' : ''}${routerParams.match}/${
        routerParams.year
    }/${type}/${field}`;
