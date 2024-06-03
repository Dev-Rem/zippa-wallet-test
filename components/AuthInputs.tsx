import React from 'react';
import { TextInput, StyleSheet, TextInputProps, View } from 'react-native';

interface CustomInputProps extends TextInputProps {
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, style, ...props }) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholder={placeholder}
              placeholderTextColor="white"
        style={styles.input}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
        width: '100%',
        maxWidth: '90%',
      height: "9%",
    backgroundColor: 'inherit',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#19c93f',
    color: '#19c93f',
    paddingVertical: 8,
    paddingHorizontal: 10,
      fontSize: 16,
    fontWeight: "bold"
  },
});

export default CustomInput;
