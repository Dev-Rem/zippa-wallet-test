import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./home_screen";
import SavingsScreen from "./savings";
import Svg, { Path } from "react-native-svg";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
      <Tab.Navigator
          
          screenOptions={({ route }) => ({
              
        tabBarIcon: ({ focused, color, size }) => {

          if (route.name === "Home") {
              focused ? "home" : "home-outline";
          } else if (route.name === "Savings") {
             focused ? "person" : "person-outline";
          }

          // You can return any component that you like here!
          return (
            <Svg
              width={32}
              height={32}
              viewBox="0 0 32 32" // Adjust this based on your SVG dimensions
              fill={ focused ? "#01C853" : "white"}
            >
              <Path
                d={
                  "M26.72 9.09358L19.04 3.72024C16.9467 2.25358 13.7333 2.33358 11.72 3.89358L5.03999 9.10691C3.70665 10.1469 2.65332 12.2802 2.65332 13.9602V23.1602C2.65332 26.5602 5.41332 29.3336 8.81332 29.3336H23.1867C26.5867 29.3336 29.3467 26.5736 29.3467 23.1736V14.1336C29.3467 12.3336 28.1867 10.1202 26.72 9.09358ZM17 24.0002C17 24.5469 16.5467 25.0002 16 25.0002C15.4533 25.0002 15 24.5469 15 24.0002V20.0002C15 19.4536 15.4533 19.0002 16 19.0002C16.5467 19.0002 17 19.4536 17 20.0002V24.0002Z"
                }
              />
            </Svg>
          );
              },
              tabBarShowLabel: false,
           
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Savings" component={SavingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
