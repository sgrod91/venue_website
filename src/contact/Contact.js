import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Contact.actions';

class Contact extends React.Component {
  render() {
    return(
      <div className="contact_page">
        <div id="contact_card">
          <h4>Telephone:</h4> <p>(831) 578-0134</p>
          <h4>Address:</h4> <p>1990 South Columbia Pl.<br/>Decatur, GA 30034</p>
          </div>
        <div id="location">
          <h4>Location:</h4><br/>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.104609772917!2d-84.2572856853073!3d33.732110980694216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5aa136e391afb%3A0x1747d506612a5495!2s1990+S+Columbia+Pl%2C+Decatur%2C+GA+30032!5e0!3m2!1sen!2sus!4v1496405323777" width="500" height="350" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div id="mailing_list">
          <form id="mailing_list_form">
            <h4>Join mailing list</h4>
            <input onChange={(event) => this.props.changeState(event.target.value, 'mailing_list')}
            type="text" placeholder="email" value={this.props.mailing_list}/>
            <button onClick={() => this.props.sendMailingListInfo(this.props.mailing_list)}> Submit </button>

          </form>
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
      </div>
    )
  }
}

const ContactContainer = ReactRedux.connect(
  state => state.contact,
  actions
)(Contact);

export default ContactContainer;
