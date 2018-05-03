import React from 'react';
import { StackNavigator } from 'react-navigation';
import {
  HomeScreen,
  TaskList,
  LoginScreen,
  FrequencySelector,
  Scores,
  SelectTasks,
  PlayerDetail,
  PlayerDetailEdit,
} from './components'

const RootStack = StackNavigator ({
  Home: {
    screen: HomeScreen
  },
  TaskList: {
    screen: TaskList
  },
  Scores: {
    screen: Scores
  },
  Login: {
    screen: LoginScreen
  },
  PlayerDetail: {
    screen: PlayerDetail
  },
  PlayerDetailEdit: {
    screen: PlayerDetailEdit
  },
  FrequencySelector: {
    screen: FrequencySelector
  },
  SelectTasks: {
    screen: SelectTasks
  }
})

export default RootStack

