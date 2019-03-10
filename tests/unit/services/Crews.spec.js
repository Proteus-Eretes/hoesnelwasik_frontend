import {Crews} from "../../../src/services/Crews";

describe("Crews", () => {
    let fetchSpy;
    let crews;

    beforeEach(() => {
        fetchSpy = jest.fn();
        crews = new Crews('url', 'ww', 0, 'a', 'uitslagen');
        crews._fetch = fetchSpy;
    });

    it("The crews uses correct url", async () => {
        fetchSpy.mockReturnValue({
            error: true
        });
        await crews.getCrews();
        expect(fetchSpy).toHaveBeenCalled();
        expect(fetchSpy.mock.calls[0][0]).toBe('/wd/ww/0/a/uitslagen');
    });

    it('Correctly reset data', () => {
        crews._clubs = [];
        crews._fields = [];
        crews.crews = [];
        crews.setField(5);
        expect(crews._clubs).toEqual([]);
        expect(crews._fields).toEqual([]);
        expect(crews.crews).toBe(null);
        crews.crews = [];
        crews.setYear(5);
        expect(crews._clubs).toBe(null);
        expect(crews._fields).toBe(null);
        expect(crews.crews).toBe(null);
    });
});
