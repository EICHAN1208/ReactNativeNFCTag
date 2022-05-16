import React, {useState} from 'react';
import {
  View,
  TextInput,
  Alert,
  Button,
  StyleSheet,
  Platform,
} from 'react-native';
import NfcManager, {Ndef, NfcError, NfcTech} from 'react-native-nfc-manager';

function NdefWriteScreen() {
  const [text, setText] = useState('');
  const writeNdef = async () => {
    if (!text) {
      return;
    }

    try {
      await NfcManager.requestTechnology(NfcTech.Ndef, {
        alertMessage: '書き込む準備ができました',
      });
      let bytes = null;
      bytes = Ndef.encodeMessage([Ndef.textRecord(text)]);

      if (bytes) {
        await NfcManager.ndefHandler.writeNdefMessage(bytes);
        if (Platform.OS === 'ios') {
          await NfcManager.setAlertMessageIOS('Success');
        }
      }
    } catch (error) {
      if (error instanceof NfcError.UserCancel) {
        console.log('User Canceled');
      } else if (error instanceof NfcError.Timeout) {
        Alert.alert('NFC Session Timeout');
      } else {
        console.warn(error);
        if (Platform.OS === 'ios') {
          NfcManager.invalidateSessionWithErrorIOS(`${error}`);
        } else {
          Alert.alert('NFC Error', `${error}`);
        }
      }
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  };

  return (
    <>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          autoFocus={true}
        />
        <Button
          title="書き込む"
          labelStyle={{fontSize: 20}}
          onPress={writeNdef}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default NdefWriteScreen;
