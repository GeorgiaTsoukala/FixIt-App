import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AddRouteScreen from "./screens/AddRouteScreen";
import FindRideScreen from "./screens/FindRideScreen";
import HistoryScreen from "./screens/HistoryScreen";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        alignItems: "center",
        borderRadius: 35,
        backgroundColor: "indianred",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          marginBottom: 10,
          marginLeft: 10,
          marginRight: 10,
          elevation: 0,
          borderRadius: 15,
          backgroundColor: "gainsboro",
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons
                name="home"
                size={24}
                style={{
                  alignSelf: "center",
                  color: focused ? "indianred" : "black",
                }}
              />
              <Text
                style={{
                  alignSelf: "center",
                  color: focused ? "indianred" : "black",
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Find a Ride"
        component={FindRideScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons
                name="search"
                size={24}
                style={{
                  alignSelf: "center",
                  color: focused ? "indianred" : "black",
                }}
              />
              <Text
                style={{
                  alignSelf: "center",
                  color: focused ? "indianred" : "black",
                }}
              >
                Find Ride
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add a Route"
        component={AddRouteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons
                name="add"
                size={35}
                style={{
                  alignSelf: "center",
                  color: focused ? "white" : "black",
                }}
              />
            </View>
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons
                name="history"
                size={24}
                style={{
                  alignSelf: "center",
                  color: focused ? "indianred" : "black",
                }}
              />
              <Text
                style={{
                  alignSelf: "center",
                  color: focused ? "indianred" : "black",
                }}
              >
                History
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons
                name="person"
                size={24}
                style={{
                  alignSelf: "center",
                  color: focused ? "indianred" : "black",
                }}
              />
              <Text
                style={{
                  alignSelf: "center",
                  color: focused ? "indianred" : "black",
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
