import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import AppButton from "../../components/AppButton";

import AppTextInput from "../../components/AppTextInput";
import SafeAreaScreen from "../../components/SafeAreaScreen";

function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <SafeAreaScreen style={styles.container} >
      <Image style={styles.logo} source={require("../assets/total_logo.png")} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        textContentType="emailAddress"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
      padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
