import { Container, Content, Text, Button  } from 'native-base';
import { addTodos } from '../../actions/todoActions';
import React, { PureComponent } from 'react';
import { StyleSheet} from 'react-native';
import { addAgendas } from '../../actions/agendaActions';
import { connect } from 'react-redux';
import t from 'tcomb-form-native';
import moment from 'moment';

const Form = t.form.Form;

const User = t.struct({
  'event': t.String,
  'description': t.String,
  // 'allday': t.Boolean,
  'date': t.Date,
  'dateEnd': t.Date,
  'time': t.Date,
  'timeEnd': t.Date,
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
      marginBottom: 10,
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

const today = new Date()
const now = today.getFullYear()+'-'+ ("0" + (today.getMonth() + 1)).slice(-2) +'-'+ ("0" + today.getDate()).slice(-2)

var options = {
  fields: {
    event: {
      error: 'Title is required',
    },
    description: {
      error: 'Description is required',
    },
    // 'allday': {
    //   label: 'All Day',
    // },
    'date': {
      mode: 'date',
      label: 'Date',
      config: {
        format: (date) => moment(date).format('YYYY-MM-DD'), 
        defaultValueText: now,
      },
    },
    'dateEnd': {
      mode: 'date',
      auto: 'none',
      config: {
        format: (date) => moment(date).format('YYYY-MM-DD'), 
        defaultValueText: now,
      },
    },
    'time': {
      mode: 'time',
      label: 'Time',
      config: {
        format: (time) => moment(time).format('HH:mm'), 
        defaultValueText: 'Time start',
      },
    },
    'timeEnd': {
      mode: 'time',
      config: {
        format: (time) => moment(time).format('HH:mm'), 
        defaultValueText: 'Time end',
      },
      auto: 'none'
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

class AddNewAgenda extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        ...props,
        value: null,
        options: options,
      }
    }

    onChange = (value) => {
      this.setState({value})
    }

    handleSubmit = () => {
      const value = this._form.getValue()
      if (!!value) {
        this.props.onSubmitAddAgenda(value);
        this.props.navigation.goBack();
      }
    }

    render() {
      return (
        <Container style={styles.container}>
          <Content padder>
              <Form 
                ref={c => this._form = c}
                type={User} 
                value={this.state.value}
                options={this.state.options}
                onChange={this.onChange}
                />
              <Button block onPress={this.handleSubmit} style={{backgroundColor:'#007aff'}}>
                <Text>Submit!</Text>
              </Button>
          </Content>
        </Container>
      );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitAddAgenda: (value) => {
      dispatch(addAgendas(value))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddNewAgenda);
