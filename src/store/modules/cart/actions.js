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

export function removeFromCartRequest(id) {
    return {
        type: '@cart/REMOVE_PRODUCT_REQUEST',
        payload: {
            id,
        },
    };
}

export function removeFromCartSuccess(id) {
    return {
        type: '@cart/REMOVE_PRODUCT_SUCCESS',
        payload: {
            id,
        },
    };
}

export function removeFromCartFailure() {
    return {
        type: '@cart/REMOVE_PRODUCT_FAILURE',
    };
}
