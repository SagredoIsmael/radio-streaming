import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import { sizeNormalize } from '../../constants/layout'
import Icon from 'react-native-vector-icons/Ionicons'

export default ({ onPress, name, size, color, style }) =>
    onPress ?
        <TouchableOpacity 
            style={style && style}
            onPress={() => onPress()}>
            {name && <Icon
                name={name}
                size={size ? sizeNormalize(size) : sizeNormalize(40)}
                color={color ? color : 'black'} />}
        </TouchableOpacity>
        :
        name && <Icon
            name={name}
            size={size ? sizeNormalize(size) : sizeNormalize(40)}
            color={color ? color : 'black'} />

