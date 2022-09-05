import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GameBoard} from './GameBoard';
import {checkIsWin, startTheGame} from './gameLogic';
import {COLORS} from '../../../constants/Colors';
import {FontSize, Spacing} from '../../../constants/UiSize';

export const Game = ({navigation}) => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [clickedColor, setClickedColor] = useState<string>('');
  const [clickedNumber, setClickedNumber] = useState(0);

  useEffect(() => {
    !!clickedColor && setClickedNumber(checkIsWin(clickedColor));
  }, [clickedColor]);

  useEffect(() => {
    isGameStarted && setScore(startTheGame());
  }, [isGameStarted]);
  const onStartGamePress = () => {
    setIsGameStarted(true);
  };

  const onScorePress = () => {
    navigation.navigate('Score');
  };

  const getColor = (color: string) => {
    console.log('getColor...', color);
    setClickedColor(color);
  };

  return (
    <View style={styles.container}>
      <Text>Game</Text>
      <TouchableOpacity onPress={onScorePress}>
        <Text>Go to Score</Text>
      </TouchableOpacity>
      <GameBoard getColor={getColor} />
      <TouchableOpacity style={styles.startButton} onPress={onStartGamePress}>
        <Text style={styles.text}>Start the game</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Score: {score}</Text>
        <Text style={styles.text}>Clicked number: {clickedNumber}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', borderWidth: 1, borderColor: 'red'},
  text: {
    fontSize: FontSize['4XL'],
  },
  startButton: {
    backgroundColor: COLORS.LIGHT_GREEN,
    marginVertical: Spacing.M,
    borderRadius: Spacing.M,
    paddingHorizontal: Spacing.M,
  },
});
