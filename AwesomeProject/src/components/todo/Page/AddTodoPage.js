import { Container, Content, Text, Button} from 'native-base';
import { addTodos } from '../../../actions/todoActions';
import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  title: t.String,
  description: t.String,
  important: t.Boolean,
});

const formStyles = {
  ...Form.stylesheet,
  textbox: {
    ...Form.stylesheet.textbox,
    normal: {
      ...Form.stylesheet.textbox.normal,
      color: '#000000',
      borderRadius: 0,
      borderColor: '#cacfd2',
      borderWidth: 0,
      marginBottom: 5,
      borderBottomWidth: 1,
    },
    error: {
      ...Form.stylesheet.textbox.error,
      color: '#000000',
      borderRadius: 0,
      borderColor: '#cacfd2',
      borderWidth: 0,
      marginBottom: 5,
      borderBottomWidth: 1,
    },
  },
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'black',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    error: {
      color: '#000000',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    title: {
      error: 'Title is required',
    },
    description: {
      error: 'Description is required',
      // multiline: true,
    },
  },
  stylesheet: formStyles,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

class AddTodoPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
          ...props
      }
    }

    handleSubmit = () => {
      const value = this._form.getValue()
      if (!!value) {
        this.props.onSubmitAddTodo(value);
        if (value.important) {
          this.props.navigation.goBack();
          this.props.navigation.navigate('Important');
        }
        else{
          this.props.navigation.goBack();
        }
      }
    }
    render() {
      return (
        <Container style={styles.container}>
          <Content padder>
              <Form 
                ref={c => this._form = c}
                type={User} 
                options={options}
              />
              <Button block onPress={this.handleSubmit} style={{backgroundColor:'#007aff'}}>
                <Text>Save!</Text>
              </Button>
          </Content>
        </Container>
      );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitAddTodo: (value) => {
      dispatch(addTodos(value))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodoPage);
