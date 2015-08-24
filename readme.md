# react-mui-base

> BaseComponent for [react-material-ui](http://material-ui.com/)


## Install

```
$ npm install --save react-mui-base
```


## Usage

Instead of :

```js
'use strict';
import {Component} from 'react';
import {Styles} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

let ThemeManager = new Styles.ThemeManager();

class MyComponent extends Component {
  constructor() {
    super();
  }
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }
	render() {

	}
}

BaseComponent.childContextTypes = {
  muiTheme: React.PropTypes.object
};

BaseComponent.contextTypes = {};
```

We could do:

```js
import BaseComponent from 'react-mui-base'

class MyComponent extends BaseComponent {
	constructor() {
		super();
	}
	render() {

	}
}
```

## License

MIT © [Hemanth.HM](http://h3manth.com)
