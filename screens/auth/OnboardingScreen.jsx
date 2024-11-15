import React, { useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const scale = size => (width / 375) * size;

export default function OnboardingScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigation = useNavigation();

  const steps = [
    {
      image: require('../../assets/images/onBoardingimg1.png'),
      text: 'Manage your tasks',
      title: 'Easily plan your life with Do Me, your free personal manager!',
    },
    {
      image: require('../../assets/images/onBoardingimg2.png'),
      text: 'Set Your Daily Routine',
      title: 'Organize and manage your daily tasks to achieve your goals.',
    },
    {
      image: require('../../assets/images/onBoardingimg3.png'),
      text: 'Manage Your Tasks',
      title: 'Keep track of your tasks easily and get things done on time.',
    },
  ];
// Next Button Of the OnbBoarding Screen
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigation.navigate('Register');
    }
  };
// Back Button Of the OnBoarding Screen
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
// Skip Button Of the Register Screen
  const skipButton = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={['#141414', '#141414', '#124B40']} style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.skipButton} onPress={skipButton}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>

        {/* Main Section */}
        <View style={styles.main}>
          <Image source={steps[currentStep].image} style={styles.image} />
          <Text style={styles.text}>{steps[currentStep].text}</Text>
          <Text style={styles.title}>{steps[currentStep].title}</Text>
        </View>

        {/* Footer Section */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.buttonBack} onPress={handleBack} disabled={currentStep === 0}>
            <Ionicons name="chevron-back-outline" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.indicatorContainer}>
            {steps.map((step, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  {
                    backgroundColor: index === currentStep ? '#fff' : 'rgba(255, 255, 255, 0.5)',
                    width: index === currentStep ? 25 : 6,
                  },
                ]}
              />
            ))}
          </View>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Ionicons name="chevron-forward-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  skipButton: {
    padding: 8,
  },
  skipText: {
    color: '#fff',
    fontSize: 16,
  },
  main: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: scale(380),
    height: scale(200),
    resizeMode: 'contain',
    marginBottom: 90,
  },
  text: {
    color: '#fff',
    fontSize: scale(20),
    textAlign: 'center',
  },
  title: {
    width: scale(300),
    color: '#fff',
    fontSize: scale(16),
    textAlign: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  button: {
    padding: scale(10),
    borderRadius: 100,
    backgroundColor: '#3AD1B5',
  },
  buttonBack: {
    padding: scale(8),
    borderRadius: 100,
    borderColor: '#DEF7F3',
    borderWidth: 1,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator: {
    width: 10,
    height: 6,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
