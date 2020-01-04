import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faHome, faHardHat, faBrush, faFilePdf, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebook, faCheck, faHome, faHardHat, faBrush, faFilePdf, faSignInAlt);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
