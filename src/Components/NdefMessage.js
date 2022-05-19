import React from 'react';
import {Text} from 'react-native';
import {Ndef} from 'react-native-nfc-manager';

function NdefMessage(props) {
  const {ndef} = props;
  const text = Ndef.text.decodePayload(ndef.payload);
  console.log('ndef_type: ', ndef.type);
  const value = ndef.type.reduce(
    (acc, byte) => acc + String.fromCharCode(byte),
    '',
  );
  console.log('value: ', value);

  return <Text style={{color: 'gray'}}>{text}</Text>;
}

export default NdefMessage;
