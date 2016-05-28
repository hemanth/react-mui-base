'use strict';
import React from 'react';
import {Styles} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let ThemeManager = new Styles.ThemeManager();

export default class BaseComponent extends React.Component {
  constructor () {
    super();
  }
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }
}

BaseComponent.childContextTypes = {
  muiTheme: React.PropTypes.object
};

BaseComponent.contextTypes = {};
