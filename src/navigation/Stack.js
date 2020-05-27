import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import MainScreen from '../redux/containers/main'
import EventsScreen from '../redux/containers/events'
import DeejaysScreen from '../redux/containers/deejays'
import ContactScreen from '../redux/containers/contact'
import LegalScreen from '../redux/containers/legal'
import { MAIN, EVENTS, DEEJAYS, CONTACT, LEGAL } from './Navigator'
import colors from '../constants/colors'
import { sizeNormalize } from '../constants/layout'
import Icon from 'react-native-vector-icons/Ionicons'

const Stack = createStackNavigator()

export default () =>
    <Stack.Navigator screenOptions={headerCommonsOptions}>
        <Stack.Screen name={MAIN} component={MainScreen}
            options={({ navigation }) => headerOptionsMain(navigation)}
        />
        <Stack.Screen name={EVENTS} component={EventsScreen} />
        <Stack.Screen name={DEEJAYS} component={DeejaysScreen} />
        <Stack.Screen name={CONTACT} component={ContactScreen} />
        <Stack.Screen name={LEGAL} component={LegalScreen} />
    </Stack.Navigator>

const headerCommonsOptions = {
    headerStyle: {
        backgroundColor: colors.primary,
    },
    headerTintColor: colors.secondary,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}

const headerOptionsMain = (navigation) => (
    {
        headerLeft: () => (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Icon
                        name={'md-menu'}
                        size={sizeNormalize(27)}
                        color={'black'} />
                </TouchableOpacity>
            </View>
        ),
    }
)


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        marginLeft: 10
    }
})