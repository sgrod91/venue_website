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
      <h1>Welcome to Venue!</h1>
      {this.props.shows.map(item =>
        <ul key={item.id}>
          <li>{item.artist_name}</li>
          {this.props.shows && <img src={this.props.shows.artist_image} width="300"/>}
        <li><Link to={"/shows/" + item.id}> {item.artist_name} Page</Link></li>
        </ul>
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
