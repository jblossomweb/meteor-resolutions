import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  addResolution(text) {
    Resolutions.insert({
      text: text,
      complete: false,
      createdAt: new Date()
    });
  }
});

Meteor.publish("allResolutions", function(){
  return Resolutions.find();
});