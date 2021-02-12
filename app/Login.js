import React, { Component } from "react";
import { StyleSheet, Text, TextInput, Button, View, Image } from "react-native";

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder=" Email" />
        <TextInput
          style={styles.input}
          placeholder=" Password"
          secureTextEntry={true}
        />
        <View style={styles.button}>
          <Button title="Login"></Button>
        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
  },
  input: {
    margin: 15,
    height: 40,
    width: "80%",
    marginLeft: "10%",
    borderColor: "grey",
    borderWidth: 1,
  },
  button: {
    width: "80%",
    marginLeft: "10%",
  },
});
// const s = StyleSheet.create({
//   container: {
//     paddingTop: 23,
//   },
//   input: {
//     margin: 15,
//     height: 40,
//     borderColor: "#7a42f4",
//     borderWidth: 1,
//   },
// });
