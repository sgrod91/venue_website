import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Event_Page.actions';

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
          <h1>{this.props.shows && this.props.shows.artist_name}</h1>
          {this.props.shows && <img src={this.props.shows.artist_image} width="500"/>}<br/><br/>
          ${this.props.shows && this.props.shows.bio}<br/><br/>
          {this.props.shows && this.props.shows.ticket_price}<br/><br/>

          <button onClick={() => this.props.addToCart(this.props.shows.id)}>Purchase Ticket</button>
          </div>
      )
    }
}

const EventPageContainer = ReactRedux.connect(
  state => state.product,
  actions
)(EventPage);

export default EventPageContainer;
