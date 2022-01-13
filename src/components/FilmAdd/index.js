import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
// import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

import styles from './styles';
import {useSelector} from 'react-redux';

export default function FilmAdd({updateData}) {
  const [name, setName] = useState();
  const [year, setYear] = useState();
  const [format, setFormat] = useState('VHS');
  const [actors, setActors] = useState();
  const {token} = useSelector(state => state.apiReducer);

  const Add = () => {
    axios({
      method: 'POST',
      url: 'http://192.168.0.106:8000/api/v1/movies',
      headers: {
        Authorization: token,
      },
      data: {
        title: name,
        year: year,
        format: format,
        actors: [actors],
      },
    }).then(response => {
      if (response.data.status === 1) {
        updateData();
        alert('Movie was add');
      } else {
        alert([
          response.data.error.fields.title,
          response.data.error.code,
          response.data.error.fields.token,
          ,
        ]);
      }
      console.log('1222222222211111', response.data.error);
    });
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        {/* <TextInput
        style={styles.InputForm}
        value={id}
        placeholder="ID"
        placeholderTextColor={'black'}
        onChangeText={setId}
      /> */}
        <TextInput
          style={styles.InputForm}
          value={name}
          placeholder="Movie Title"
          placeholderTextColor={'black'}
          onChangeText={setName}
        />
        <TextInput
          keyboardType="default"
          style={styles.InputForm}
          value={year}
          placeholder="year"
          placeholderTextColor={'black'}
          onChangeText={setYear}
        />

        <TextInput
          style={styles.InputForm}
          value={actors}
          placeholder="actors"
          placeholderTextColor={'black'}
          onChangeText={setActors}
        />
        <Picker
          style={styles.InputFormSecond}
          selectedValue={format}
          placeholder="video format"
          onValueChange={(itemValue, itemIndex) => setFormat(itemValue)}>
          <Picker.Item label="VHS" value="VHS" />
          <Picker.Item label="DVD" value="DVD" />
          <Picker.Item label=" Blu-Ray" value="Blu-Ray" />
        </Picker>
        <TouchableOpacity onPress={() => Add()} style={styles.AddMovie}>
          <Text style={{marginTop: 10, alignSelf: 'center'}}>Add Movie</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
