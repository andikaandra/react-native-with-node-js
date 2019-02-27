import React, { Component } from 'react';
import { Container, Content, List, Button, Text} from 'native-base';
import Todos from "../resource/Todos";


class TodoPage extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: 
              <Button light onPress={() => navigation.openDrawer()}>
                  <Text> ADD </Text>
              </Button>,
          headerStyle: {
              backgroundColor: '#3F51B5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              fontWeight: 'bold',
          },
        };
    };

    render() {
        return (  
            <Container>
                <Content>
                    <List>
                        <Todos />
                    </List>
                </Content>
                <Content>
                    <Button light onPress={() => this.props.navigation.navigate('AddTodo')}>
                        <Text> ADD </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default (TodoPage);
