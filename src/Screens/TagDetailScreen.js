import * as React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';

function TagDetailScreen(props) {
  const {tag} = props.route.params;

  return (
    <ScrollView style={[styles.wrapper, {padding: 10}]}>
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
