import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity className={`border-2 border-[#19c93f] py-3 px-20 align-center w-40% ${style}`} onPress={onPress}>
      <Text className='color-white font-bold font-16'>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#19c93f',
    paddingVertical: 10,
    paddingHorizontal: 20,
        alignItems: 'center',
    width:"50%"
  },
  buttonText: {
    color: 'white',
      fontSize: 16,
    fontWeight: "bold"
  },
});

export default CustomButton;
