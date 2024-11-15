import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        let iconName;

        switch (route.name) {
          case 'Home':
            iconName = isFocused ? 'home' : 'home-outline';
            break;
          case 'Calendar':
            iconName = isFocused ? 'calendar' : 'calendar-outline';
            break;
          case 'Notification':
            iconName = isFocused ? 'notifications' : 'notifications-outline';
            break;
          case 'Profile':
            iconName = isFocused ? 'person' : 'person-outline';
            break;
          default:
            iconName = 'home';
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        if (route.name === 'Add Task') {
          return null; // We'll render this tab as a separate component
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabButton}
          >
            <Ionicons
              name={iconName}
              size={24}
              color={isFocused ? '#259D87' : '#D0D0D0'}
            />
            <Text style={{ color: isFocused ? '#259D87' : '#D0D0D0', fontSize: 12 }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => navigation.navigate('Add Task')}
        style={styles.addTaskButton}
      >
        <Ionicons
          name="add-circle"
          size={60}
          color="#259D87"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#343434',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addTaskButton: {
    position: 'absolute',
    bottom: 10,
    left: '50%',
    transform: [{ translateX: -15 }], // Center the button horizontally
    width: 60,
    height: 60,
    marginBottom: 20,
    borderRadius: 35,
    backgroundColor: '#343434',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    zIndex: 1,
  },
});

export default CustomTabBar;
