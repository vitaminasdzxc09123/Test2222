import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, TextInput} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux';
import {setToken} from '../../redux/action';

import styles from './styles';

export default function RegistryScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  async function sendCred() {
    const response = await axios({
      method: 'POST',
      url: 'http://localhost:8000/api/v1/users',

      data: {
        email: email,
        name: name,
        password: password,
        confirmPassword: confirmPassword,
      },
    });
    AsyncStorage.setItem('token', response.data.token);
    dispatch(setToken(response.data.token));
    navigation.replace('HomeSecond');
  }

  return (
    <SafeAreaView>
      <Text style={styles.RegText}>Registration</Text>
      <TextInput
        style={styles.TextEmail}
        onChangeText={setEmail}
        value={email}
        placeholder="email"
        keyboardType="default"
      />
      <TextInput
        style={styles.TextPassword}
        value={name}
        placeholder="name"
        onChangeText={setName}
      />
      <TextInput
        style={styles.TextPassword}
        value={password}
        placeholder="Password"
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.TextPassword}
        value={confirmPassword}
        placeholder="confirmPassword"
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity onPress={() => sendCred()} style={styles.buttonLogin}>
        <Text style={{fontSize: 18, color: '#FFFF'}}>Registration</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.buttonLogin}>
        <Text style={{fontSize: 18, color: '#FFFF'}}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
