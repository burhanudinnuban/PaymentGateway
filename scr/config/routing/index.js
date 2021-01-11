import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MidtransPayment, Settings, Profile, Account} from '../../pages';
import {Color} from '../../constants/color';
import {color} from 'react-native-reanimated';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: Color.DarkYellow,
        headerStyle: {backgroundColor: Color.DarkGray},
      }}>
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'My profile',
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor={Color.DarkYellow}
      inactiveColor={Color.SoftGray}
      barStyle={{backgroundColor: Color.DarkGray}}>
      <Tab.Screen
        name="Feed"
        component={MidtransPayment}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={focused ? 27 : 23}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={MidtransPayment}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name="bell"
              color={color}
              size={focused ? 27 : 23}
            />
          ),
          tabBarBadge: 5,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={focused ? 27 : 23}
            />
          ),
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
    </Tab.Navigator>
  );
};

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default MyStack;
