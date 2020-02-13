export function addToCartRequest(product) {
    return {
        type: '@cart/ADD_PRODUCT_REQUEST',
        payload: {
            product,
        },
    };
}

export function addToCartSuccess(product) {
    return {
        type: '@cart/ADD_PRODUCT_SUCCESS',
        payload: {
            product,
        },
    };
}

export function addToCartFailure() {
    return {
        type: '@cart/ADD_PRODUCT_FAILURE',
    };
}
