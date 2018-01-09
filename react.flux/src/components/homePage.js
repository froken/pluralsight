'use strict'

var createReactClass = require('create-react-class')
var React = require('react')

var Home = createReactClass({
  render: function () {
    return (
      <div className='jumbotron'>
        <h1>Pluralsight Administration</h1>
        <p>React, React Router, and Flux</p>
      </div>
    )
  }
})

module.exports = Home
