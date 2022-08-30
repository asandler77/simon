import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BOARD_WIDTH} from '../../../consts';

interface Props {
  color: string;
}
export const GameButton = (props: Props) => {
  const {color} = props;

  return (
    <TouchableOpacity
      style={[styles.square, {backgroundColor: color}]}></TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '50%',
    // borderColor: 'yellow',
    borderWidth: 1,
    borderRadius: 20,
    paddingTop: '50%',
    margin: 4,
  },
});
