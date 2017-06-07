import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Contact.actions';

class Contact extends React.Component {
  render() {
    return(
      <div className="right_home">
      <h4>Event Calendar</h4>
        <a href="/calendar#/calendar"><img src="images/calendar.png" width="300"/></a>
          <form id="mailing_list_form">
            <p>Join mailing list:</p>
            <input onChange={(event) => this.props.changeState(event.target.value, 'mailing_list')}
            type="text" placeholder="email" value={this.props.mailing_list}/>
            <button onClick={() => this.props.sendMailingListInfo(this.props.mailing_list)}> Submit </button>
          </form>
          <br/>
          <form id="gig_request">
            <p>Want to play an event/show here? Fill out this booking request form:</p>
            <p>Artist Name/Primary Contact: <input onChange={(event) => this.props.changeState(event.target.value, 'artist_name')}/></p>
            <p>EPK/Website: <input onChange={(event) => this.props.changeState(event.target.value, 'artist_website')}/></p>
            <p>Short Bio/Reason: <input onChange={(event) => this.props.changeState(event.target.value, 'bio')}/></p>
            <p>Email Address: <input onChange={(event) => this.props.changeState(event.target.value, 'email')}/></p>
            <p>Phone: <input onChange={(event) => this.props.changeState(event.target.value, 'phone')}/></p>
            <button onClick={() => this.props.sendGigRequest(this.props.artist_name, this.props.artist_website, this.props.bio, this.props.email, this.props.phone)}> Submit </button>
          </form>
        </div>

    )
  }
}

const ContactContainer = ReactRedux.connect(
  state => state.contact,
  actions
)(Contact);

export default ContactContainer;
