import { all, put, takeLatest } from 'redux-saga/effects';
import Router from 'next/router';
import {
    submitStepRequest,
    submitStepFailure,
    submitStepSuccess,
} from './actions';

export function* submitStep({ payload }) {
    try {
        const { data, nextStep } = payload;
        console.log(data, nextStep);
        return yield put(submitStepSuccess(data, nextStep));
    } catch (err) {
        console.log(err);
        return yield put(submitStepFailure());
    }
}

export default all([takeLatest('@checkout/SUBMIT_STEP_REQUEST', submitStep)]);
