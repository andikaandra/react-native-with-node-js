import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Item, Input, Icon, Left, Body, Right } from 'native-base';
class AddTodoPage extends Component {
    static navigationOptions = {
        title: 'Add new todo',
        headerStyle: {
            backgroundColor: '#3F51B5',
        },
        headerTintColor: '#fff'
    };
    render() {
      return (
        <Container>
          <Content>
            <Card>
              <CardItem>
                <Body>
                  <Body>
                    <Thumbnail source={{uri: 'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png'}} />
                    <Text>Add New Todo</Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Body>
              </CardItem>
              <CardItem>
                <Item floatingLabel success>
                  <Input placeholder='Title'/>
                  <Icon name='checkmark-circle' />
                </Item>
              </CardItem>
              <CardItem>
                <Item floatingLabel success>
                  <Input placeholder='Description'/>
                  <Icon name='checkmark-circle' />
                </Item>
              </CardItem>
            </Card>
          </Content>
        </Container>
      );
    }
}

export default AddTodoPage;
