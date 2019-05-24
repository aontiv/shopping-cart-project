import Helpers from '../../js/Helpers';

describe("'Totals' Component Tests", () => {
    test("subtotal", () => {
        const test = [ { price: 19.99, qCart: 5 }, { price: 32.99, qCart: 10 } ];
        const total1 = test[0].price * test[0].qCart;
        const total2 = test[1].price * test[1].qCart;
        const result = total1 + total2;

        expect(Helpers.subtotal(test)).toEqual(result);
    });

    test("sales tax", () => {
        const test = [ { price: 19.99, qCart: 5 }, { price: 32.99, qCart: 10 } ];
        const rate = 0.0757;
        const result = Helpers.subtotal(test) * rate;

        expect(Helpers.salesTax(test, rate)).toEqual(result);
    });

    test("total", () => {
        const test = [ { price: 19.99, qCart: 5 }, { price: 32.99, qCart: 10 } ];
        const rate = 0.0757;
        const shipping = 10.99;
        const result = Helpers.subtotal(test) + Helpers.salesTax(test, rate) + shipping;

        expect(Helpers.total(test, rate, shipping)).toEqual(result);
    });
});
