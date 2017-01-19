var React = require('react');
var GetWeatherContainer = require('../containers/GetWeatherContainer');

var styles = {
    bg: {
        position: 'fixed',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',

        minWidth: '100%',
        minHeight: '100%',
        zIndex: '-1'
    },
    bgImage: {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        margin: 'auto',
        minWidth: '50%',
        minHeight: '50%',
        zIndex: '-1'
    },
    container: {
        color: 'white',
        display: 'block',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '55px',
    },
    text: {
      fontSize: '50px'
    },
    getWeather: {
        paddingTop: '12%',
        fontSize: '10px',
        paddingLeft: '25%',
        paddingRight: '25%'
    }
};

var Home = React.createClass({
    render: function() {
        return(
            <div className="text-center" style={styles.container}>
                <div style={styles.getWeather}>
                    <h2 className="lead" style={styles.text}>Enter a City and State</h2>
                    <GetWeatherContainer className="text-center" style={styles.getWeather}/>
                </div>
                <div style={styles.bg}>
                    <img style={styles.bgImage} src="/app/images/pattern.svg" alt=""/>
                </div>
            </div>
        )
    }
});

module.exports = Home;