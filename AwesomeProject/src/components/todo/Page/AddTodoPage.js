import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Item, Input, Icon, Left, Body, Right, StyleProvider  } from 'native-base';
import material from '../../../../native-base-theme/variables/material';
import getTheme from '../../../../native-base-theme/components';
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
      color: 'black',
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
      placeholder: 'Todo title'
    },
    description: {
      error: 'Title is required',
      placeholder: 'Todo description',
      multiline: true,
      stylesheet: {
        ...Form.stylesheet,
        controlLabel: {
          normal: {
            color: 'black',
            fontSize: 18,
            marginBottom: 7,
            fontWeight: '600'
          },
          error: {
            color: 'black',
            fontSize: 18,
            marginBottom: 7,
            fontWeight: '600'
          }
        },
        textbox: {
          ...Form.stylesheet.textbox,
          normal: {
            ...Form.stylesheet.textbox.normal,
            height: 100,
            textAlignVertical: 'top',
          },
          error: {
            ...Form.stylesheet.textbox.error,
            height: 100,
            textAlignVertical: 'top',
          },
        },
      },
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
        console.log(value)
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
        <StyleProvider style={getTheme(material)}>
          <Container style={styles.container}>
            <Content padder>
              <Body>
                <Body>
                  <Thumbnail source={{uri: 'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png'}} />
                  <Text style={{fontSize:22}}>Add New Todo</Text>
                </Body>
              </Body>
                <Form 
                  ref={c => this._form = c}
                  type={User} 
                  options={options}/>
                <Button block onPress={this.handleSubmit}>
                  <Text>Submit!</Text>
                </Button>
            </Content>
          </Container>
        </StyleProvider>
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
