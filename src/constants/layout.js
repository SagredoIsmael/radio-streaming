import { Dimensions, Platform, PixelRatio, StatusBar } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
}

const scale = width / 320

export const sizeNormalize = (size) => {
  const newSize = size * scale
  switch (Platform.OS) {
    case 'ios':
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
  
    case 'android':
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  
    case 'web':
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 100
  }
}

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;


export const isIPhoneX = () => Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
    ? width === X_WIDTH && height === X_HEIGHT || width === XSMAX_WIDTH && height === XSMAX_HEIGHT
    : false;

export const StatusBarHeight = Platform.select({
    ios: isIPhoneX() ? 44 : 20,
    android: StatusBar.currentHeight,
    default: 0
})