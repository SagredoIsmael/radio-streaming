import * as React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import StackNavigator from './Stack'
import { screens } from '../constants/navigation'
import map from 'lodash/map'

const { MAIN, EVENTS, DEEJAYS, CONTACT, LEGAL } = screens

const Drawer = createDrawerNavigator()

export default () =>
    <Drawer.Navigator initialRouteName={MAIN}
        drawerContent={({ navigation }) => CustomDrawerContent(navigation)}>
        <Drawer.Screen name={MAIN} component={StackNavigator} />
    </Drawer.Navigator>

const CustomDrawerContent = (navigation) =>
    <DrawerContentScrollView >
        {map(drawerItems, drawerItem =>
            <DrawerItem key={drawerItem.label}
                onPress={() => navigation.navigate(drawerItem.label)}
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
