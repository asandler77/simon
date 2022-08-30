import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GameBoard} from './GameBoard';

export const Game = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('Score');
  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>Game</Text>
      <GameBoard />
      <TouchableOpacity onPress={onPress}>
        <Text>Go to Score</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'grey',
    marginHorizontal: 24,
  },
});
