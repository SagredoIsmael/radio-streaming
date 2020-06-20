import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from '../redux/containers/main'
import EventsScreen from '../redux/containers/events'
import DeejaysScreen from '../redux/containers/deejays'
import ContactScreen from '../redux/containers/contact'
import LegalScreen from '../redux/containers/legal'
import { MAIN, EVENTS, DEEJAYS, CONTACT, LEGAL } from './Navigator'
import colors from '../constants/colors'
import Icon from '../components/UI/Icon'
import { sizeNormalize } from '../constants/layout'
import Header from '../components/header/Header'

const Stack = createStackNavigator()

export default () =>
    <Stack.Navigator screenOptions={headerCommonsOptions}>
        <Stack.Screen name={MAIN} component={MainScreen}
            options={({ navigation }) => headerOptionsMain(navigation)} />
        <Stack.Screen name={EVENTS} component={EventsScreen}
            options={({ navigation }) => headerOptionsMain(navigation)} />
        <Stack.Screen name={DEEJAYS} component={DeejaysScreen}
            options={({ navigation }) => headerOptionsMain(navigation)} />
        <Stack.Screen name={CONTACT} component={ContactScreen}
            options={({ navigation }) => headerOptionsMain(navigation)} />
        <Stack.Screen name={LEGAL} component={LegalScreen}
            options={({ navigation }) => headerOptionsMain(navigation)} />
    </Stack.Navigator>

const headerCommonsOptions = {
    headerStyle: {
        backgroundColor: colors.black,
    },
    headerTintColor: colors.secondary,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}

const headerOptionsMain = (navigation) => (
    {
        headerLeft: () => <Icon color={colors.primary} onPress={navigation.toggleDrawer} name={'md-menu'} style={{marginLeft: sizeNormalize(20)}} size={30} colorHovered={colors.white}/>,
        headerTitle: props => <Header {...props} />   }
)
