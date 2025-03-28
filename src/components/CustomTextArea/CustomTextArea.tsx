import React, {FC, useState} from 'react';
import {ICustomTextAreaProps} from '../../Interfaces/ICustomTextAreaProps';
import {TextInput, View, TouchableOpacity} from 'react-native';
import styles from './style';

const CustomTextArea: FC<ICustomTextAreaProps> = ({
  value,
  onChange,
  placeholder,
  placeholderTextColor,
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
    </View>
  );
};

export default CustomTextArea;
