import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppContext} from '../context/AppContext';

const Login = () => {
  const {setHasUser} = useContext(AppContext);
  const handleLogin = () => setHasUser(true);

  return (
    <View style={styles.container}>
      <TextInput placeholder="Name..." />
      <TextInput placeholder="Password..." />
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.btnTxt}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  loginBtn: {
    backgroundColor: 'gray',
    padding: 12,
    borderRadius: 12,
    marginTop: 12,
  },
  btnTxt: {
    color: 'white',
    textAlign: 'center',
  },
});
