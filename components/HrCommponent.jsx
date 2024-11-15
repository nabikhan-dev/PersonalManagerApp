import React from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const scale = size => (width / 375) * size;


const CenteredOr = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>or</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(25),
  
    justifyContent: 'center',
   
  },
  line: {
    width: scale(150),
    height: scale(1),
    backgroundColor: '#979797',
   
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
    fontFamily: 'regular',
    color: '#979797',
  },
});

export default CenteredOr;
