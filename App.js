import * as React from 'react'
import Navigator from './src/navigation/Navigator'
import { YellowBox } from "react-native"
import { Provider } from 'react-redux'
import { store, persistor } from './src/redux/configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import PlayerComponent from './src/redux/containers/player'

export default () =>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Navigator />
            <PlayerComponent/>
        </PersistGate>
    </Provider>


// ignore specific yellowbox warnings
YellowBox.ignoreWarnings(["Require cycle:"])
