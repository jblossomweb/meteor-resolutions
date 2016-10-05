import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  addResolution(text) {
    if(!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    if(!text || !text.length) {
      throw new Meteor.Error('length-required');
    }
    Resolutions.insert({
      text: text,
      complete: false,
      userId: Meteor.userId(),
      createdAt: new Date()
    });
  },
  toggleComplete(resolution) {
    if(!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    if(Meteor.userId() !== resolution.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Resolutions.update(resolution._id, {
      $set: {
        complete: !resolution.complete
      }
    });
  },
  deleteResolution(resolution) {
    if(!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    if(Meteor.userId() !== resolution.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Resolutions.remove(resolution._id);
  }
});

Meteor.publish("userResolutions", function(){
  return Resolutions.find({
    userId: this.userId
  });
});