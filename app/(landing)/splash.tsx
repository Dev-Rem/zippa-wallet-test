import React, { useEffect } from "react";
import { View, StatusBar, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
        navigation.navigate("(landing)/register");
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex items-center justify-center bg-[#01063d] h-screen">
      <StatusBar barStyle="light-content" />
      <Image source={require("../../assets/images/zippa-wallet-logo.jpeg")} />
    </View>
  );
};

export default SplashScreen;