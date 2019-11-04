import { Service } from '../../../src/Services/Service';

describe('Service', () => {
    it('The regatta over fetchs correctly', async () => {
        const fetchSpy = jest.fn();
        fetchSpy.mockReturnValue({ regattas: [] });
        const service = new Service('url');
        service._fetch = fetchSpy;
        await service.getRegattas();
        expect(fetchSpy).toHaveBeenCalled();
        expect(fetchSpy.mock.calls[0][0]).toBe('/');
    });
});
