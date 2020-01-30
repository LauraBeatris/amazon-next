import { produce } from 'immer';

export const INITIAL_STATE = {};

export default function checkout(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            default:
                return state;
        }
    });
}
