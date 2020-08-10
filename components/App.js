/**
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
  View,
} from 'react-native';
import {Gauge} from './Gauge';
import {Instructions} from './Instructions';

const screen = Dimensions.get('screen');

const App = () => {
  const [currentRow, setCurrentRow] = useState(null);
  const [rows, setRows] = useState(null);
  const [cycles, setCycles] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const setRowsAndCycles = (rows, cycles) => {
    setRows(rows);
    setCycles(cycles);
  };
  const handleAddRow = () => {
    console.log('fsilaf');
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Instructions
          showModal={showModal}
          closeModal={() => setShowModal(false)}
          setRowsAndCycles={setRowsAndCycles}
        />
        <View style={styles.gaugeContainer}>
          <Text style={styles.headerText}>knitting row...</Text>
          <Gauge row={1} rows={4} handleAddRow={handleAddRow} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: screen.width,
    minHeight: screen.height,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4327F',
  },
  gaugeContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    padding: 30,
  },
});

export default App;
