import React, { Component } from 'react';

export default class Resolution extends Component {
  render() {
    let resolution = this.props.resolution;
    return (
      <li>
        { resolution.text }&nbsp;-&nbsp;
        { resolution.complete ? resolution.complete.toString() : 'false' }
      </li>
    );
  }
}