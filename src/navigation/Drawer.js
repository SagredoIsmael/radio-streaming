import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import StackNavigator from './Stack'
import CustomDrawerContent from '../components/drawer/Drawer'

const Drawer = createDrawerNavigator()

export default () =>
    <Drawer.Navigator 
        drawerContent={({ navigation }) => <CustomDrawerContent navigation={navigation}/>}>
        <Drawer.Screen name={"Drawer"} component={StackNavigator} />
    </Drawer.Navigator>



