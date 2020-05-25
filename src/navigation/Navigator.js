import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { screens } from '../constants/navigation'
import StackNavigator from './Stack'
export const { LOGIN, MAIN, PROFILE, CHAT } = screens

export const navigationRef = React.createRef()

export default () =>
    <NavigationContainer ref={navigationRef}>
        <StackNavigator/>
    </NavigationContainer>

