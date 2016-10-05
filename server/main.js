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
  },
  toggleComplete(resolution) {
    Resolutions.update(resolution._id, {
      $set: {
        complete: !resolution.complete
      }
    });
  }
});

Meteor.publish("allResolutions", function(){
  return Resolutions.find();
});