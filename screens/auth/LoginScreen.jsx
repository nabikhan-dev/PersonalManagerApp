import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Input from '../../components/InputComponent';
import CustomButton from '../../components/Button';
import Hr from '../../components/HrCommponent';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const scale = size => (width / 375) * size;

export default function RegisterScreen() {
    const navigation = useNavigation(); // Call useNavigation inside the function component

    const handleBack = () => {
        navigation.navigate('Register')
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" />
            <LinearGradient colors={['#141414', '#141414', '#124B40']} style={styles.container}>
                <KeyboardAvoidingView
                    style={styles.main}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
                >
                    {/* Header Section */}
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.headerButton} onPress={handleBack}>
                            <Ionicons name="chevron-back-outline" size={20} color="white" />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Login</Text>
                    </View>

                    {/* Main Section */}
                    <View style={styles.inputContainer}>
                        <Input label="Email" placeholder="Enter Your Email" />
                        <Input
                            label="Password"
                            placeholder="Enter Your Password"
                            style={{ paddingTop: scale(30) }}
                        />

                        <TouchableOpacity>
                            <Text style={{
                                color: '#3AD1B5',
                                borderBottomWidth: 1,
                                borderColor: '#186658',
                                marginLeft: scale(260),
                                marginTop: scale(10),
                            }}>
                                Forget Password
                            </Text>
                        </TouchableOpacity>
                        <CustomButton
                            title="LOGIN"
                            style={{ backgroundColor: '#186658', marginTop: scale(40) }}
                            onPress={() => {
                                navigation.navigate('Main')
                            }}
                        />
                        <Hr />
                        <CustomButton
                            title="Sign in with Google"
                            style={{ borderColor: '#fff', borderWidth: .5, marginTop: scale(20), fontFamily: 'regular', fontSize: scale(16) }}
                            onPress={() => {
                                // Handle Google sign-in logic here
                            }}
                            icon="logo-google" // Add the Google icon
                        />
                    </View>

                    {/* Footer Section */}
                    <View style={styles.footer}>

                        <View style={styles.footerText}>
                            <Text style={{
                                color: '#979797',
                                fontSize: scale(14),
                                fontFamily: 'medium',
                              
                            }}>
                                Don't have an account?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: scale(14),
                                    borderBottomWidth: 1,
                                    borderColor: '#fff',
                                    fontFamily: 'medium'
                                }}> Register Now
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </KeyboardAvoidingView>
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
        marginVertical: scale(40),
        justifyContent: 'space-evenly',
        paddingTop: scale(30),
        paddingLeft: scale(15),
    },
    headerButton: {
        width: scale(27),
        marginVertical: scale(10),
        height: scale(27),
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'semibold',
        fontSize: scale(25),
        color: '#fff',
        marginTop: scale(20)
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    footerText: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: scale(100),

    },
});
