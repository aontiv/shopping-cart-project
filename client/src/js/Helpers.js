// @flow

const Helpers = () => {
    const subtotal = (items: Array<any>): number => {
        const total = items.reduce((accumulator, current) => {
            const value = current.price * current.qCart;
            return accumulator + value;
        }, 0);
        return total;
    };

    const salesTax = (items: Array<any>, rate: number): number => {
        const subTotal = subtotal(items);
        const value = subTotal * rate;
        return value;
    };

    const total = (items: Array<any>, rate: number, shipping: number): number => {
        const subTotal = subtotal(items);
        const tax = salesTax(items, rate);
        return items.length > 0 ? subTotal + tax + shipping : 0;
    };

    const cartItem = (items: Array<any>, id: number): {} | void => {
        const item = items.find(item => item._id === id);
        return item;
    };

    return {
        cartItem,
        salesTax,
        subtotal,
        total
    };
}

export default Helpers();
