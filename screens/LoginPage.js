import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppContext} from './AppContext';

const Loginpage = ({navigation}) => {
  const {handleLogout} = useAppContext();
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (userEmail == '' || password == '') {
      setError('please enter your login credentials');
    } else {
      // Store the email in local storage
      await AsyncStorage.setItem('isLoggedIn', 'true');
      await AsyncStorage.setItem('userEmail', userEmail);
      setError('');
      setUserEmail('');
      setPassword('');
      navigation.navigate('Home');
      console.log('user logged in');
      await clearStoredEmail();
    }
  };
  const clearStoredEmail = async () => {
    await AsyncStorage.removeItem('userEmail');
    console.log('email removed');
  };

  return (
    <ScrollView style={styles.container} onPress={Keyboard.dismiss}>
      <View style={styles.body}>
        <Text style={styles.header}>Welcome to Microffee</Text>

        <Image
          style={styles.img}
          source={require('../assets/images/logo1.png')}
        />

        {error && <Text style={styles.errorText}>{error}</Text>}

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.email}
            placeholder="Email"
            value={userEmail}
            placeholderTextColor="#808B96"
            onChangeText={e => setUserEmail(e)}
            onFocus={() => setError('')}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.textInput}>
          <TextInput
            style={styles.Password}
            value={password}
            placeholder="Password"
            placeholderTextColor="#808B96"
            secureTextEntry={!hidePass}
            onChangeText={e => setPassword(e)}
            onFocus={() => setError('')}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setHidePassword(!hidePass)}>
            <Icon
              name={hidePass ? 'eye' : 'eye-slash'}
              size={25}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          <Text style={styles.forgotpassword}>Forgot your Password?</Text>
        </TouchableOpacity>
        <View style={styles.loginbuton}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.signup}>Not a member yet?</Text>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => {
              navigation.navigate('Fill_User_Details');
            }}>
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
            handleLogout();
          }}>
          <Text style={styles.footer}>Join as guest</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Loginpage;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    flex: 1,
    paddingHorizontal: 16,
  },
  body: {
    alignItems: 'center',
  },
  header: {
    marginVertical: 25,
    fontSize: 25,
    color: 'black',
  },

  img: {
    width: 150,
    height: 150,
    marginBottom: 18,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  email: {
    // flex: 1,
    height: 50,
    color: 'black',
    fontSize: 18,
    borderWidth: 2,
    borderColor: 'lightblue',
    borderRadius: 7,
    width: '100%',
    marginVertical: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    // marginHorizontal: 4,
  },
  Password: {
    color: 'black',
    // flex: 1,
    height: 50,
    fontSize: 18,
    borderWidth: 2,
    borderColor: 'lightblue',
    borderRadius: 7,
    width: '100%',
    marginVertical: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
    paddingRight: 55,
    // marginHorizontal: 5,
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  iconContainer: {
    position: 'absolute',
    top: 22,
    right: 30,
  },
  forgotpassword: {
    marginVertical: 20,
    fontSize: 18,
    color: '#1B8EE3',
  },
  login: {
    color: 'white',
    height: 35,
    borderRadius: 15,
    textAlign: 'center',
    fontSize: 20,
  },
  loginbuton: {
    width: '95%',
    alignItems: 'center',
  },
  button: {
    width: '95%',
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: '#52850f', //green
    padding: 9,
    borderRadius: 25,
  },
  signup: {
    // margin: 20,
    marginTop: 20,
    fontSize: 19,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  footer: {
    margin: 15,
    fontSize: 17,
    color: '#1B8EE3',
  },
  signupText: {
    color: '#1B8EE3',
    fontSize: 19,
    // padding: 45,
  },
  errorText: {
    color: 'red',
  },
});
