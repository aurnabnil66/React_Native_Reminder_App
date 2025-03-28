import React, {FC, useState} from 'react';
import {ICustomTextInputProps} from '../../Interfaces/ICustomTextInputProps';
import {TextInput, View, TouchableOpacity} from 'react-native';
import styles from './style';

const CustomTextInput: FC<ICustomTextInputProps> = ({
  value,
  onChange,
  placeholder,
  placeholderTextColor,
  icon,
  onIconPress,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, isFocused && styles.focused]}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={styles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {icon && (
        <TouchableOpacity onPress={onIconPress}>
          <View style={styles.icon}>{icon}</View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;
