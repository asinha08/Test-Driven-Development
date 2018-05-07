import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import {JSDOM as jsdom} from 'jsdom';
import chai, {expect} from 'chai';
import chaiJquery from 'chai-jquery';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../src/reducers';
let dom = new jsdom('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;
global.navigator = global.window.navigator;
const $ = _$(window);
chaiJquery(chai, chai.util, $);

function renderComponent(ComponentClass, props = {}, state = {}) {
	const app = (
		<Provider store = {createStore(reducers, state)}>
			<ComponentClass {...props}/>
		</Provider>
	);
	const componentInstance = TestUtils.renderIntoDocument(app);
	return $(ReactDOM.findDOMNode(componentInstance));
}
$.fn.simulate = function (eventName, value) {
	if(value) {
		this.val(value);
	}
	TestUtils.Simulate[eventName](this[0]);
};
export {
	renderComponent, expect
};