import {View, Text} from 'react-native';

const AlarmScreen = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        flex: 1,
      }}>
      <Text style={{color: 'white', fontSize: 20}}>Alarm Screen</Text>
    </View>
  );
};

export default AlarmScreen;
