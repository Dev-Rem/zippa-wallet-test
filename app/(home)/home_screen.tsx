import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();


  return (
      <View className="flex items-center justify-start pt-10 h-screen flex-col ">
        <Text>This is the home screen</Text>
    </View>
  );
};

export default HomeScreen;