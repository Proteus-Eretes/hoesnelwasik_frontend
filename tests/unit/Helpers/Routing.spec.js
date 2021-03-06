import {
    openClub,
    openHome,
    openPage,
    openRegatta,
    openSearch,
    toField
} from '../../../src/Helpers/Routing';

describe('Routing::toField', () => {
    it('Url does not go to iframe', () => {
        expect(
            toField(
                {
                    iframe: false,
                    match: 'asd',
                    year: '2020'
                },
                'uitslagen',
                'HE 1x'
            )
        ).toBe('/asd/2020/uitslagen/HE 1x');
    });
    it('Url goes to iframe', () => {
        expect(
            toField(
                {
                    iframe: true,
                    match: 'asd',
                    year: '2020'
                },
                'uitslagen',
                'HE 1x'
            )
        ).toBe('/iframe/asd/2020/uitslagen/HE 1x');
    });
    it('Url correctly handles optional fields', () => {
        expect(
            toField(
                {
                    iframe: false,
                    match: 'asd',
                    year: '2020',
                    param: 'aa'
                },
                'uitslagen',
                'HE 1x'
            )
        ).toBe('/asd/2020/uitslagen/HE 1x');
    });
});

describe('Routing::openPage', () => {
    let pushSpy;
    let router = {
        currentRoute: {
            params: {},
            fullPath: ''
        }
    };

    beforeEach(() => {
        pushSpy = jest.fn();
        router.push = pushSpy;
    });

    it('Stay on uitslagen', () => {
        router.currentRoute.params = {
            match: 'ww',
            year: '2920',
            iframe: true
        };
        router.currentRoute.fullPath = '/iframe/ww/2019/uitslagen#blocks';

        openPage(router, 'HE 1x');

        expect(pushSpy).toHaveBeenCalled();
        expect(pushSpy.mock.calls[0][0]).toEqual({
            path: '/iframe/ww/2920/uitslagen/HE 1x'
        });
    });
    it('Stay on loting', () => {
        router.currentRoute.params = {
            match: 'ww',
            year: '2920',
            iframe: true
        };
        router.currentRoute.fullPath = '/iframe/ww/2019/loting#blocks';

        openPage(router, 'HE 1x');

        expect(pushSpy).toHaveBeenCalled();
        expect(pushSpy.mock.calls[0][0]).toEqual({
            path: '/iframe/ww/2920/loting/HE 1x'
        });
    });
    it('Does go to uitslagen', () => {
        router.currentRoute.params = {
            match: 'ww',
            year: '2920',
            iframe: true
        };
        router.currentRoute.fullPath = '/iframe/ww/2019/#blocks';

        openPage(router, 'HE 1x');

        expect(pushSpy).toHaveBeenCalled();
        expect(pushSpy.mock.calls[0][0]).toEqual({
            path: '/iframe/ww/2920/uitslagen/HE 1x'
        });
    });
});

describe('Open search page', () => {
    let pushSpy;
    let router = {
        currentRoute: {
            params: {},
            fullPath: ''
        }
    };

    beforeEach(() => {
        pushSpy = jest.fn();
        router.push = pushSpy;
    });

    it('Goes to search url on iframe', () => {
        router.currentRoute.params = {
            match: 'ww',
            year: '2920',
            iframe: true
        };
        router.currentRoute.fullPath = '/iframe/ww/2019/uitslagen#blocks';

        openSearch(router, 'Aapje');

        expect(pushSpy).toHaveBeenCalled();
        expect(pushSpy.mock.calls[0][0]).toEqual({
            path: '/iframe/ww/2920/search/Aapje'
        });
    });

    it('Goes to search url', () => {
        router.currentRoute.params = {
            match: 'ww',
            year: '2920',
            iframe: false
        };
        router.currentRoute.fullPath = '/ww/2019/uitslagen#blocks';

        openSearch(router, 'Aapje');

        expect(pushSpy).toHaveBeenCalled();
        expect(pushSpy.mock.calls[0][0]).toEqual({
            path: '/ww/2920/search/Aapje'
        });
    });
});

describe('Open club page', () => {
    let pushSpy;
    let router = {
        currentRoute: {
            params: {},
            fullPath: ''
        }
    };

    beforeEach(() => {
        pushSpy = jest.fn();
        router.push = pushSpy;
    });

    it('Goes to search url on iframe', () => {
        router.currentRoute.params = {
            match: 'ww',
            year: '2920',
            iframe: true
        };
        router.currentRoute.fullPath = '/iframe/ww/2019/uitslagen#blocks';

        openClub(router, 'Pro');

        expect(pushSpy).toHaveBeenCalled();
        expect(pushSpy.mock.calls[0][0]).toEqual({
            path: '/iframe/ww/2920/club/Pro'
        });
    });

    it('Goes to search url', () => {
        router.currentRoute.params = {
            match: 'ww',
            year: '2920',
            iframe: false
        };
        router.currentRoute.fullPath = '/ww/2019/uitslagen#blocks';

        openClub(router, 'IRIS');

        expect(pushSpy).toHaveBeenCalled();
        expect(pushSpy.mock.calls[0][0]).toEqual({
            path: '/ww/2920/club/IRIS'
        });
    });

    it('Goes to correct tab url of an match', () => {
        router.currentRoute.params = {
            match: 'ww',
            year: '2920',
            iframe: false
        };

        openRegatta(
            router,
            { match: 'ww', year: '2920', iframe: false },
            'loting',
            'club'
        );
        expect(pushSpy).toHaveBeenCalled();
        expect(pushSpy.mock.calls[0][0]).toEqual({
            path: '/ww/2920/loting',
            hash: 'club'
        });
    });

    it('Goes to default tab block of an match', () => {
        router.currentRoute.params = {
            match: 'ww',
            year: '2920',
            iframe: false
        };

        openRegatta(router, { match: 'ww', year: '2920', iframe: false });
        expect(pushSpy).toHaveBeenCalled();
        expect(pushSpy.mock.calls[0][0]).toEqual({
            path: '/ww/2920/uitslagen',
            hash: 'blocks'
        });
    });
});
describe('Routing::openHome', () => {
    let router = {
        currentRoute: {
            params: {},
            fullPath: ''
        }
    };

    it('Url does not go to iframe', () => {
        router.currentRoute.params = {
            match: 'ww',
            year: '2920',
            iframe: false
        };
        expect(openHome(router.currentRoute.params)).toBe('/');
    });

    it('Url stays on iframe', () => {
        router.currentRoute.params = {
            match: 'ww',
            year: '2920',
            iframe: true
        };
        expect(openHome(router.currentRoute.params)).toBe('/iframe/ww/2920/');
    });
});
