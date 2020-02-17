import { produce } from 'immer';

export const INITIAL_STATE = {
    email: '',
    password: '',
    logged: '',
    likedProducts: [],
};

export default function user(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@user/LIKE_PRODUCT_SUCCESS': {
                const { payload } = action;

                const productExists = state.likedProducts.find(
                    likedProduct => payload.product.id === likedProduct.id
                );
                if (productExists) {
                    draft.likedProducts = state.likedProducts.filter(
                        product => product.id !== payload.product.id
                    );
                } else {
                    draft.likedProducts.push(payload.product);
                }
                return draft;
            }
            default:
                return state;
        }
    });
}
