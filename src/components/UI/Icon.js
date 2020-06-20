import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import { sizeNormalize } from '../../constants/layout'
import Icon from 'react-native-vector-icons/Ionicons'
import { Hoverable } from 'react-native-web-hooks'

export default ({ onPress, name, size, color, style, backgroundColorHovered, colorHovered }) =>
    onPress ?
        <Hoverable>
            {isHovered => (
                <TouchableOpacity accessible 
                 style={{backgroundColor: isHovered && backgroundColorHovered, ...style}}
                 onPress={() => onPress()}>
                    {name &&
                        <Icon
                            name={name}
                            size={size ? sizeNormalize(size) : sizeNormalize(40)}
                            color={isHovered? colorHovered : color} />
                    }
                </TouchableOpacity>
            )}
        </Hoverable>
        :
        name && <Icon
            name={name}
            size={size ? sizeNormalize(size) : sizeNormalize(40)}
            color={color ? color : 'black'} />



