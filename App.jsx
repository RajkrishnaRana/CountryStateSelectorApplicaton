import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import DropdownComponent from './components/DropdownComponent';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const App = () => {
  const [value, setValue] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Please Select a Country</Text>
      <DropdownComponent value={value} setValue={setValue} data={data} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    alignSelf: 'center',
    backgroundColor: 'blue',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 50,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
