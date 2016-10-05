import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ResolutionsForm from './ResolutionsForm.jsx';
import Resolution from './Resolution.jsx';

import LoadingText from '/client/partials/LoadingText.jsx';

export default class ResolutionsWrapper extends TrackerReact(React.Component) {
  constructor(){
    super();
    this.state = {
      subscription: {
        resolutions: Meteor.subscribe('userResolutions')
      }
    };
  }

  componentWillUnmount() {
    this.state.subscription.resolutions.stop();
  }

  resolutions() {
    return Resolutions.find().fetch();
  }

  list() {
    let resolutions = this.resolutions();
    if(!resolutions.length && !Session.get('Resolutions.loaded')) {
      return (<LoadingText />)
    } else {
      return (
        <ReactCSSTransitionGroup
          component="ul"
          className="resolutions"
          transitionName="resolutionLoad"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={400}
        >
          {resolutions.map((resolution)=>{
            return (
              <Resolution key={resolution._id} resolution={resolution} />
            );
          })}
        </ReactCSSTransitionGroup>
      )
    }
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
        <ResolutionsForm />
        <div>
          { this.list() }
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}