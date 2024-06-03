import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SavingsScreen: React.FC = () => {
  const navigation = useNavigation();


  return (
      <View className="flex items-center justify-start pt-10 h-screen flex-col ">
        <Text>This is the savings screen</Text>
    </View>
  );
};

export default SavingsScreen;