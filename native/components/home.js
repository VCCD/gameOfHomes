import React from 'react';
import { StyleSheet } from 'react-native';
import {Container, Button, Text} from 'native-base'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Text>Welcome To Game of Homes</Text>
        <Button onPress={() => this.props.navigation.navigate('TaskList')} style={styles.button}><Text>Tasks</Text></Button>
        <Button onPress={() => this.props.navigation.navigate('Scores')} style={styles.button}><Text>Scores</Text></Button>
        <Button rounded onPress={() => this.props.navigation.navigate('Login')} style={styles.button}><Text>Login</Text></Button>
        <Button rounded onPress={() => this.props.navigation.navigate('PlayerDetail')} style={styles.button}><Text>PlayerDetail</Text></Button>
        <Button rounded onPress={() => this.props.navigation.navigate('FrequencySelector')} style={styles.button}><Text>FrequencySelector</Text></Button>
        <Button rounded onPress={() => this.props.navigation.navigate('SelectTasks')} style={styles.button}><Text>SelectTasks</Text></Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {

  }
});
