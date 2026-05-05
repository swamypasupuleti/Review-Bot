import { calculateTotal } from './cart.js';

export function checkout(price) {
    const tax = 0.1;
    return calculateTotal(price, tax);
}