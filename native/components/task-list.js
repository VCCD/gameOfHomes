import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Container, Header, Content, Button, ActionSheet} from 'native-base'
import TaskCard from './task-card'


let dummyTasks = [
  {id: 1, task: 'Clean bathroom', daysSinceCompleted: 6, pts: 7},
  {id: 2, task: 'Take out trash', daysSinceCompleted: 1, pts: 0},
  {id: 3, task: 'Vacuum living room', daysSinceCompleted: 10, pts: 10},
  {id: 4, task: 'Sweep kitchen', daysSinceCompleted: 2, pts: 1},
  {id: 5, task: 'Random task 1', daysSinceCompleted: 16, pts: 17},
  {id: 6, task: 'Random task 2', daysSinceCompleted: 11, pts: 20},
  {id: 7, task: 'Random task 3', daysSinceCompleted: 13, pts: 12},
  {id: 8, task: 'Random task 4', daysSinceCompleted: 7, pts: 19},
]

const BUTTONS = [
  "Completed",
  "Cancel"
];
const CANCEL_INDEX = 1;

export default class TaskList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: {},
    }
  }

  static navigationOptions = {
    title: 'Current Tasks'
  }

  handleClick = (clickedTask) => {
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        title: clickedTask.task
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          clickedTask.daysSinceCompleted = 0
          clickedTask.pts = 0
          dummyTasks = dummyTasks.map(task => (task.id === clickedTask.id ? clickedTask : task))
        }
      }
    )
  }

  render() {
    const sortedTasks = dummyTasks.sort((a,b) => b['pts'] - a['pts'])
    return (
      <Container style={styles.list}>
          <Content>
          {sortedTasks.map(task => {
            return (
              <TaskCard key={task.id} task={task} handleClick={this.handleClick} />
            )
          })}
          <Button onPress={() => this.handleClick()}><Text>Click</Text></Button>
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});