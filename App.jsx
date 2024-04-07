import {StyleSheet, Text, View, ToastAndroid} from 'react-native';
import React, {useState, useEffect} from 'react';
import DropdownComponent from './components/DropdownComponent';
import countryData from 'countrycitystatejson';

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
  const data = countryData.getAll();
  const [allCountryData, setAllCountryData] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setselectedCountry] = useState();
  const [selectedStates, setSelectedStates] = useState();

  function getAllCountryData() {
    const arr = [];
    let count = 1;
    for (let i in data) {
      arr.push({label: data[i].name, value: i});
      count++;
    }
    setAllCountryData(arr);
  }

  function getStatesName(selectedCountry) {
    const country = selectedCountry.value;
    let arr = [];
    let count = 1;
    for (let i in data[country].states) {
      arr.push({label: i, value: count});
      count++;
    }
    setStates(arr);
    setSelectedStates();
  }

  function showMessage(msg) {
    ToastAndroid.showWithGravity(
      `Selected State is : ${msg}`,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  }

  useEffect(() => {
    getAllCountryData();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      getStatesName(selectedCountry);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && selectedStates) {
      showMessage(selectedStates.label);
    }
  }, [selectedStates]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Please Select a Country</Text>
        <DropdownComponent
          value={selectedCountry}
          setValue={setselectedCountry}
          data={allCountryData}
        />
      </View>
      {selectedCountry ? (
        <View>
          <Text style={styles.headerText}>Please Select a State</Text>
          <DropdownComponent
            value={selectedStates}
            setValue={setSelectedStates}
            data={states}
          />
        </View>
      ) : (
        <Text style={styles.msgText}>
          *Please Select a country to select States
        </Text>
      )}
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
  msgText: {
    color: 'grey',
    fontSize: 13,
    alignSelf: 'center',
  },
});
