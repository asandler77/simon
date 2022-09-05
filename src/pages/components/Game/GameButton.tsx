import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  color: string;
  getColor: (string) => void;
}
export const GameButton = (props: Props) => {
  const {color, getColor} = props;

  const onPress = () => {
    return getColor(color);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.square, {backgroundColor: color}]}
    />
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
