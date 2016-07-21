import './less/main.less';
import _ from 'underscore';

import React from 'react';
import { render } from 'react-dom';
import configureStore from './store';
import {loadQuestions} from './modules/questionModule';
//import {Provider} from 'react-redux';
//import {initConsulta} from './actions/consultaMedicaActions';
//import { Router, hashHistory } from 'react-router';
//import routes from './routes';

const store = configureStore();

store.dispatch(loadQuestions());

let alt = store.getState();
debugger;

//window._ = _;
/*
render(
	<Provider store={store}>
		<Router history={hashHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);
*/