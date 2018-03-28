import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App/App';
import SiteRouter from './SiteRouter/SiteRouter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SiteRouter />, document.getElementById('root'));
registerServiceWorker();
