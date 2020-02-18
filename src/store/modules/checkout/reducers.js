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
            case '@checkout/SUBMIT_CHECKOUT_VALUE': {
                const { payload } = action;
                console.log(payload);
                draft = {
                    ...state,
                    [Object.keys(payload)[0]]: {
                        ...state[Object.keys(payload)],
                        ...payload[Object.keys(payload)],
                    },
                };
                console.log(draft);
                return draft;
            }
            default:
                return state;
        }
    });
}
