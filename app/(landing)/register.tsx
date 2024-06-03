import React, { useEffect } from "react";
import { View, StatusBar, Text, Image } from "react-native";
import CustomInput from "@/components/AuthInputs";
import CustomButton from "@/components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const RegistrationScreen: React.FC = () => {
  const navigation = useNavigation();


  return (
      <View className="flex items-center justify-start pt-10 bg-[#01063d] h-screen flex-col ">
        <StatusBar barStyle="light-content" />
          <Image source={require("../../assets/images/zippa-wallet-logo.jpeg")} className="" />

          <Text className="font-bold color-white mb-8">REGISTER!</Text>
          <CustomInput placeholder="Email" />
        <CustomInput placeholder="Username"/>
          <CustomInput placeholder="Password" />
          <CustomInput placeholder="Confirm Password" />
          
          <CustomButton title="Register" onPress={() => { }} />
          <CustomButton title="Login" onPress={()=>{navigation.navigate("(landing)/login")}} style="border-0"/>
    </View>
  );
};

export default RegistrationScreen;