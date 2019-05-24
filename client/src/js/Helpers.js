// @flow

const Helpers = () => {
    const subtotal = (items: Array<any>): number => {
        const value = items.reduce((accumulator, current) => {
            const value = current.price * current.qCart;
            return accumulator + value;
        }, 0);
        return value;
    };

    const salesTax = (items: Array<any>, rate: number): number => {
        const subTotal = subtotal(items);
        const value = subTotal * rate;
        return value;
    };

    const total = (items: Array<any>, rate: number, shipping: number): number => {
        const subTotal = subtotal(items);
        const tax = salesTax(items, rate);
        return subTotal + tax + shipping;
    };

    return {
        salesTax,
        subtotal,
        total
    };
}

export default Helpers();
