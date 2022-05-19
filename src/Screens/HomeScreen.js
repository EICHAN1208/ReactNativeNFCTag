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

  const readTag = async () => {
    try {
      // androidはUIを提供していない
      await NfcManager.requestTechnology(NfcTech.Ndef, {
        alertMessage: '読み込む準備ができました',
      });
      const tag = await NfcManager.getTag();
      console.log('Tag found', tag);
      if (tag) {
        navigation.navigate('TagDetail', {tag});
      }
    } catch (error) {
      console.warn('Oops!', error);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  };

  const writeNdef = async () => {
    navigation.navigate('NdefTypeList');
  };

  return (
    <View style={styles.wrapper}>
      <Button onPress={readTag} title="タグ読み取り" />
      <Button onPress={writeNdef} title="タグ書き込みのタイプリストを表示" />
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
