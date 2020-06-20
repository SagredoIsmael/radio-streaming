import * as React from 'react'
import Navigator from './src/navigation/Navigator'
import { YellowBox } from "react-native"
import { Provider } from 'react-redux'
import { store, persistor } from './src/redux/configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import PlayerComponent from './src/redux/containers/player'
import firebase from "firebase"
import constant from './src/constants/fetch'
require("firebase/firestore")

firebase.initializeApp(constant.FIREBASE)

export const firestore = firebase.firestore()

export default () => {
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
