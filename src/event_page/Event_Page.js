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
        <div className="event_page">
          <div id="event_page_left">
            <h3>{this.props.event && this.props.event.artist_name}</h3>
            <h4>{this.props.event && dateFormat(new Date(this.props.event.date), 'mediumDate')}, {this.props.event && this.props.event.times}</h4>
            {this.props.event && <img src={this.props.event.artist_image} width="400"/>}<br/><br/>
          </div>
          <div id="event_page_right">
            <p>{this.props.event && this.props.event.bio}</p><br/><br/>
            <p>Ticket Price: ${this.props.event && this.props.event.ticket_price}</p><br/><br/>
            {this.props.event && this.props.event.underage_show ? null : <p>This show is 21+</p>}
            <button onClick={() => this.props.addToCart(this.props.event.id)}>Purchase Ticket</button>
          </div>
        </div>
      )
    }
}

const EventPageContainer = ReactRedux.connect(
  state => state.event_page,
  actions
)(EventPage);

export default EventPageContainer;
