import React, {useState} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const screen = Dimensions.get('screen');

export const Instructions = ({
  prevRows,
  prevCycles,
  setRowsAndCycles,
  showModal,
  closeModal,
}) => {
  const [rows, setRows] = useState(prevRows || '');
  const [cycles, setCycles] = useState(prevCycles || '');

  const saveButtonEnabled = () => rows && cycles;
  const saveButtonText = () =>
    saveButtonEnabled() ? 'Save' : 'Please set rows and repeats';

  const handleSave = () => {
    setRowsAndCycles(parseInt(rows), parseInt(cycles));
    closeModal();
  };

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <KeyboardAvoidingView behavior="position">
          <View style={styles.modalView}>
            <View style={styles.cancelContainer}>
              <TouchableOpacity>
                <Text style={styles.cancelText} onPress={closeModal}>
                  cancel
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputsContainer}>
              <Text style={styles.modalText}>Repeat pattern every...</Text>
              <View>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    selectionColor="#F4327F"
                    keyboardType="number-pad"
                    returnKeyType="done"
                    maxLength={3}
                    onChangeText={setRows}
                    value={rows}
                  />
                  <Text style={styles.inputText}>rows, for</Text>
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    selectionColor="#F4327F"
                    keyboardType="number-pad"
                    returnKeyType="done"
                    maxLength={3}
                    onChangeText={setCycles}
                    value={cycles}
                  />
                  <Text style={styles.inputText}>times</Text>
                </View>
              </View>
            </View>
            <Pressable
              onPress={handleSave}
              disabled={!saveButtonEnabled()}
              style={
                saveButtonEnabled()
                  ? styles.openButton
                  : styles.openButtonDisabled
              }>
              <Text style={styles.textStyle}>{saveButtonText()}</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    flexDirection: 'column',
    top: 100,
    minHeight: screen.height - 100,
    backgroundColor: '#000',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cancelContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  cancelText: {
    fontWeight: '500',
    fontSize: 12,
    letterSpacing: 2,
    color: '#FFF',
  },
  openButton: {
    backgroundColor: '#F4327F',
    borderRadius: 20,
    marginVertical: 20,
    padding: 15,
    width: '100%',
  },
  openButtonDisabled: {
    backgroundColor: '#F4327F',
    borderRadius: 20,
    marginVertical: 20,
    padding: 15,
    width: '100%',
    opacity: 0.75,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputsContainer: {
    alignItems: 'center',
    marginVertical: 50,
  },
  inputContainer: {
    marginTop: 40,
    flexDirection: 'row',
    width: '55%',
  },
  inputText: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 2.7,
    color: '#FFF',
    marginLeft: 25,
  },
  input: {
    textAlign: 'center',
    color: '#F4327F',
    borderBottomColor: '#F4327F',
    borderBottomWidth: 2,
    width: 60,
  },
  modalText: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 2.7,
    color: '#FFF',
    textAlign: 'center',
  },
});
