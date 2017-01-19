var React = require('react');
var GetWeather = require('../components/GetWeather');

var GetWeatherContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {
         location: ''
        }
    },
    handleUpdateLocation: function(e) {
        this.setState({
            location: e.target.value
        })
    },
    handleSubmitLocation: function(e) {
        e.preventDefault();
        this.context.router.push('/forecast/' + this.state.location);
    },
  render: function() {
      return (
        <GetWeather
            location={this.state.location}
            onUpdateLocation={this.handleUpdateLocation}
            onSubmitLocation={this.handleSubmitLocation}/>
      )
  }
});

module.exports = GetWeatherContainer;
