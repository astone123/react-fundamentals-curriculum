var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Forecast = require('./Forecast');
var ForecastHelpers = require('../utils/ForecastHelpers');
var Loading = require('./Loading');

var styles = {
    container: {
        background: "transparent",
        fontSize: '100px'
    },
    image: {
        fontSize: '80px',
        padding: '5px'
    },
    subtextContainer: {
      paddingTop: '25px'
    },
    subtext: {
        fontSize: '35px',
        fontWeight: '100'
    }
};

var Detail = React.createClass({
    getInitialState: function() {
        return {
            location: this.props.routeParams.location,
            isLoading: true,
            data: []
        }
    },
    componentDidMount: function() {
        ForecastHelpers.getForecastData(this.state.location)
            .then(function(data) {
                console.log(data.data.list);
                this.setState({
                    location: this.props.routeParams.location,
                    isLoading: false,
                    data: data.data.list[this.props.routeParams.index]
                })
            }.bind(this));
    },
    render: function() {
        if(this.state.isLoading === true) {
            return <Loading/>
        } else {
            return (
                <div className="conatiner text-center" style={styles.container}>
                    <Forecast
                        imageURL={"/app/images/weather-icons/" + this.state.data.weather[0].icon + ".svg"}
                        timestamp={this.state.data.dt}/>
                    <div style={styles.subtextContainer}>
                        <h3 style={styles.subtext}>{this.state.location}</h3>
                        <h3 style={styles.subtext}>{this.state.data.weather[0].description}</h3>
                        <h3 style={styles.subtext}>min temp: {Math.round(this.state.data.temp.min)} degrees</h3>
                        <h3 style={styles.subtext}>max temp: {Math.round(this.state.data.temp.max)} degrees</h3>
                        <h3 style={styles.subtext}>humidity: {Math.round(this.state.data.humidity)}</h3>
                    </div>
                </div>
            )
        }
    }
});


module.exports = Detail;
