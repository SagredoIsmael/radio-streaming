import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../redux/containers/main'

import DrawerNavigator from './Drawer'
import { MAIN, EVENTS, DEEJAYS, CONTACT, LEGAL } from './Navigator'
import colors from '../constants/colors'

const Stack = createStackNavigator()

export default () =>
    <Stack.Navigator initialRouteName={MAIN} screenOptions={headerCommonsOptions}>
        <Stack.Screen name={MAIN} component={DrawerNavigator} options={headerOptions}/>
        <Stack.Screen name={EVENTS} component={DrawerNavigator} options={headerOptions}/>
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