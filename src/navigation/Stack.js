import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from '../redux/containers/main'
import EventsScreen from '../redux/containers/events'
import DeejaysScreen from '../redux/containers/deejays'
import ContactScreen from '../redux/containers/contact'
import LegalScreen from '../redux/containers/legal'
import { MAIN, EVENTS, DEEJAYS, CONTACT, LEGAL } from './Navigator'
import colors from '../constants/colors'

const Stack = createStackNavigator()

export default () =>
    <Stack.Navigator  screenOptions={headerCommonsOptions}>
        <Stack.Screen name={MAIN} component={MainScreen} options={headerOptions}/>
        <Stack.Screen name={EVENTS} component={EventsScreen} options={headerOptions}/>
        <Stack.Screen name={DEEJAYS} component={DeejaysScreen} options={headerOptions}/>
        <Stack.Screen name={CONTACT} component={ContactScreen} options={headerOptions}/>
        <Stack.Screen name={LEGAL} component={LegalScreen} options={headerOptions}/>
    </Stack.Navigator>

const headerCommonsOptions = {
    headerStyle: {
        backgroundColor: colors.primary,
    },
    headerTintColor: colors.primary,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}

const headerOptions = { headerShown: false }