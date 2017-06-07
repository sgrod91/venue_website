import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Home.actions';
import { Link } from 'react-router';
import dateFormat from 'dateformat';
import ContactContainer from './../contact/Contact';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadHomePage();
  }
  render() {
    return (
      <div className="home_page">
        <div className="left_home">
          <h4>This Basement Rocks</h4>
          <img src="images/divebar.jpg" width="300"/>
          <p>Steven's Basement is the best place for live music in Decatur, GA. It doesn't exist yet, but we swear you will love it. We have food, drinks, music, and all of the things that you enjoy.</p>
          <br/>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.104609772917!2d-84.2572856853073!3d33.732110980694216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5aa136e391afb%3A0x1747d506612a5495!2s1990+S+Columbia+Pl%2C+Decatur%2C+GA+30032!5e0!3m2!1sen!2sus!4v1496405323777" width="400" height="350" frameBorder="0" allowFullScreen></iframe>
          <div id="contact_card">
            <p>Address:<br/>1990 South Columbia Pl.<br/>Decatur, GA 30034</p>
            <p>Telephone: (831) 578-0134</p>
            <p>Email: sgrod91@gmail.com</p>

          </div>
          </div>

        <div className="center_home">
        <h4>Upcoming Shows</h4>
          {this.props.shows.map(item =>
            <div id="show_details" key={item.id}>
              <div className="home_date">{dateFormat(new Date(item.date), 'mediumDate')}</div>
              <div className="home_artist_image"><a href={"#/shows/" + item.id}><img src={item.artist_image}/></a></div>
              <div className="home_artist">{item.artist_name}</div>
              <div className="home_show_details">{item.times} show<br/><br/>
              ${item.ticket_price}</div>
            </div>
            )}
        </div>


          <ContactContainer/>

      </div>
    );
  }
}

const HomeContainer = ReactRedux.connect(
  state => state.home,
  actions
)(Home);

export default HomeContainer;
