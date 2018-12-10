# React Native Expo Boilerplate

This repo is a boilerplate to create react native application easily. It is based on React Native Expo. More info about Expo [here](https://facebook.github.io/react-native/docs/getting-started).
The app has been setup to work with [Redux](https://redux.js.org/), [Saga](https://github.com/redux-saga/redux-saga), [ReduxSauce](https://github.com/infinitered/reduxsauce) and [GraphQL](https://graphql.org/)

## Getting Started
1. Run `npm install -g expo-cli`.
2. Clone the repo.
3. Run `yarn install`.
4. Run `npm run start` in the terminal.

## File structure

```
project
└───App.js
└───api
│   │
│   └───index.js
└───assets
│   │
│   └───fonts
│   │
│   └───images
└───components
│   │
│   └───Styled
│   │
│   └───Reusable
└───config
│   │
│   └───application.js
└───constants
│   │
│   └───Colors.js
│   │
│   └───Theme.js
│   │
│   └───Layout.js
└───navigation
└───redux
│   │
│   └───index.js
└───sagas
│   │
│   └───index.js
└───screens
```

### App.js
This is the root of the application. This is where all the connection between redux and saga happen.

### api
This is the folder to create the API call. In the example it is configured to use GraphQL but it can be change to use REST implementation. All implementation of HTTP request should be in this folder.

### assets
This folder is to store static assests like fonts and images.

### components
This folder usually hold 3 things:
1. The component of the screen. In other word this is the UI part of the screen.
2. Styled component where it can be use across the application only.
3. Reusable component where it can be used across the application and **outside** the application. Example are buttons.

### config
This folder hold the config of your applications.

### constant
As the name suggest this folder hold anything that is constant throughout the application.

### navigation
This folder contain the navigation part of your application.
It uses react-navigation. More info about it [here](https://reactnavigation.org/).

### redux
This folder hold your redux.

### saga
This folder hold your saga.

### screen
This folder is the container or the functional component part of your application. Basically this is where you would write your business logic.


## How to use

### Creating a screen.
All screen should be created in the screen folder. The `screen.js` itself should not hold any implementation about the UI. It should hold only the functional part of the screen. A folder with the same name as the screen containing `index.js` and `style.js` should be created in the component folder. The screen component will be the one to have the UI part. 
```
class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };

  handleAlert = () => {
    this.props.onClick()
  }

  render() {
    return (
      <HomeComponent handleAlert = {this.handleAlert} text = {this.props.text}/>
    );
  }

}
```
As you can see from the above, the screen does not create the UI, it only handle the functional part of the screen and pass the responsibilty of creating the UI to the `HomeComponent`.

```
export const HomeComponent = ({ handleAlert, text }) => {
    return(
    <Main>
        <Center>
            <StyledImage
                resizeMode="contain"
                source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/RHB_Logo.svg/1200px-RHB_Logo.svg.png'}}
            />
            <Title>{text}</Title>
            <Button onPress={ handleAlert } title="Press Me"/>
        </Center>
    </Main>
    )
}
```
The `HomeComponent` renders the UI part of the screen. It also only uses information and function passed from the parent screen.

### Using Redux
When using redux, you usually have to create 3 files.
1. Store file to store the state of the application.
2. Action file to create the action function of the redux you are creation.
3. Constant file for the naming of the action event you are dispatching.

This create a lot of boilerplate. To create an action you need to touch at least 3 files. This is where `ReduxSauce` library can help you. It basically helps you to create all the 3 files with `createReducer` and `createAction` function.

```
const { Types, Creators } = createActions({
    helloWorld: ['param1','param2'],
    helloNull: null,
  })
```
From the example above, the `createActions` function will create a action function named 'helloWorld' that accepts 2 parameters. It will also create a constant type of 'HELLO_WORLD' which it will use to dispatch the event.

```
const helloWorld = (state, action) => {
    return state.merge({
        text: 'Changed using Redux!',
    })
}

const reducer = createReducer(INITIAL_STATE, {
    [Types.HELLO_WORLD]: helloWorld,
})
```
From the example above you can see the use of constant type that have been created. The `createReducer` will call the helloWorld function to change the state of the redux.

### Using selector
In redux, action function is how we can change the state of the redux. But if you want to read from it, you need to use a selector. A selector is just a function to read from the state. The function should be located in the redux where the state is stored.

```
const mapStateToProps = state => {
  return {
    text: getText(state)
  }
}
```
Below is an example of a selector. Instead of using `state.user.text` directly, we use a function and pass the state. The `getText` function will be responsible to fetch the text.

### Using saga
Saga is used to handle side effects. Commonly it is used to get data from HTTP requests. Saga listen to events dispatch by the action functions like redux and act upon it.
```
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

```
 Saga can also have access to the store by using the `select` function.
Example can be seen below

```
const text = yield select(getText);
```


