export function submitStepRequest(data, nextStep) {
    return {
        type: '@checkout/SUBMIT_STEP_REQUEST',
        payload: {
            data,
            nextStep,
        },
    };
}

export function submitStepSuccess(data, nextStep) {
    return {
        type: '@checkout/SUBMIT_STEP_SUCCESS',
        payload: {
            data,
            nextStep,
        },
    };
}

export function submitStepFailure() {
    return {
        type: '@checkout/SUBMIT_STEP_FAILURE',
    };
}
