import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionsForm from '/ResolutionsForm.jsx';
import Resolution from '/Resolution.jsx';
import LoadingText from '/LoadingText.jsx';

Resolutions = new Mongo.Collection('resolutions');

export default class App extends TrackerReact(React.Component) {
  resolutions() {
    return Resolutions.find().fetch();
  }
  list() {
    let resolutions = this.resolutions();
    if(!resolutions.length) {
      return (<LoadingText />)
    } else {
      return (<Resolution resolution={resolutions[0]} />)
    }
  }
  render() {
    return (
      <div>
        <h1>My Resolutions</h1>
        <ResolutionsForm />
        <div>
          { this.list() }
        </div>
      </div>
    );
  }
}