import * as React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import StackNavigator from './Stack'
import { MAIN } from './Navigator'

const Drawer = createDrawerNavigator()

export default () =>
    <Drawer.Navigator initialRouteName={MAIN}> 
        <Drawer.Screen name={MAIN} component={StackNavigator} />
    </Drawer.Navigator>

/*const CustomDrawerContent = () =>
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
]*/
