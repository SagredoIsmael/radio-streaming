import * as React from 'react'
import { StyleSheet, ImageBackground, Platform, View, Text, Button, TouchableOpacity } from 'react-native'
import colors from '../constants/colors'
import { sizeNormalize } from '../constants/layout'
import { Linking } from 'react-native'

export default ({ navigate }) => {
  const isWeb = Platform.OS == 'web'
  return (
    <ImageBackground
      source={isWeb ? require("../../assets/images/background.jpg") : require("../../assets/images/provisional/5.jpg")}
      style={styles.container} >
      <View style={styles.infoWrapper}>
        <Text style={styles.textTitle}>
          MADRID
          </Text>
        <Text style={styles.textDescription}>
          {
            `\nCITRIKA FM
            \nTeléfono: 649 540 551
            \nHorario: de 16:00 a 22:00 horas`
          }
        </Text>
        <View style={styles.emailWrapper}>
          <Text style={styles.textEmail}>
           {`\nEmail: `}
        </Text>
          <TouchableOpacity
            style={styles.loginScreenButton}
            onPress={() => Linking.openURL('mailto:info@citrikafm.com')}
            underlayColor={colors.primary}>
            <Text style={styles.email}>{`\ninfo@citrikafm.com`}</Text>
          </TouchableOpacity>
        </View>
      </View >
    </ImageBackground >
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoWrapper: {
    width: '30%',
    backgroundColor: colors.black,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  textTitle: {
    color: colors.white,
    fontSize: sizeNormalize(20),
    fontWeight: "bold",
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: colors.lightBlack,
    marginLeft: '7%',
    marginRight: '7%',
    marginTop: '7%',
    paddingBottom: '3%'
  },
  textDescription: {
    color: colors.white,
    fontSize: sizeNormalize(16),
    marginLeft: '7%',
    marginRight: '7%',
  },
  textEmail: {
    color: colors.white,
    fontSize: sizeNormalize(16)
  },
  emailWrapper:{
    backgrouncolor: 'pink',
    flexDirection: 'row',
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '7%',
  },
  email:{
    color: colors.primary,
    fontSize: sizeNormalize(16),
    fontWeight: "bold",
  }
})
