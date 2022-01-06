import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import axios from 'axios';

// import AsyncStorage from '@react-native-community/async-storage';

import {useDispatch} from 'react-redux';
import {setToken} from '../../redux/action';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  async function sendCred() {
    axios({
      method: 'POST',
      url: 'http://10.0.2.2:8000/api/v1/sessions',
      data: {
        email: email,
        password: password,
      },
    }).then(response => {
      console.log(response);
      // AsyncStorage.setItem('token', response.data.token);
      dispatch(setToken(response.data.token));
      navigation.replace('HomeSecond');
    });
  }

  return (
    <SafeAreaView>
      <Text style={styles.RegText}>Login</Text>
      <TextInput
        style={styles.TextEmail}
        onChangeText={setEmail}
        value={email}
        placeholder="email"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.TextPassword}
        value={password}
        placeholder="Password"
        keyboardType="numeric"
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={() => sendCred()} style={styles.buttonLogin}>
        <Text style={{fontSize: 18, color: '#FFFF'}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Registry')}
        style={styles.buttonLogin}>
        <Text style={{fontSize: 18, color: '#FFFF'}}>Registration</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
