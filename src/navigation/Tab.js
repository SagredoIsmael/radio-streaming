import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MAIN, PROFILE, CHAT } from './Navigator'
import colors from '../constants/colors'
import MainScreen from '../screens/Events'
import profileScreen from '../redux/containers/profile'
import ChatScreen from '../screens/Main'
import { Ionicons } from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator()

export default ({ navigation }) => {
  navigation.setOptions({ headerTitle: 'Citrika FM' })

  return (
    <BottomTab.Navigator initialRouteName={MAIN} tabBarOptions={tabBarCommonsOptions}>
      <BottomTab.Screen
        name={MAIN}
        component={MainScreen}
        options={{
          title: MAIN,
          tabBarIcon: ({ focused }) => <Icon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name={PROFILE}
        component={profileScreen}
        options={{
          title: PROFILE,
          tabBarIcon: ({ focused }) => <Icon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name={CHAT}
        component={ChatScreen}
        options={{
          title: CHAT,
          tabBarIcon: ({ focused }) => <Icon focused={focused} name="md-map" />,
        }}
      />
    </BottomTab.Navigator>
  )
}

const Icon = ({focused, name}) =>
  <Ionicons
    name={name}
    size={30}
    style={{ marginBottom: -3 }}
    color={focused ? colors.tabIconSelected : colors.third}
  />

  const tabBarCommonsOptions = {
    activeTintColor: colors.secondary,
    inactiveTintColor: colors.primary,
    activeBackgroundColor: colors.third,
    inactiveBackgroundColor: colors.secondary
}
