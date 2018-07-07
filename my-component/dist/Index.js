'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _MyComponent = require('../src/Components/MyComponent');

var _MyComponent2 = _interopRequireDefault(_MyComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    return _react2.default.createElement(_MyComponent2.default, null);
};
(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById("root"));