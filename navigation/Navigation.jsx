import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import { View, Text } from 'react-native';

// Import screens
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import CalendarScreen from '../screens/Home/CalendarScreen';
import AddTaskScreen from '../screens/Home/AddTaskScreen';
import NotificationScreen from '../screens/Home/NotificationScreen';
import ProfileScreen from '../screens/Home/ProfileScreen';

// Import custom tab bar
import CustomTabBar from '../components/TabBar'; // Make sure this file is correct

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Add Task" // Set 'Home' as the default tab when the app starts
    tabBar={(props) => <CustomTabBar {...props} />}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Calendar"
      component={CalendarScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Notification"
      component={NotificationScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Add Task"
      component={AddTaskScreen}
      options={{
        tabBarButton: () => null, // Hide default tab button for 'Add Task'
        headerShown: false
      }}
    />
  </Tab.Navigator>
);

const MainNavigator = () => {
  const [fontsLoaded] = useFonts({
    regular: require("../assets/Fonts/Poppins-Regular.ttf"),
    medium: require("../assets/Fonts/Poppins-Medium.ttf"),
    semibold: require("../assets/Fonts/Poppins-SemiBold.ttf"),
    bold: require("../assets/Fonts/Poppins-Bold.ttf"),
    extrabold: require("../assets/Fonts/Poppins-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
