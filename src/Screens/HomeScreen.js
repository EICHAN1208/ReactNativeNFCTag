import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import NfcManager, {NfcEvents, NfcTech} from 'react-native-nfc-manager';

function HomeScreen(props) {
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
        <Text>You device doesn't support NFC</Text>
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

  return (
    <View style={styles.wrapper}>
      <Text>Hello NFC</Text>
      <Button
        onPress={readTag}
        title="Read Tag"
        color="blue"
        accessibilityLabel="Learn more about this purple button"
      />
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