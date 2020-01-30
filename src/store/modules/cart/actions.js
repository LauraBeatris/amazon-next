export function addToCartRequest(product) {
    return {
        type: '@cart/ADD_PRODUCT_REQUEST',
        payload: {
            product,
        },
    };
}

export function addToCartSuccess() {
    return {
        type: '@cart/ADD_PRODUCT_SUCCESS',
    };
}

export function addToCartFailure() {
    return {
        type: '@cart/ADD_PRODUCT_FAILURE',
    };
}
