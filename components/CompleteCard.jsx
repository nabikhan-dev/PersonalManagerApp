import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure you install react-native-vector-icons or expo install @expo/vector-icons

const { width, height } = Dimensions.get('window');
const scale = size => (width / 375) * size;

const TaskCard = () => {
    return (
        <View style={styles.card}>
            <View style={styles.rightRectangle}></View> 
            <View style={styles.iconCircle}>
                <Ionicons name="logo-playstation" size={24} color="#FF00FF" />
            </View>
            <View>
                <Text style={styles.taskNumber}>11 Task</Text>
                <Text style={styles.taskTitle}>Landing page design</Text>
                <Text style={styles.dateText}>Mon, 2024</Text>
            </View>
            <View style={styles.leftRectangle}></View> 
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#D4E3B5', 
        padding: scale(10),
        borderRadius: 12,
        width: scale(140),
        height: scale(130),
        position: 'relative',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        overflow: 'hidden',
        marginLeft: scale(12),
    },
    rightRectangle:{ 
        width: scale(50),
        height: scale(50),
        backgroundColor: '#ECFFA1', 
        position: 'absolute',
        borderRadius: 50,
        top: -15,
        right: -15, 
    }, 
    leftRectangle:{ 
        width: scale(50),
        height: scale(50),
        backgroundColor: '#ECFFA1', 
        position: 'absolute',
        borderRadius: 50,
        bottom: -30,
        left: -30, 
    },
    iconCircle: {
        backgroundColor: '#D3F5A5', 
        borderRadius: 25,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    taskNumber: {
        fontSize: scale(18),
        fontFamily: 'bold',
        color: '#4A4A4A', 
     
    },
    taskTitle: {
        fontSize: scale(14),
        fontFamily: 'regular',
        color: '#6B6B6B', // Subtitle text color
    },
    dateText: {
        fontSize: scale(14),
        color: '#9E9E9E', 
        marginLeft: scale(55),
    },
});

export default TaskCard;
