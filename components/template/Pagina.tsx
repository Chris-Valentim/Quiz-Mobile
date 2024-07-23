import { View, StyleSheet, ImageBackground } from "react-native"
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors"

export interface PaginaProps {
  children: React.ReactNode
}

const background = require('@/assets/images/background.jpg')

const Pagina = (props: PaginaProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.image} imageStyle={{opacity: 0.5}}>
        {props.children}
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Pagina