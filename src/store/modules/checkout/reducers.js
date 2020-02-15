import { produce } from 'immer';

export const INITIAL_STATE = {
    costumer: {
        fullname: '',
        age: '',
        birth: '',
        email: '',
    },
    address: {
        street: '',
        state: '',
        district: '',
        zipcode: '',
    },
    payment: {
        card: '',
        method: '',
        number: '',
    },
};

export default function checkout(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@checkout/SUBMIT_STEP_SUCCESS': {
                const { payload } = action;
                draft = { ...draft, ...payload.data };
                return draft;
            }
            default:
                return state;
        }
    });
}
