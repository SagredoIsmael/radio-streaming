import * as React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { sizeNormalize } from '../../constants/layout'
import Icon from 'react-native-vector-icons/Ionicons'

export default ({ onPress, name, size, color }) =>
    <TouchableOpacity
        onPress={() => onPress ? onPress() : console.log('Press Icon')}
        style={styles.container}
        disabled={onPress ? false : true}>
       {name && <Icon
            name={name}
            size={size? sizeNormalize(size) : sizeNormalize(40)}
            color={color? color : 'black'} />}
    </TouchableOpacity>

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        marginLeft: 20
    }
})