import { StyleSheet, Text, View } from "react-native"

const Logo = () => {
  return (
    <View>
      <Text style={styles.primario}>
        SPACE QUIZ
      </Text>
      <Text style={styles.segundario}>
        PERGUNTAS DO UNIVERSO
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  primario: {
    fontFamily: 'SOLARSPACEDEMO-Regular',
    fontSize: 35,
    color: 'white',
    textAlign: 'center'
  },

  segundario: {
    fontFamily: 'SPACEMISSION',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  }
})

export default Logo
