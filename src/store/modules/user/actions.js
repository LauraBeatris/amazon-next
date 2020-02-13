export function likeProductRequest(product) {
    return {
        type: '@user/LIKE_PRODUCT_REQUEST',
        payload: {
            product,
        },
    };
}

export function likeProductSuccess(product) {
    return {
        type: '@user/LIKE_PRODUCT_SUCCESS',
        payload: {
            product,
        },
    };
}

export function likeProductFailure() {
    return {
        type: '@user/LIKE_PRODUCT_FAILURE',
    };
}
