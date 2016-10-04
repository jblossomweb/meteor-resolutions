import React, { Component } from 'react';

export default class LoadingText extends Component {
  render() {
    return (
      <div>
        <i className="fa fa-spinner fa-spin"></i> Loading...
      </div>
    );
  }
}