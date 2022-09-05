import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {GameButton} from './GameButton';

interface Props {
  getColor: (string) => void;
}
export const GameButtons = (props: Props) => {
  const {getColor} = props;

  const DATA = [
    {id: 1, color: 'red'},
    {id: 2, color: 'green'},
    {id: 3, color: 'yellow'},
    {id: 4, color: 'blue'},
  ];

  const renderItem = ({item}) => {
    const backgroundColor = item.color;
    return <GameButton color={backgroundColor} getColor={getColor} />;
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      columnWrapperStyle={styles.row}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-around',
    borderWidth: 1,
  },
});
