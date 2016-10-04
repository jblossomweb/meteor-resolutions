import React from 'react';
import { mount } from 'react-mounter';

import App from '/App.jsx';
import { MainLayout } from '/client/layouts/MainLayout.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<App />)
    });
  }
});