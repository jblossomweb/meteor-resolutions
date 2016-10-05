import React from 'react';
import { mount } from 'react-mounter';

import ResolutionsWrapper from '/client/sections/resolutions/ResolutionsWrapper.jsx';
import { MainLayout } from '/client/layouts/MainLayout.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<ResolutionsWrapper />)
    });
  }
});