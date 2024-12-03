import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Main from './components/Main/Main';
import Balance from './components/Balance/Balance';
import Help from './components/Help/Help';
import Profile from './components/Profile/Profile';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
   
      <Tab.Navigator
        initialRouteName="Главная"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Главная"
          component={Main}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Баланс"
          component={Balance}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cash-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Поддержка"
          component={Help}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="help-circle-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Профиль"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" color={color} size={size} />
            ),
          }}
        />
        
      </Tab.Navigator>
    
  );
}
