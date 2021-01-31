import { call, put, takeLatest } from "redux-saga/effects";

import { updateSurvivorStatus, deleteSurvivorDatabase, addSurvivorDatabase } from './functions';

import { notification } from 'antd';

function* updateSurvivor(action) {
    try {
        yield put({ type: "SET_LOADING" })
        yield call(updateSurvivorStatus, action.payload);
        yield put({
            type: "UPDATE_SURVIVOR_STORE",
            payload: action.payload
        });
        yield put({ type: "SET_LOADING" })
        notification.success({ message: 'Success', description: 'Your survivor was updated in the database!' });
    } catch (error) {
        notification.error({ message: 'Error', description: 'There was an error.' });
        yield put({ type: "SET_LOADING" })
    }
}

function* deleteSurvivor(action) {
    try {
        yield put({ type: "SET_LOADING" })
        yield call(deleteSurvivorDatabase, { id: action.payload });
        yield put({
            type: "DELETE_SURVIVOR_STORE",
            payload: action.payload
        });
        yield put({ type: "SET_LOADING" })
        notification.success({ message: 'Success', description: 'Your survivor was successfuly deleted from the database!' });
    } catch (error) {
        yield put({ type: "SET_LOADING" })
        notification.error({ message: 'Error', description: 'There was an error.' });
    }
}

function* addSurvivor(action) {
    try {
        yield put({ type: "SET_LOADING" })
        yield call(addSurvivorDatabase, { values: action.payload });
        yield put({
            type: "ADD_SURVIVOR_STORE",
            payload: action.payload
        });
        yield put({ type: "SET_LOADING" })
        notification.success({ message: 'Success', description: 'Your survivor was added to the database!' });
    } catch (error) {
        yield put({ type: "SET_LOADING" })
        notification.error({ message: 'Error', description: 'There was an error.' });
    }
}

function* mySaga() {
    yield takeLatest("UPDATE_SURVIVOR", updateSurvivor);
    yield takeLatest("DELETE_SURVIVOR", deleteSurvivor);
    yield takeLatest("ADD_SURVIVOR", addSurvivor);
}

export default mySaga;
