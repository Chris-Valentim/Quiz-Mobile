import { Pressable, StyleSheet, Text } from "react-native"

export interface OpcaoProps {
  indece: number
  texto: string
  onPress: () => void
}

const Opcao = (props: OpcaoProps) => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <Text style={styles.texto}>
        {props.texto}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2e9d48',
    padding: 15,
    borderRadius: 50,
  },

  texto: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default Opcao