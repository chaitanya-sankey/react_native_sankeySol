import { TouchableOpacity, Text, View, TextInput, Alert, StyleSheet } from 'react-native'
import React from 'react'

function App() {
  const showalr = () => {
    Alert.alert("Have a Good Day ...!")
  }
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <Text>Hello I am chaitanya !</Text>

      <TextInput style={styles.inputstyle} placeholder = "Enter your name ..."> </TextInput>
    <TouchableOpacity style={styles.button} onPress={showalr}>
      <Text style={{color:'white'}}> Press Me !</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    gap: 15
  },
  inputstyle: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    color: 'gray',
    height: 40,
    width: 150
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  }
})
export default App

