import {FC, useState} from 'react';
import {View} from 'react-native';
import CustomSearchBox from '../../components/CustomSearchBox/CustomSearchBox';

const HomeScreen: FC = () => {
  const [value, setValue] = useState('');
  return (
    <View>
      <CustomSearchBox
        value={value}
        onChange={setValue}
        placeholder="Search..."
        placeholderTextColor="#888888"
      />
    </View>
  );
};

export default HomeScreen;
