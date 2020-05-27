import * as React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import StackNavigator from './Stack'
import { screens } from '../constants/navigation'
import map from 'lodash/map'

const { MAIN, EVENTS, DEEJAYS, CONTACT, LEGAL } = screens

const Drawer = createDrawerNavigator()

export default () =>
    <Drawer.Navigator initialRouteName={MAIN} drawerContent={CustomDrawerContent}>
        <Drawer.Screen name={MAIN} component={StackNavigator} />
    </Drawer.Navigator>

const CustomDrawerContent = () =>
    <DrawerContentScrollView >
        {map(drawerItems, drawerItem =>
            <DrawerItem key={drawerItem.label} {...drawerItem} />
        )}
    </DrawerContentScrollView>


const drawerItems = [
    {
        label: MAIN,
        onPress: function () { console.log("press Profile") }
    },
    {
        label: EVENTS,
        onPress: function () { console.log("press EVENTS") }
    },
    {
        label: DEEJAYS,
        onPress: function () { console.log("press DEEJAYS") }
    },
    {
        label: CONTACT,
        onPress: function () { console.log("press CONTACT") }
    },
    {
        label: LEGAL,
        onPress: function () { console.log("press LEGAL") }
    }
]
