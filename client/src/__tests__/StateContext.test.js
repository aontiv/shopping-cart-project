import Helpers from '../js/Helpers';

describe("'StateContext' Component Tests", () => {
    test("'objectAndIndex' returns object and index from an array", () => {
        const id = 1;
        const test = [ { id: 1 }, { id: 2 } ];
        const result = [{ id: 1 }, 0];

        expect(Helpers.objectAndIndex(test, id)).toEqual(result);
    });
});
