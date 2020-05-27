import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { screens } from '../constants/navigation'
import DrawerNavigator from './Drawer'
export const { MAIN, EVENTS, DEEJAYS, CONTACT, LEGAL } = screens

export const navigationRef = React.createRef()

export default () =>
    <NavigationContainer ref={navigationRef}>
        <DrawerNavigator/>
    </NavigationContainer>

