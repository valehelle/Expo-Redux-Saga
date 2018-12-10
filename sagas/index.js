import { all } from 'redux-saga/effects';

import { userSaga } from './user'

function *watchAll() {
    yield all([...userSaga]);
}


export default watchAll;