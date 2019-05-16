import React, { Component } from 'react';
import { Container, Header, Body, Title, Icon, Left, Right, Button } from 'native-base';
import TodosDone from "../resource/TodosDone";
import OpenDrawer from '../../header/OpenDrawer';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    white: {
        color: "#ffffff"
    },
});


class TodoDonePage extends Component {
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
                <TodosDone />
            </Container>
        );
    }
}

export default (TodoDonePage);
