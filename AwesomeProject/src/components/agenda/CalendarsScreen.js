import { connect } from 'react-redux';
import React, { Component } from 'react';
import {Agenda} from 'react-native-calendars';
import { Text, View, StyleSheet, InteractionManager } from 'react-native';
import AgendaFabs from '../fab/AgendaFabs';
import { Container, Content } from 'native-base';
import { fetchAgendas } from "../../actions/agendaActions";
import SpinnerLoad from '../spinner/SpinnerLoad';

class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      agendas: {},
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.props.dispatch(fetchAgendas());
    });

    const agendaItems = {};
      
    (this.props.agendas).forEach(agenda => {
      agendaItems[agenda.date_start] = agenda;
    });

    this.setState({
      agendas: agendaItems
    });
  }

  shouldComponentUpdate (nextProps) {
    return nextProps.agendas !== this.props.agendas
  }

  render() {
    console.log(this.state.agendas)
    if (this.props.error) {
        return (
          <Container>
            <Content contentContainerStyle={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Error</Text>
            </Content>
          </Container>
        );
    }
    if (this.props.loading) {
        return (
            <SpinnerLoad />
        );            
    }

    const today = new Date()
    const now = today.getFullYear()+'-'+ ("0" + (today.getMonth() + 1)).slice(-2) +'-'+ ("0" + today.getDate()).slice(-2)
    return (
      <Container>
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          selected={now}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          displayLoadingIndicator
        />
        <AgendaFabs navigation={this.props.navigation}/>
      </Container>
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          // const numItems = Math.floor(Math.random() * 5);
          // const numItems = 1;
          // for (let j = 0; j < numItems; j++) {
          //   this.state.items[strTime].push({
          //     name: 'Item for ' + strTime,
          //     height: Math.max(50, Math.floor(Math.random() * 150))
          //   });
          // }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      
      Object.keys(this.state.items).forEach(key => {
        newItems[key] = this.state.items[key];
      });

      this.setState({
        items: newItems
      });
    }, 1000);
    console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text style={styles.horizontalLine} ></Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30,
  },
  horizontalLine : {
      borderBottomColor: '#e3dbdb',
      borderBottomWidth: 1
  }
});

const mapStateToProps = state => ({
  agendas: state.agenda.items,
  loading: state.agenda.loading,
  error: state.agenda.error
});

export default connect(mapStateToProps)(CalendarScreen);