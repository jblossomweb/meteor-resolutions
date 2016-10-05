import React, { Component } from 'react';

export default class ResolutionsForm extends Component {
  addResolution(event) {
    event.preventDefault();
    var text = this.refs.resolution.value.trim();

    if(text && text.length) {
      Meteor.call('addResolution', text, (error, data)=>{
        if(error) {
          Bert.alert('Please login first', 'danger', 'growl-top-right');
        } else {
          this.refs.resolution.value = '';
        }
      });
    } else {
      Bert.alert('Blank Resolution is not allowed', 'danger', 'growl-top-right');
    }
  }
  render() {
    return (
      <form className="new-resolution" onSubmit={
        this.addResolution.bind(this)
      }>
        <input 
          type="text" 
          ref="resolution" 
          placeholder="Add a Resolution" 
        />
      </form>
    );
  }
};