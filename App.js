import * as React from 'react'
import Navigator from './src/navigation/Navigator'
import { YellowBox } from "react-native"
import { Provider } from 'react-redux'
import { store, persistor } from './src/redux/configureStore'
import { PersistGate } from 'redux-persist/integration/react'

export default () =>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Navigator />
        </PersistGate>
    </Provider>


// ignore specific yellowbox warnings
YellowBox.ignoreWarnings(["Require cycle:"])
