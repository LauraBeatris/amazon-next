import { all, put, takeLatest } from 'redux-saga/effects';
import Router from 'next/router';
import { submitStepFailure, submitStepSuccess } from './actions';

export function* submitStep({ payload }) {
    try {
        const { data, nextStep } = payload;
        yield put(submitStepSuccess(data, nextStep));
        return Router.push(`/checkout/${nextStep}`);
    } catch (err) {
        return yield put(submitStepFailure());
    }
}

export default all([takeLatest('@checkout/SUBMIT_STEP_REQUEST', submitStep)]);
