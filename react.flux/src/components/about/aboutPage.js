'use strict';

var createReactClass = require('create-react-class');
var React = require('react');

var About = createReactClass({
  render: function () {
    return (
      <div>
        <h1>About</h1>
        <p>Technologies:
            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>Flux</li>
              <li>Node</li>
              <li>Gulp</li>
              <li>Browserify</li>
            </ul>
        </p>
      </div>
    );
  }
});

module.exports = About;
