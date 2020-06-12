import * as React from 'react'
import Navigator from './src/navigation/Navigator'
import { YellowBox } from "react-native"
import { Provider } from 'react-redux'
import { store, persistor } from './src/redux/configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import PlayerComponent from './src/redux/containers/player'

import * as firebase from 'firebase'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDIZBtz_H3Y4C50eXoEPIE9d5kyz2kL0Hs",
    authDomain: "citrikafm.firebaseapp.com",
    databaseURL: "https://citrikafm.firebaseio.com",
    projectId: "citrikafm",
    storageBucket: "citrikafm.appspot.com",
    messagingSenderId: "218124095941",
    appId: "1:218124095941:web:62abbade64644dca2d3bac",
    measurementId: "G-VLBND9SC4Q"
}


export default () => {
    firebase.initializeApp(firebaseConfig)

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Navigator />
                <PlayerComponent />
            </PersistGate>
        </Provider>
    )
}



// ignore specific yellowbox warnings
YellowBox.ignoreWarnings(["Require cycle:"])
