import Helpers from '../js/Helpers';

describe("'Helpers' Tests", () => {
    test("subtotal", () => {
        const   test = [ { price: 19.99, qCart: 5 }, { price: 32.99, qCart: 10 } ],
                total1 = test[0].price * test[0].qCart,
                total2 = test[1].price * test[1].qCart,
                result = total1 + total2;

        expect(Helpers.subtotal(test)).toEqual(result);
    });

    test("sales tax", () => {
        const   test = [ { price: 19.99, qCart: 5 }, { price: 32.99, qCart: 10 } ],
                rate = 0.0757,
                result = Helpers.subtotal(test) * rate;

        expect(Helpers.salesTax(test, rate)).toEqual(result);
    });

    test("total", () => {
        const   test = [ { price: 19.99, qCart: 5 }, { price: 32.99, qCart: 10 } ],
                rate = 0.0757,
                shipping = 10.99,
                result = Helpers.subtotal(test) + Helpers.salesTax(test, rate) + shipping;

        expect(Helpers.total(test, rate, shipping)).toEqual(result);
    });

    test("'cartItem' -> cart item or undefined", () => {
        const   id = 1,
                test = [ { id: 1 }, { id: 2 } ],
                result = { id: 1 };
        
        expect(Helpers.cartItem(test, id)).toEqual(result);
        expect(Helpers.cartItem([], id)).toBeUndefined();
    });
});
