import { produce } from 'immer';

export const INITIAL_STATE = {
    error: false,
    products: [],
    totalPrice: 0,
};

export default function cart(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@cart/ADD_PRODUCT_SUCCESS': {
                const { payload } = action;
                draft.products.push(payload.product);
                return draft;
            }

            default:
                return state;
        }
    });
}
