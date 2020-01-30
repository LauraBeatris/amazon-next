import { produce } from 'immer';

export const INITIAL_STATE = [
    {
        error: false,
        products: [],
        totalPrice: 0,
    },
];

export default function cart(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            default:
                return state;
        }
    });
}
