import React, { Component } from 'react';

export default class Resolution extends Component {
  toggleChecked() {
    Meteor.call('toggleComplete', this.props.resolution);
  }
  deleteResolution() {
    Meteor.call('deleteResolution', this.props.resolution._id);
  }
  render() {
    let resolution = this.props.resolution;
    return (
      <li>
        <input
          type="checkbox"
          className="pointer"
          readOnly={true}
          checked={resolution.complete}
          onClick={this.toggleChecked.bind(this)}
        />&nbsp;
        
        <span
          className={resolution.complete ? "strikeout pointer" : "pointer"}
          onClick={this.toggleChecked.bind(this)}
        >{ resolution.text }</span>
        
        <button
          className="pointer btn-cancel"
          onClick={this.deleteResolution.bind(this)}
        >&times;</button>
      </li>
    );
  }
}