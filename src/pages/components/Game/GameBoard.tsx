import React from 'react';
import {GameButtons} from './GameButtons';

interface Props {
  getColor: (string) => void;
}

export const GameBoard = (props: Props) => {
  const {getColor} = props;
  return <GameButtons getColor={getColor} />;
};
