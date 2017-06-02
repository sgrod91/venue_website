import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Home.actions';
import { Link } from 'react-router';
import dateFormat from 'dateformat';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadHomePage();
  }
  render() {
    return (
      <div className="home_page">
        <h4>Upcoming Shows</h4>
        {this.props.shows.map(item =>
          <div id="show_details" key={item.id}>
            <div className="home_date">{dateFormat(new Date(item.date), 'mediumDate')}</div>
            <div className="home_artist_image"><a href={"#/shows/" + item.id}><img src={item.artist_image}/></a></div>
            <div className="home_artist">{item.artist_name}</div>
            <div className="home_show_details">{item.times} show, {item.ticket_price}</div>
          </div>
          )}
      </div>
    );
  }
}

const HomeContainer = ReactRedux.connect(
  state => state.home,
  actions
)(Home);

export default HomeContainer;
