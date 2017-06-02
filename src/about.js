import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="about_page">
      <div id="about_left">
        <h4>This Basement Rocks</h4>
        <img src="images/divebar.jpg" width="400"/>
      </div>
      <div id="about_right">
        <p>Steven's Basement is the best place for live music in Decatur, GA. It doesn't exist yet, but we swear you will love it. We have food, drinks, music, and all of the things that you enjoy.</p>
        <p> Want to play a show here? Click <a href="#/contact">here</a> and fill out a short request form. If we have an appropriate date avialable, we will contact you and add you or your band to the event calendar!</p>
      </div>
      </div>
    )
  }
}

export default About;
