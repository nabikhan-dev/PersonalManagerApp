import React, { useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomButton from '../../components/Button';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const scale = size => (width / 375) * size;



export default function RegisterScreen() {

    const navigation = useNavigation();
    const Login = () => {
        navigation.navigate('Login');
      };
       const Signup = () => {
        navigation.navigate('Signup');
      };
    
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" />
            <LinearGradient colors={['#141414', '#141414', '#124B40']} style={styles.container}>

                {/* Header Section */}
                <View style={styles.header}>

                </View>

                {/* Main Section */}
                <View style={styles.main}>
                    <Image source={require('../../assets/images/Logo.png')} style={styles.imageStyle} />
                    <Text style={styles.heading}><Text style={{ color: '#259D87' }}>Welcome</Text> to Personal
                        Manager</Text>
                    <Text style={{ color: '#fff', fontFamily: 'regular', fontSize: scale(16), textAlign: 'center', flexWrap: 'wrap', width: scale(300) }} >
                        Your all-in-one tool for managing tasks and organizing your life</Text>
                </View>


                {/* Footer Section */}
                <View style={styles.footer}>
                    <CustomButton title='LOGIN'
                        style={{ backgroundColor: '#186658' }}  onPress={Login}  />


                    <CustomButton title='Register Now'
                        onPress={Signup}  />

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
        alignItems: 'center',

    },
    imageStyle: {
        width: scale(180),
        height: scale(200),
    },
    main: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    
    },

    heading: {
        fontFamily: "semibold",
        color: '#fff',
        fontSize: scale(30),
        textAlign: 'center',
    
    },

    footer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',

    },

});
