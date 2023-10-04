
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Appbar, BottomNavigation } from 'react-native-paper';
import ImageUploader from './ImageUploader';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="LogIn App" />
      </Appbar.Header>
      <View style={{ alignItems: 'center', marginVertical: 16, justifyContent:"flex-start" }}>
        <Image
          source={require('')}
          style={{ width: 120, height: 120, borderRadius: 60 }}
        />
      </View>
      <ImageUploader/>
      <BottomNavigation>
        <BottomNavigation.Item
          icon="home"
          label="Home"
          onPress={() => {}}
        />
        <BottomNavigation.Item
          icon="account"
          label="Profile"
          onPress={() => {}}
        />
        <BottomNavigation.Item
          icon="settings"
          label="Settings"
          onPress={() => {}}
        />
      </BottomNavigation>
    </View>
  );
};

export default HomeScreen;
