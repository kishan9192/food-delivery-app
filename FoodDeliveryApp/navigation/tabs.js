import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {Home} from '../screens';
import {COLORS, icons} from '../constants';

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  console.log(icons.cutlery);
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style : {
            backgroundColor:'transparent',
            borderTopWidth: 0,
            elevation:0
        }
      }}>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.cutlery}
              resizeMode="contain"
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.search}
              resizeMode="contain"
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Like"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.like}
              resizeMode="contain"
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.user}
              resizeMode="contain"
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
