import { View, Text,StyleSheet,Dimensions, TextInput } from 'react-native'
import React from 'react'


const { width } = Dimensions.get('window');
const scale = size => (width / 375) * size;
export default function InputComponent(props) {
  return (
    <View style={props.style}>
    <Text style={styles.label}>{props.label}</Text>
    <TextInput style={styles.input} placeholder={props.placeholder}  placeholderTextColor="#888" placeholderFamily='regular'/>
    </View>
  )
}
const styles = StyleSheet.create({
    
    label: {
        fontSize: scale(16) ,
        marginBottom: scale(5),
        color: 'rgba(255, 255, 255, 0.87)',
        fontFamily: 'regular'
      },
      input: {
        width: scale(350),
        backgroundColor: '#202020',
        padding: scale(10),
        borderRadius: 4,
        color: '#535353',
      },
  
})