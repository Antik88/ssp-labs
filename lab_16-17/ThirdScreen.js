import React from 'react';
import { Button, View } from 'react-native';
import FadeInView from './FadeInView';

const ThirdScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FadeInView text="Страница 3"/>
      <Button title="Назад" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ThirdScreen;