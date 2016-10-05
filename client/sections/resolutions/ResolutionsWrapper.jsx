import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionsForm from './ResolutionsForm.jsx';
import Resolution from './Resolution.jsx';

import LoadingText from '/client/partials/LoadingText.jsx';

export default class ResolutionsWrapper extends TrackerReact(React.Component) {
  resolutions() {
    return Resolutions.find().fetch();
  }
  list() {
    let resolutions = this.resolutions();
    if(!resolutions.length) {
      return (<LoadingText />)
    } else {
      return (
        <ul className="resolutions">
          {resolutions.map((resolution)=>{
            return (
              <Resolution key={resolution._id} resolution={resolution} />
            );
          })}
        </ul>
      )
    }
  }
  render() {
    return (
      <div>
        <ResolutionsForm />
        <div>
          { this.list() }
        </div>
      </div>
    );
  }
}