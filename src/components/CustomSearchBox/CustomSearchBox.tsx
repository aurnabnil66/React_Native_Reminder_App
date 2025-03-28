import React, {FC, useState} from 'react';
import {ICustomSearchBoxProps} from '../../Interfaces/ICustomSearchBoxProps';
import {TextInput, View} from 'react-native';
import Ioncicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import {colors} from '../../theme/colors';
const CustomSearchBox: FC<ICustomSearchBoxProps> = ({
  value,
  onChange,
  placeholder,
  placeholderTextColor,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, isFocused && styles.focused]}>
      <View style={styles.searchBoxInside}>
        <Ioncicons name="search" size={24} color={colors.black} />
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
    </View>
  );
};

export default CustomSearchBox;
