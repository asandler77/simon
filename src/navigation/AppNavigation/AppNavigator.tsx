import React from 'react';
import {Game} from '../../pages/components/Game/Game';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Score} from '../../pages/components/Score/Score';

export const AppNavigator = () => {
  const RootStack = createNativeStackNavigator();

  return (
    <RootStack.Navigator>
      <RootStack.Screen name={'Game'} component={Game} />
      <RootStack.Screen name={'Score'} component={Score} />
    </RootStack.Navigator>
  );
};
