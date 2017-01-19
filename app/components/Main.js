var React = require('react');
var Header = require('./Header');

var styles = {
    MainContainer: {
        width: '100%',
        height: '92%'
    }
};

var Main = React.createClass({
    render: function() {
        return(
        <div style={styles.MainContainer}><Header/> {this.props.children}</div>
        )
    }
});

module.exports = Main;
