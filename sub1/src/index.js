import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { reactBridge } from '@garfish/bridge';
import { reactBridge } from '@garfish/bridge-react-v18';

if (!window.__GARFISH__) {
  ReactDOM.render(<App />, document.getElementById('root'));
}

// export const provider = reactBridge({
//   React,
//   ReactDOM,
//   el: '#root',
//   rootComponent: App,
// });

export const provider = reactBridge({
  el: `#root`,
  rootComponent: App,
  errorBoundary: () => <div>报错了</div>,
});
