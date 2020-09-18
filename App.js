import * as React from 'react'
import Navigator from './src/navigation/Navigator'
import { YellowBox, View } from "react-native"
import { Provider } from 'react-redux'
import { store, persistor } from './src/redux/configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import PlayerComponent from './src/redux/containers/player'
import firebase from "firebase"
import constant from './src/constants/fetch'
import { Router, Route, Redirect, Switch } from "./src/navigation/router/react-router"

import LegalScreen from './src/redux/containers/legal'

require("firebase/firestore")

firebase.initializeApp(constant.FIREBASE)

export const firestore = firebase.firestore()

const Navigation = () =>
    <View style={{ flex: 1 }}>
        <Navigator />
        <PlayerComponent />
    </View>


const App = () =>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <Switch>
                    {/* <Route path="/legal" component={LegalScreen} /> */}
                    <Route component={Navigation}/>
                </Switch>
            </Router>
        </PersistGate>
    </Provider>



export default App
// ignore specific yellowbox warnings
YellowBox.ignoreWarnings(["Require cycle:"])
