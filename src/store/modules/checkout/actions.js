export function submitStep(data) {
    return {
        type: '@checkout/SUBMIT_STEP',
        payload: {
            ...data,
        },
    };
}
