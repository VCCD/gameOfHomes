import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Button, Text } from 'native-base'
import t from 'tcomb-form-native'
import { connect } from 'react-redux'
import { updateUser } from '../store'

const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //or any other regexp
  return reg.test(email);
});

const UserEdit = t.struct({
  firstName: t.String,
  lastName: t.String,
  email: Email,
})

const Form = t.form.Form

const options = {
  fields: {
    firstName: {
      error: 'First name cannot be empty',
    },
    lastName: {
      error: 'Last name cannot be empty'
    },
    email: {
      error: 'Insert a valid email'
    },
  }
}

class PlayerDetailEdit extends React.Component {
  static navigationOptions = {
    title: 'Edit'
  }

  handleSubmit = async () => {
    const { id } = this.props.user
    const form = this._form.getValue()
    if (form) this.props.updateUserInfo(id, form)
  }

  value = {
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    email: this.props.user.email,
  }

  render() {
    return (
      <Container>
        <Content style={styles.form}>
          <Form
            ref={c => { this._form = c }}
            type={UserEdit}
            value={this.value}
            options={options}
          />
          <Button full onPress={this.handleSubmit} style={styles.button}>
            <Text style={styles.titleText}>Update</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapState = state => {
  const { user } = state
  return { user }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    updateUserInfo: (userId, form) => {
      dispatch(updateUser(userId, form))
      ownProps.navigation.navigate('PlayerDetail')
    }
  }
}

export default connect(mapState, mapDispatch)(PlayerDetailEdit)

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  button: {
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B9EA5',
  },
  titleText: {
    color: '#F5EE9E',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
