import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
const scale = size => (width / 375) * size;

const CustomButton = ({ title, onPress, style,buttonText,icon}) => {
  return (
    <TouchableOpacity style={[styles.button, style,]} onPress={onPress}>
      {icon && <Ionicons name={icon} size={20}  style={styles.icon} />}
      <Text style={[styles.buttonText, buttonText]}>{title} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    width: scale(350), 
    height:scale (48),
    borderWidth: 2,
    borderColor: '#186658',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    fontSize: scale(16),
    color: '#fff'
  },
  icon: {
    marginRight: scale(10),
  },
});

export default CustomButton;
