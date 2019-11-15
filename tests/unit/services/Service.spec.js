import { Service } from '../../../src/Services/Service';

describe('Service', () => {
    it('The regatta over fetchs correctly', async () => {
        const fetchSpy = jest.fn();
        fetchSpy.mockReturnValue({ editions: [] });
        const service = new Service('url');
        service._fetch = fetchSpy;
        await service.getRegattas();
        expect(fetchSpy).toHaveBeenCalled();
        expect(fetchSpy.mock.calls[0][0]).toBe('/');
    });

    it('It returns all the regattas with caching', async () => {
        const fetchSpy = jest.fn();
        const service = new Service('url');
        service._fetch = fetchSpy;
        service.regattas = [
            {
                shortname: 'head',
                jaar: 2017
            },
            {
                shortname: 'head',
                jaar: 2018
            }
        ];
        const regattas = await service.getRegattas();
        expect(regattas).toEqual([
            {
                shortname: 'head',
                jaar: 2017
            },
            {
                shortname: 'head',
                jaar: 2018
            }
        ]);
        expect(fetchSpy).not.toHaveBeenCalled();
    });
});
