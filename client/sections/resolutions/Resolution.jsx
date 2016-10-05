import React, { Component } from 'react';

export default class Resolution extends Component {
  toggleChecked() {
    Meteor.call('toggleComplete', this.props.resolution);
  }
  render() {
    let resolution = this.props.resolution;
    return (
      <li>
        <input
          type="checkbox"
          readOnly={true}
          checked={resolution.complete}
          onClick={this.toggleChecked.bind(this)}
        />&nbsp;
        { resolution.text }&nbsp;-&nbsp;
        { resolution.complete ? resolution.complete.toString() : 'false' }
      </li>
    );
  }
}