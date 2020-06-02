import * as React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { StyleSheet } from 'react-native'
import StackNavigator from './Stack'
import { screens } from '../constants/navigation'
import map from 'lodash/map'
import colors from '../constants/colors'
import { sizeNormalize } from '../constants/layout'
import Icon from '../components/UI/Icon'

const { MAIN, EVENTS, DEEJAYS, CONTACT, LEGAL } = screens

const Drawer = createDrawerNavigator()

export default () =>
    <Drawer.Navigator initialRouteName={MAIN}
        drawerContent={({ navigation }) => CustomDrawerContent(navigation)}>
        <Drawer.Screen name={"Drawer"} component={StackNavigator} />
    </Drawer.Navigator>

const CustomDrawerContent = (navigation) =>
    <DrawerContentScrollView style={styles.drawerContainer}>
        {map(drawerItems, drawerItem =>
            <DrawerItem key={drawerItem.label}
                onPress={() => navigation.navigate(drawerItem.label)}
                labelStyle={styles.labelDrawer}
                style={styles.drawerItem}
                {...drawerItem} />
        )}
    </DrawerContentScrollView>


const drawerItems = [
    {
        label: MAIN,
    },
    {
        label: EVENTS,
    },
    {
        label: DEEJAYS,
    },
    {
        label: CONTACT,
    },
    {
        label: LEGAL,
    }
]



const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        backgroundColor: colors.black
    },
    labelDrawer: {
        color: colors.white,
        fontSize: sizeNormalize(18)
    },
    drawerItem: {
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
    }
})