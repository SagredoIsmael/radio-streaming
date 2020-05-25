import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../redux/containers/login'
import DrawerNavigator from './Drawer'
import { LOGIN, MAIN } from './Navigator'
import colors from '../constants/colors'

const Stack = createStackNavigator()

export default () =>
    <Stack.Navigator initialRouteName={LOGIN} screenOptions={headerCommonsOptions}>
        <Stack.Screen name={LOGIN} component={Login} options={headerOptions}/>
        <Stack.Screen name={MAIN} component={DrawerNavigator} options={headerOptions}/>
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