import * as React from 'react';
import {Text, Button} from 'react-native';

function NdefTypeListScreen(props) {
  const {navigation} = props;

  return (
    <Button
      onPress={() => navigation.navigate('NdefWrite', {ndefType: 'TEXT'})}
      title="テキストの書き込み"
    />
  );
}

export default NdefTypeListScreen;
