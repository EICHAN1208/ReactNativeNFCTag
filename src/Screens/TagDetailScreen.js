import * as React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import NdefMessage from '../Components/NdefMessage';

function TagDetailScreen(props) {
  const {tag} = props.route.params;
  const ndef =
    Array.isArray(tag.ndefMessage) && tag.ndefMessage.length > 0
      ? tag.ndefMessage[0]
      : null;

  return (
    <ScrollView style={[styles.wrapper, {padding: 10}]}>
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>NDEF</Text>
        {ndef ? <NdefMessage ndef={ndef} /> : <Text>---</Text>}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>TAG OBJECT</Text>
        <Text style={{color: 'gray'}}>{JSON.stringify(tag, null, 2)}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  section: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'white',
    marginBottom: 15,
    color: 'gray',
  },
  sectionLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: 'gray',
  },
});

export default TagDetailScreen;
