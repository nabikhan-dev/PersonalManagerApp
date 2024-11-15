import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <CustomButton
      title="Today"
      style={[
        styles.buttonBase,
        { width: scale(103), height: scale(32) },
        isActive ? styles.active : styles.inactive,
      ]}
      onPress={toggleButton}
    />
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  active: {
    backgroundColor: '#007bff', // Filled button color
    borderWidth: 0,
  },
  inactive: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#007bff', // Outlined button color
  },
  text: {
    color: isActive ? 'white' : '#007bff',
    fontSize: 16,
  },
});

export default App;
