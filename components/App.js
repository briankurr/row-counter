/**
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {Dots} from './Dots';
import {CircleButton} from './CircleButton';
import {Instructions} from './Instructions';

const screen = Dimensions.get('screen');

const App = () => {
  const [currentRow, setCurrentRow] = useState(1);
  const [rows, setRows] = useState(5);
  const [currentRepeat, setCurrentRepeat] = useState(1);
  const [repeats, setRepeats] = useState(8);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(!rows || !repeats);
  }, [rows, repeats]);

  const setRowsAndRepeats = (rows, repeats) => {
    setRows(rows);
    setRepeats(repeats);
  };

  const handleAddRow = () => {
    if (currentRow === rows) {
      setCurrentRow(1);
      setCurrentRepeat((previousCurrentRepeat) => previousCurrentRepeat + 1);
    } else {
      setCurrentRow((previousCurrentRow) => previousCurrentRow + 1);
    }
  };

  const handleSubtractTow = () => {
    if (currentRow === 1) {
      if (currentRepeat !== 1) {
        setCurrentRow(rows);
        setCurrentRepeat((previousCurrentRepeat) => previousCurrentRepeat - 1);
      }
    } else {
      setCurrentRow((previousCurrentRow) => previousCurrentRow - 1);
    }
  };

  const getPercentage = () => {
    return rows ? (currentRow / rows) * 100 : 0;
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Instructions
          showModal={showModal}
          closeModal={() => setShowModal(false)}
          setRowsAndRepeats={setRowsAndRepeats}
        />
        <View>
          <View style={styles.gaugeContainer}>
            <Text style={styles.headerText}>knitting row...</Text>
            <ProgressCircle
              percent={getPercentage()}
              radius={125}
              borderWidth={24}
              color="#161616"
              shadowColor="#FFF"
              bgColor="#F4327F"
              outerCircleStyle={styles.gaugeBoxShadow}>
              <Pressable onPress={handleAddRow} hitSlop={80}>
                <Text style={styles.currentRowText}>{currentRow}</Text>
                {rows && (
                  <Text style={styles.totalRowsText}>{`of ${rows}`}</Text>
                )}
              </Pressable>
            </ProgressCircle>
            <CircleButton
              text="-"
              onPress={handleSubtractTow}
              style={{...styles.minusButton, ...styles.gaugeBoxShadow}}
              textStyle={styles.minusButtonText}
            />
          </View>
        </View>
        {currentRepeat && repeats && (
          <View style={styles.repeatContainer}>
            <Text
              style={
                styles.repeatHeaderText
              }>{`${currentRepeat} of ${repeats} Repeats`}</Text>
            <View style={styles.dotContainer}>
              <Dots currentRepeat={currentRepeat} totalRepeats={repeats} />
            </View>
            <Pressable
              style={styles.editButton}
              onPress={() => setShowModal(true)}>
              <Text style={styles.repeatHeaderText}>Edit Instructions</Text>
            </Pressable>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: screen.width,
    minHeight: screen.height,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F4327F',
  },
  gaugeContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    maxHeight: 'auto',
    marginBottom: 50,
  },
  repeatContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#161616',
    minWidth: screen.width,
    height: '100%',
    padding: 50,
  },
  repeatHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    color: '#FFF',
    textAlign: 'center',
  },
  dotContainer: {
    width: 250,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 6,
  },
  todo: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFF',
    opacity: 0.5,
  },
  gaugeBoxShadow: {
    shadowColor: '#7D5773',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.46,
    shadowRadius: 4.65,
    elevation: 6,
  },
  currentRowText: {
    fontFamily: 'Avenir',
    fontSize: 80,
    fontWeight: '700',
    color: '#FFF',
  },
  totalRowsText: {
    fontFamily: 'Avenir',
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    color: '#FFF',
    textAlign: 'center',
    padding: 30,
  },
  minusButton: {
    borderRadius: 25,
    backgroundColor: '#FFF',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: -10,
    bottom: -10,
  },
  minusButtonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F4327F',
  },
  editButton: {
    marginTop: 180,
    backgroundColor: '#F4327F',
    padding: 8,
    borderRadius: 24,
    width: 300,
  },
});

export default App;
