import { call, put, takeLatest } from "redux-saga/effects";

import { updateSurvivorStatus, deleteSurvivorDatabase, addSurvivorDatabase } from './functions';

import { notification } from 'antd';

function* updateSurvivor(action) {
    try {
        yield call(updateSurvivorStatus, action.payload);
        yield put({
            type: "UPDATE_SURVIVOR_STORE",
            payload: action.payload
        });
        notification.success({ message: 'Success', description: 'Your survivor was updated in the database!' });
    } catch (error) {
        notification.error({ message: 'Error', description: 'There was an error.' });
    }
}

function* deleteSurvivor(action) {
    try {
        yield call(deleteSurvivorDatabase, { id: action.payload });
        yield put({
            type: "DELETE_SURVIVOR_STORE",
            payload: action.payload
        });
        notification.success({ message: 'Success', description: 'Your survivor was successfuly deleted from the database!' });
    } catch (error) {
        notification.error({ message: 'Error', description: 'There was an error.' });
    }
}

function* addSurvivor(action) {
    try {
        yield call(addSurvivorDatabase, { values: action.payload });
        yield put({
            type: "ADD_SURVIVOR_STORE",
            payload: action.payload
        });
        notification.success({ message: 'Success', description: 'Your survivor was added to the database!' });
    } catch (error) {
        notification.error({ message: 'Error', description: 'There was an error.' });
    }
}

function* mySaga() {
    yield takeLatest("UPDATE_SURVIVOR", updateSurvivor);
    yield takeLatest("DELETE_SURVIVOR", deleteSurvivor);
    yield takeLatest("ADD_SURVIVOR", addSurvivor);
}

export default mySaga;
