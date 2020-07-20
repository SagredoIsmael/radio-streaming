import { Dimensions, Platform, PixelRatio, StatusBar } from 'react-native'

export const width = Dimensions.get('window').width
export const height = Dimensions.get('window').height

export const isStraitScreen = width < 800

const scale = width / 320
const scaleWeb = width / 20000

export const sizeNormalize = (size) => {
  const newSize = size * scale
  switch (Platform.OS) {
    case 'ios':
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 5

    case 'android':
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 4

    case 'web':
      if (!isStraitScreen) {
        return (scaleWeb * size).toString() + 'rem'
      } else {
        return (scaleWeb * size * 3).toString() + 'rem'
      }

  }
}

export const adaptImageWidth = (dimension, isWeb) => {
  const MAX_IMAGE_WIDTH = isWeb ? 1200 : 350

  for (var i = 0; i < 1000; i += 0.1)
    if (dimension.width / i < MAX_IMAGE_WIDTH) {
      return { width: dimension.width / i, height: dimension.height / i }
    }
}
