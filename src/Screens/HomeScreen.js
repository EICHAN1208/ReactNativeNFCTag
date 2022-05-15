import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import NfcManager, {NfcEvents, NfcTech} from 'react-native-nfc-manager';

function HomeScreen(props) {
  const {navigation} = props;
  const [hasNfc, setHasNfc] = useState(null);

  useEffect(() => {
    async function checkNfc() {
      setHasNfc(await NfcManager.isSupported());
    }

    checkNfc();
  }, []);

  if (hasNfc === null) {
    return null;
  } else if (!hasNfc) {
    return (
      <View style={styles.wrapper}>
        <Text>デバイスがNFCをサポートしていません</Text>
      </View>
    );
  }

  const readTag = () => {
    (async () => {
      await NfcManager.requestTechnology(NfcTech.Ndef);
      const tag = await NfcManager.getTag();
      console.warn('Tag found', tag);
    })()
      .catch(error => {
        console.warn('Oops!', error);
      })
      .finally(() => {
        NfcManager.cancelTechnologyRequest();
      });
  };

  const writeNdef = async () => {
    navigation.navigate('NdefTypeList');
  };

  return (
    <View style={styles.wrapper}>
      <Text>Hello NFC</Text>
      <Button onPress={readTag} title="Read Tag" />
      <Button onPress={writeNdef} title="Write Tag List" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
