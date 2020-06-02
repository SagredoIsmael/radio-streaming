import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import StackNavigator from './Stack'
import { screens } from '../constants/navigation'
import CustomDrawerContent from '../components/drawer/Drawer'

const { MAIN } = screens

const Drawer = createDrawerNavigator()

export default () =>
    <Drawer.Navigator initialRouteName={MAIN}
        drawerContent={({ navigation }) => <CustomDrawerContent navigation={navigation}/>}>
        <Drawer.Screen name={"Drawer"} component={StackNavigator} />
    </Drawer.Navigator>



