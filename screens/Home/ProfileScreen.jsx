import React, { useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const { width, height } = Dimensions.get('window');
const scale = size => (width / 375) * size;



export default function RegisterScreen() {
  
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" />
            <LinearGradient colors={['#141414', '#141414']} style={styles.container}>

                {/* Header Section */}
                <View style={styles.header}>
              
                </View>

                {/* Main Section */}
                <View style={styles.main}>

                </View>

                {/* Footer Section */}
                <View style={styles.footer}>

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

    },
    main: {
        flex: 7,

    },


    footer: {
        flex: 1,

    },

});
