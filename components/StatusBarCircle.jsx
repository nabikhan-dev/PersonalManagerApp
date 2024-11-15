import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';


const { width, height } = Dimensions.get('window');
const scale = size => (width / 375) * size;

export default function StatusBarCircle() {
  const [value, setValue] = useState(0);

  return (
    <View style={{marginTop: 30}}>
      <CircularProgress
        radius={40}
        value={80}
        textColor='#fff'
        fontSize='20'
        valueSuffix='%'
        inActiveStrokeColor='#259D87'
        activeStrokeColor='#259D87'
        inActiveStrokeOpacity={0.2}
        duration={1500}
      />
    </View>
  );
}

