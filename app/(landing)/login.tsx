import React, { useEffect } from "react";
import { View, StatusBar, Text, Image } from "react-native";
import CustomInput from "@/components/AuthInputs";
import CustomButton from "@/components/CustomButton";
import { useNavigation } from "@react-navigation/native";


const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
      <View className="flex items-center justify-start pt-10 bg-[#01063d] h-screen flex-col ">
        <StatusBar barStyle="light-content" />
          <Image source={require("../../assets/images/zippa-wallet-logo.jpeg")} className="" />

          <Text className="font-bold color-white mb-8">WELCOME!</Text>
        <CustomInput placeholder="Username"/>
          <CustomInput placeholder="Password" />
          
          <CustomButton title="Login" onPress={()=>{navigation.navigate("(home)/bottom_nav")}} />
          
          <View className="flex w-[100%] px-5 mt-5 flex-row justify-between">
              <Text className="color-white font-bold">Create Account</Text>
              <Text className="color-white font-bold">Forgot Password?</Text>
          </View>

    </View>
  );
};

export default LoginScreen;