import * as React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import TabNavigator from './Tab'
import { MAIN } from './Navigator'
import map from 'lodash/map'

const Drawer = createDrawerNavigator()

export default () =>
    <Drawer.Navigator initialRouteName={MAIN} drawerContent={CustomDrawerContent}>
        <Drawer.Screen name={MAIN} component={TabNavigator} />
    </Drawer.Navigator>

const CustomDrawerContent = () =>
    <DrawerContentScrollView >
        {map(drawerItems, drawerItem =>
            <DrawerItem key={drawerItem.label} {...drawerItem} />
        )}
    </DrawerContentScrollView>


const drawerItems = [
    {
        label: "Profile",
        onPress: function () { console.log("press Profile") }
    },
    {
        label: "Help",
        onPress: function () { console.log("press Help") }
    }
]
