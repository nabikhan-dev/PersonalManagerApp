import React, { useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Status from '../../components/StatusBarCircle';
import CustomButton from '../../components/Button';
import TaskCard from '../../components/TaskCard';
import CompleteCard from '../../components/CompleteCard'
const { width, height } = Dimensions.get('window');
const scale = size => (width / 375) * size;

export default function RegisterScreen() {

    const [isActive, setIsActive] = useState(false);

    const toggleButton = () => {
        setIsActive(!isActive);

    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" />
            <LinearGradient colors={['#141414', '#141414']} style={styles.container}>

                {/* Header Section */}
                <View style={styles.header}>
                    <Text style={{ color: '#fff', fontFamily: 'regular', fontSize: scale(20), }}>Hello ,Tena</Text>
                    <View style={{ alignContent: 'center', marginRight: scale(40), }}>
                        <Text style={{ color: '#fff', fontFamily: 'regular', fontSize: scale(14), alignSelf: 'center' }}> Let’s Power </Text>
                        <Text style={{ color: '#fff', fontFamily: 'medium', fontSize: scale(20), }}> Up Our <Text style={{ color: '#259D87' }}>Day</Text></Text>
                    </View>
                    <Image source={require('../../assets/images/Employee 02.png')} />
                </View>

                {/* Main Section */}
                <View style={styles.main}>
                    <ImageBackground
                        source={require('../../assets/images/reactagnle.png')}
                        style={styles.image}
                    >
                        <View style={styles.StatusBarContainer}>
                            <View>
                                <Text style={styles.text}>Good, you’re nearly finished with today’s work!</Text>
                                <CustomButton style={{
                                    width: scale(100), height: scale(32), borderRadius: 50, backgroundColor: '#259D87', fontFamily: 'regular'
                                }} title="Task View" />
                            </View>
                            <Status />
                        </View>
                    </ImageBackground>

                    {/* Button Section */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: scale(350), height: scale(70) }}>
                        <CustomButton
                            title="Today"
                            style={[{ width: scale(103), height: scale(32) }, isActive ? styles.active : styles.inactive]}
                            onPress={toggleButton}
                        />
                        <CustomButton
                            title="Today"
                            style={[{ width: scale(103), height: scale(32) }, isActive ? styles.active : styles.inactive]}
                            onPress={toggleButton}
                        />
                        <CustomButton
                            title="Today"
                            style={[{ width: scale(103), height: scale(32) }, isActive ? styles.active : styles.inactive]}
                            onPress={toggleButton}
                        />

                    </View>
                    <ScrollView
                        style={{ flex: 1 }}
                        contentContainerStyle={{ paddingVertical: 0 }}
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={10}
                        decelerationRate='normal'
                    >
                        <View style={{ alignItems: 'center' }}>
                            <TaskCard image={require('../../assets/images/UI.png')} title="UI/UX Designing" time="1AM - 9PM" />
                            <TaskCard image={require('../../assets/images/UI.png')} title="UI/UX Designing" time="1AM - 9PM" />
                            <TaskCard image={require('../../assets/images/UI.png')} title="UI/UX Designing" time="1AM - 9PM" />
                            <TaskCard image={require('../../assets/images/UI.png')} title="UI/UX Designing" time="1AM - 9PM" />
                            <TaskCard image={require('../../assets/images/UI.png')} title="UI/UX Designing" time="1AM - 9PM" />
                            <TaskCard image={require('../../assets/images/UI.png')} title="UI/UX Designing" time="1AM - 9PM" />
                            <TaskCard image={require('../../assets/images/UI.png')} title="UI/UX Designing" time="1AM - 9PM" />
                            <TaskCard image={require('../../assets/images/UI.png')} title="UI/UX Designing" time="1AM - 9PM" />
                        </View>
                    </ScrollView>
                </View>

                {/* Footer Section */}
                <View style={styles.footer}>
                    <Text style={{ color: '#fff', fontFamily: 'medium', fontSize: scale(16), marginTop: scale(10), marginLeft: scale(12) }}>
                        Complete Task
                    </Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <CompleteCard />
                            <CompleteCard />
                            <CompleteCard />
                            <CompleteCard />
                            <CompleteCard />
                            <CompleteCard />
                            <CompleteCard />
                        </View>
                    </ScrollView>
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
    image: {
        width: scale(350),
        height: scale(120),
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        flex: 6,
        alignItems: 'center',

    },
    StatusBarContainer: {
        width: scale(300),
        height: scale(60),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: '#fff',
        width: scale(165),
        fontFamily: 'medium',
        fontSize: scale(14),
    },
    active: {
        backgroundColor: '#259D87',
        borderWidth: 0,
    },
    inactive: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#259D87',
    },
    footer: {
        // flex: 2.2,


    },
});
