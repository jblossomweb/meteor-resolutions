import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class AboutWrapper extends Component {

  loginOpen() {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

  loginButton() {
    return (
      <button onClick={ this.loginOpen }>Login / Sign Up</button>
    )
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="route"
        transitionEnterTimeout={600}
        transitionLeaveTimeout={400}
        transitionAppearTimeout={600}
        transitionAppear={true}
      >
        <h1>About Us</h1>
        <p>
          Lorizzle ipsum dolizzle sit amizzle, consectetuer adipiscing. Nullam shizzle my nizzle crocodizzle velizzle, shiz volutpat, suscipizzle quis, gravida vizzle, arcu. Pellentesque eget tortor. Sizzle erizzle. Yo at dolor shiz shizzlin dizzle tempizzle my shizz. Maurizzle that's the shizzle nibh et shiz. Get down get down in my shizz. Pellentesque sure rhoncus bizzle. In i'm in the shizzle crazy sure that's the shizzle. Sizzle dapibizzle. Curabitizzle tellizzle i saw beyonces tizzles and my pizzle went crizzle, gangsta own yo', i'm in the shizzle break yo neck, yall, eleifend break yo neck, yall, nunc. Stuff suscipit. Integer daahng dawg velit sed own yo'.
        </p>
        { this.loginButton() }
      </ReactCSSTransitionGroup>
    )
  }
}