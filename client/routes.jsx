import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from '/client/layouts/MainLayout.jsx';
import ResolutionsWrapper from '/client/sections/resolutions/ResolutionsWrapper.jsx';
import AboutWrapper from '/client/sections/about/AboutWrapper.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<ResolutionsWrapper />)
    });
  }
});

FlowRouter.route('/about', {
  action() {
    mount(MainLayout, {
      content: (<AboutWrapper />)
    });
  }
});