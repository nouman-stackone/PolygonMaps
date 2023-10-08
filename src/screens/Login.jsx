import React, {useContext} from 'react';
import {
  Image,
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
      <TextInput style={styles.inp} placeholder="Enter Name..." />
      <TextInput style={styles.inp} placeholder="Enter Password..." />
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
    marginTop: 24,
  },
  logo: {
    width: '100%',
  },
  inp: {
    borderRadius: 12,
    backgroundColor: 'lightgray',
    marginTop: 12,
    paddingLeft: 16,
  },
  loginBtn: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 12,
    marginTop: 12,
  },
  btnTxt: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
