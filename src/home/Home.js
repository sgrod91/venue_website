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
      <div>

        <h1>Welcome to Stevens Basement!</h1><br/>
        <div id="home_page">
        <img src="images/divebar.jpg" width="600"/><br/>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        </div>
        <div id="show_feed">
        <h3>Upcoming Shows:</h3>
        {this.props.shows.map(item =>
          <ul key={item.id}>
              <li>{item.artist_name}</li>
              {dateFormat(new Date(item.date), 'mediumDate')}, {item.times}<br/>
            <a href={"#/shows/" + item.id}><img src={item.artist_image}/></a>
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
