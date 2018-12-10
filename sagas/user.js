import { UserProfileTypes } from '../redux/user'
import { takeLatest, call, select } from 'redux-saga/effects';
import { Alert } from 'react-native'
import { testRequest } from '../api'
import { getText } from '../redux/user'

export function* helloWorld(action) {
    Alert.alert(
        'Saga',
        'This alert was created using Saga that listen to the click action!',
        [
          {text: 'WOW', onPress: () => console.log('Ask me later pressed')},
          {text: 'SUCH SMOOTH', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'MUCH EASY', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
    )

    const response = yield call(testRequest)
    if(response.ok){
        const text = yield select(getText);
        console.log(text, 'dfdfdf')
    }else{
        console.log("not okay")
    }
}
export const userSaga = [
    takeLatest(UserProfileTypes.HELLO_WORLD, helloWorld)
]
