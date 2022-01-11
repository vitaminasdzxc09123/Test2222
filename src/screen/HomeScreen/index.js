import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import FilmAdd from '../../components/FilmAdd';
import {useDispatch, useSelector} from 'react-redux';
import {setMovies, deleteMovie} from '../../redux/action';

import styles from './styles';

export default function HomeScreen({navigation}) {
  const [modal, setModal] = useState(false);
  const [deteils, setDeteils] = useState(false);
  const [info, setInfo] = useState('');

  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const {token, movies, loading} = useSelector(state => state.apiReducer);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:8000/api/v1/movies', {
        headers: {
          Authorization: token,
        },
      })
      .then(response => {
        dispatch(setMovies(response.data.data));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const removeMovie = id => {
    axios({
      method: 'DELETE',
      url: `http://localhost:8000/api/v1/movies/${id}`,
      headers: {
        Authorization: token,
      },
    }).then(response => {
      console.log(response);
      dispatch(deleteMovie(id));
    });
  };

  const getInfo = id => {
    axios({
      method: 'GET',
      url: `http://localhost:8000/api/v1/movies/${id}`,
      headers: {
        Authorization: token,
      },
    }).then(response => {
      setInfo(response.data.data.actors[0].name);

      setDeteils(true);
    });
  };

  const ItemSeparatorView = () => {
    return (
      <View style={{height: 0.5, width: '100%', backgroundColor: '#c8c8c8'}} />
    );
  };
  return (
    <SafeAreaView>
      <Modal visible={modal}>
        <View>
          <TouchableOpacity
            style={styles.closeModal}
            onPress={() => setModal(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
          <Text style={{alignSelf: 'center', marginTop: 80, fontSize: 20}}>
            New Movie
          </Text>
          <FilmAdd updateData={fetchData} />
        </View>
      </Modal>
      <View>
        <Modal animationType="slide" transparent={true} visible={deteils}>
          <View style={styles.ViewAbout} />
          <TouchableOpacity
            style={styles.closeModal}
            onPress={() => setDeteils(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 170,
              fontSize: 20,
              position: 'absolute',
            }}>
            Actors in Movie
          </Text>
          <View style={styles.ViewDeteil}>
            <Text style={styles.TextInfo}>{info}</Text>
          </View>
        </Modal>
      </View>
      <TouchableOpacity onPress={() => setModal(true)} style={styles.AddView}>
        <Text style={styles.TextAdd}>Add</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.SearchBar}
        value={search}
        placeholder={'search'}
        onChangeText={setSearch}
      />
      <FlatList
        ItemSeparatorComponent={ItemSeparatorView}
        style={styles.FlatStyle}
        data={movies
          .sort((a, b) => a.title.localeCompare(b.title))
          .filter(el => el.title.includes(search))}
        renderItem={({item}) => (
          <View style={styles.ViewFlat}>
            <TouchableOpacity onPress={() => getInfo(item.id)}>
              <TouchableOpacity
                onPress={() => removeMovie(item.id)}
                style={styles.DelView}>
                <Text style={styles.TextAdd}>Delate</Text>
              </TouchableOpacity>
              <Text style={styles.TextFlat}>{item.title}</Text>
              <Text style={styles.TextFlat}>{item.year}</Text>
              <Text style={styles.TextFlat}>{item.format}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Maine')}
        style={styles.ExitButton}>
        <Text style={styles.Exit}>exit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
