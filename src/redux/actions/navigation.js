import { CommonActions, DrawerActions, TabActions } from '@react-navigation/native'
import { NAVIGATE, GO_BACK_NAVIGATE, RESET_NAVIGATE, TAB_NAVIGATE, TOGGLE_DRAWER } from './types'
import { navigationRef } from '../../navigation/Navigator'

export const navigateTo = route => ({
  type: NAVIGATE,
  route
})

export const goBackNavigate = () => ({
  type: GO_BACK_NAVIGATE
})

export const resetNavigate = () => ({
  type: RESET_NAVIGATE
})

export const tabNavigate = (tab) => ({
  type: TAB_NAVIGATE,
  tab
})

export const toggleDrawerNavigate = () => ({
  type: TOGGLE_DRAWER
})

export const navigate = (routeName, params = {}) => (dispatch) => {
  dispatch(navigateTo(routeName))
  navigationRef.current?.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params
    })
  )
}
  
export const goBack = () => (dispatch) => {
  dispatch(goBackNavigate())
  navigationRef.current?.dispatch(CommonActions.goBack())
}

export const reset = (routeName, params = {}) => (dispatch) =>{
  dispatch(resetNavigate())
  navigationRef.current?.dispatch(
    CommonActions.reset({
      name: routeName,
      params: params
    })
  )
}
  
export const toggleDrawer = () => (dispatch) => {
  dispatch(toggleDrawerNavigate())
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer())
}

export const navigateInTabs = (tabName) => (dispatch) =>
  navigationRef.current?.dispatch(
    TabActions.jumpTo(
      tabName, params
    )
  )
