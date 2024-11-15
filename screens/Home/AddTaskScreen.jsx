import React, { useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, ImageComponent } from 'react-native';
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
                <Text style={{color: '#fff', fontFamily: 'regular', fontSize: scale(20),  }}>Hello ,Tena</Text>
                <Image source={require('../../assets/images/Employee 02.png')} style={styles.image}/>

                </View>

                {/* Main Section */}
                <View style={styles.main}>
                <Image source={require('../../assets/images/Homeillustrator.png')} style={styles.image}/>
                <Text style={{fontFamily: 'medium', color: '#fff', fontSize: 20, marginTop: scale(30)}}>What’s Your Plan for Today?</Text>
                <Text style={{fontFamily: 'medium', color: '#A0A0A0', fontSize: 20, marginTop: scale(20)}}>Tap + to add your tasks</Text>
                <Image source={require('../../assets/images/Line.png')} style={styles.image}/>
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
        alignContent: 'center',
        justifyContent: 'center'
    },
    header: {
        flex: 1,
        padding: scale(5),
        width: scale(370),
        flexDirection: 'row', 
        borderColor: '#fff',
        alignSelf: 'center',
        alignItems: 'center',       
        justifyContent: 'space-between',  
      },
      
    image:{
   
    },
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scale(110)

    },


    footer: {
        // flex: 1,

    },

});
