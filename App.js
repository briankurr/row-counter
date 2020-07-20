/**
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [currentRow, setCurrentRow] = useState(1);
  const [currentCycle, setCurrentCycle] = useState(1);
  const [totalRows, setTotalRows] = useState(1);
  const [totalCycles, setTotalCycles] = useState(1);

  const handleAddRow = () => {
    if (currentRow === totalRows) {
      setCurrentRow(1);
      setCurrentCycle((prevCycle) => prevCycle + 1);
    } else {
      setCurrentRow((prevRow) => prevRow + 1);
    }
  };

  const handleSubtractRow = () => {
    if (currentRow === 1) {
      setCurrentCycle((prevCycle) => prevCycle - 1);
      setCurrentRow(totalRows);
    } else {
      setCurrentRow((prevRow) => prevRow - 1);
    }
  };

  const handleTotalRows = (value) => {
    setTotalRows(parseInt(value));
  };

  const handleTotalCycles = (value) => {
    setTotalCycles(parseInt(value));
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.circleButtonContainer}>
          <CircleButton
            onPress={handleAddRow}
            style={styles.plusButton}
            textStyle={styles.plusButtonText}
            text={currentRow}
          />
          <CircleButton
            onPress={handleSubtractRow}
            style={styles.minusButton}
            textStyle={styles.minusButtonText}
            text="-"
          />
        </View>
        <View style={styles.counterContainer}>
          <View style={styles.textInput}>
            <Text style={styles.counterText}>on row {currentRow} of </Text>
            <TextInput
              style={styles.counterText}
              clearTextOnFocus
              keyboardType={'numeric'}
              onChangeText={handleTotalRows}
              returnKeyType="done"
              value={totalRows.toString()}
            />
          </View>
          <View style={styles.textInput}>
            <Text style={styles.counterText}>repeat {currentCycle} of </Text>
            <TextInput
              style={styles.counterText}
              clearTextOnFocus
              keyboardType={'numeric'}
              onChangeText={handleTotalCycles}
              returnKeyType="done"
              value={totalCycles.toString()}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const CircleButton = (props) => {
  const {style, textStyle, text} = {...props};
  return (
    <TouchableOpacity style={style} onPress={props.onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 250,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    marginTop: 50,
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  circleButtonContainer: {
    flexDirection: 'row',
  },
  plusButton: {
    borderRadius: 100,
    backgroundColor: '#cc397b',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
  },
  plusButtonText: {
    fontSize: 54,
    color: '#FFF',
  },
  minusButton: {
    borderRadius: 25,
    backgroundColor: '#3f314f',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  minusButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  textInput: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
