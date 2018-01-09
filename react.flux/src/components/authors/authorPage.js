'use strict';

var createReactClass = require('create-react-class');
var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var Authors = createReactClass({
    getInitialState: function () {
        return {
            authors: []
        };
    },

    componentDidMount: function () {
        this.setState({ authors: AuthorApi.getAllAuthors( )});
    },

    render: function () {
        return (
        <div>
            <h1>Authors</h1>
            <AuthorList authors={this.state.authors} />
        </div>
        );
    }
});

module.exports = Authors;
