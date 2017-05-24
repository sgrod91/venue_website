import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Home.actions';
import { Link } from 'react-router';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadHomePage();
  }
  render() {
    return (
      <div>
        <h1>Welcome to Stevens Basement!</h1><br/>
        <div id="show_feed">
        <h3>Upcoming Shows:</h3>
        {this.props.shows.map(item =>
          <ul key={item.id}>
            <li>{item.artist_name} - {item.date} - {item.set_times}</li>
            <a href={"#/shows/" + item.id}><img src={item.artist_image} width="300"/></a>
          </ul>
          )}
        </div>
      </div>
    );
  }
}

const HomeContainer = ReactRedux.connect(
  state => state.home,
  actions
)(Home);

export default HomeContainer;
