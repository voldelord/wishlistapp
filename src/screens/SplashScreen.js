import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React from 'react';
import {Colors} from '../constants';
import imagen from '../assets/image1.jpg';
const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
      <Image source={imagen} resizeMode="contain" style={styles.image} />
      <Text></Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  image: {
    height: 300,
    width: 300,
  },
});
