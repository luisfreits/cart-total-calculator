"use strict";

function calculateSubtotal(items) {
    let subtotal = 0;
    for (let i = 0; i < items.length; i++) {
        subtotal += items[i].price * items[i].quantity;
    }
    return subtotal;
}

function calculateDiscount(subtotal, discountPercent) {
    return subtotal * (discountPercent / 100);
}

function calculateTax(amountAfterDiscount, taxPercent) {
    return amountAfterDiscount * (taxPercent / 100);
}

function createCartSummary(items, discountPercent, taxPercent) {
    const subtotal = calculateSubtotal(items);
    const discount = calculateDiscount(subtotal, discountPercent);
    const tax = calculateTax(subtotal - discount, taxPercent);
    const total = subtotal - discount + tax;
    return {
        subtotal,
        discount,
        tax,
        total,
    };
}