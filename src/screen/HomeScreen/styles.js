import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  DelView: {
    position: 'absolute',
    marginTop: 12,
    marginLeft: 10,
    width: 60,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#8C324C',
  },
  AddView: {
    marginTop: 85,
    marginLeft: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderRadius: 20,
    alignSelf: 'center',

    borderWidth: 1,
    borderColor: '#308745',
  },
  ExitButton: {
    position: 'absolute',
    marginTop: 85,
    marginLeft: 5,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'red',
  },
  AddMovie: {
    alignSelf: 'center',
    marginTop: 30,
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    backgroundColor: '#F1F1F1',
  },
  FlatStyle: {
    alignSelf: 'center',
    marginTop: 10,
    width: 350,
    height: 550,
  },
  TextFlat: {
    margin: 3,
    alignSelf: 'center',
  },
  ViewAbout: {
    backgroundColor: 'white',
    opacity: 0.8,

    height: 900,
  },
  TextInfo: {
    alignSelf: 'center',
    marginTop: 10,
  },
  ViewDeteil: {
    marginTop: 200,
    position: 'absolute',
    width: 300,
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#ffff',
    alignSelf: 'center',
  },
  ViewFlat: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 20,
    borderColor: '#CECECE',
  },
  closeModal: {
    position: 'absolute',
    marginTop: 50,
    marginLeft: 10,
  },

  SearchBar: {
    alignSelf: 'center',
    marginLeft: 30,
    width: 300,
    marginTop: 25,
    position: 'absolute',
    backgroundColor: '#CECECE',
    borderRadius: 20,
    height: 40,
    paddingLeft: 10,
  },
  TextAdd: {
    alignSelf: 'center',
    marginTop: 10,
  },
  Exit: {
    alignSelf: 'center',
    marginTop: 10,
  },
  HomeSafe: {
    flex: 1,
    backgroundColor: 'red',
  },
  ViewHome: {
    flex: 1,
    backgroundColor: 'red',
  },
});
export default styles;
