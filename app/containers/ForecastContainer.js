var React = require('react');
var Forecast = require('../components/Forecast');
var ForecastHelpers = require('../utils/ForecastHelpers');
var Loading = require('../components/Loading');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var styles = {
    container: {
        paddingTop: '50px',
        paddingLeft: '350px',
        paddingRight: '350px',
        justifyContent: 'centered',
        alignItems: 'center',
        width: 'auto',
        background: 'transparent'
    },
    header: {
        fontWeight: '100',
        fontSize: '70px',
        padding: '0px'
    },
    subHeader: {
        fontSize: '25px',
        fontWeight: '100'
    },
    innerContainer: {
        paddingTop: '75px'
    },
    link: {
        color: 'black',
        textDecoration: 'none'
    }
};

var ForecastContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
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
                if(data) {
                    this.setState({
                        location: this.props.routeParams.location,
                        isLoading: false,
                        data: data.data.list
                    })
                } else {
                    this.context.router.push('/error/' + this.state.location);
                }
            }.bind(this));
    },
    render: function() {
        if(this.state.isLoading === true) {
            return <Loading/>
        } else {
            return (
                <div className="container" style={styles.container}>
                    <div className="header text-center">
                        <h1 style={styles.header}>{this.state.location}</h1>
                        <h3 style={styles.subHeader}>Select a day</h3>
                    </div>
                    <div className="innerContainer" style={styles.innerContainer}>
                        <div className="row text-center">
                            <div className="col-md-3">
                                <Link style={styles.link} to={"/detail/" + this.state.location + '/0'}>
                                    <Forecast
                                        imageURL={"/app/images/weather-icons/" + this.state.data[0].weather[0].icon + ".svg"}
                                        timestamp={this.state.data[0].dt}/>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link style={styles.link} to={"/detail/" + this.state.location + '/1'}>
                                    <Forecast
                                        imageURL={"/app/images/weather-icons/" + this.state.data[1].weather[0].icon + ".svg"}
                                        timestamp={this.state.data[1].dt}/>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link style={styles.link} to={"/detail/" + this.state.location + '/2'}>
                                    <Forecast
                                            imageURL={"/app/images/weather-icons/" + this.state.data[2].weather[0].icon + ".svg"}
                                            timestamp={this.state.data[2].dt}/>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link style={styles.link} to={"/detail/" + this.state.location + '/3'}>
                                    <Forecast
                                        imageURL={"/app/images/weather-icons/" + this.state.data[3].weather[0].icon + ".svg"}
                                        timestamp={this.state.data[3].dt}/>
                                </Link>
                            </div>
                        </div>
                        <br/>
                        <div className="row text-center">
                            <div className="col-md-3">
                                <Link style={styles.link} to={"/detail/" + this.state.location + '/4'}>
                                <Forecast
                                        imageURL={"/app/images/weather-icons/" + this.state.data[4].weather[0].icon + ".svg"}
                                        timestamp={this.state.data[4].dt}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
});

module.exports = ForecastContainer;