import React from 'react';
import { Text, View } from 'react-native';

class AddTodoPage extends React.Component {
    static navigationOptions = {
        title: 'Add new todo',
        headerStyle: {
            backgroundColor: '#3F51B5',
        },
        headerTintColor: '#fff'
    };
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>ADDTODO!</Text>
        </View>
      );
    }
}

export default AddTodoPage;
