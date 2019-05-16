import React, { Component } from 'react';
import { Container, Header, Left, Right, Body, Button, Icon, Title} from 'native-base';
import TodosImportant from "../resource/TodosImportant";
import OpenDrawer from '../../header/OpenDrawer';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    white: {
        color: "#ffffff"
    },
});

class TodosImportantPage extends Component {
    render() {
        const headerTitle = this.props.navigation.state.routeName;
        return (
            <Container>
                <Header style={{backgroundColor: '#000'}}>
                    <Left>
                        <OpenDrawer navigation={this.props.navigation}/>
                    </Left>
                    <Body>
                        <Title style={styles.white}>{headerTitle}</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='search' style={styles.white}/>
                        </Button>
                    </Right>
                </Header>
                <TodosImportant />
            </Container>
        );
    }
}

export default (TodosImportantPage);
