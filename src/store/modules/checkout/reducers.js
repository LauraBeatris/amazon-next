import { produce } from 'immer';

export const INITIAL_STATE = {
    costumer: {
        fullname: '',
        age: '',
        birth: '',
        email: '',
    },
};

export default function checkout(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            default:
                return state;
        }
    });
}
