import {Service} from "../../../src/services/Service";

describe("Service", () => {
    it("The regatta over fetchs correctly", () => {
        const fetchSpy = jest.fn();
        const service = new Service('url');
        service._fetch = fetchSpy;
        service.getRegattas();
        expect(fetchSpy).toHaveBeenCalled();
        expect(fetchSpy.mock.calls[0][0]).toBe('/');
    });
});
