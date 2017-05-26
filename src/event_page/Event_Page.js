import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Event_Page.actions';
import dateFormat from 'dateformat';

class EventPage extends React.Component {
  componentDidMount() {
    this.props.getSinglePage(this.props.params.id);
  }
  compoentWillReceiveProps(newProps) {
    console.log('triggered');
    if(this.props.params.id !== newProps.params.id) {
      console.log('conditional triggered');
      this.props.getSinglePage(newProps.params.id);
    }
  }
    render() {
      return(
        <div>
          <h1>{this.props.event && this.props.event.artist_name}</h1>
          <h4>{this.props.event && dateFormat(new Date(this.props.event.date), 'mediumDate')}, {this.props.event && this.props.event.times}</h4>
          {this.props.event && <img src={this.props.event.artist_image} width="400"/>}<br/><br/>
          {this.props.event && this.props.event.bio}<br/><br/>
          Ticket Price: ${this.props.event && this.props.event.ticket_price}<br/><br/>
          {this.props.event && this.props.event.underage_show ? null : <p>This show is 21+</p>}
          <button onClick={() => this.props.addToCart(this.props.event.id)}>Purchase Ticket</button>
          </div>
      )
    }
}

const EventPageContainer = ReactRedux.connect(
  state => state.event_page,
  actions
)(EventPage);

export default EventPageContainer;
