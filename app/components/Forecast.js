var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Moment = require('moment');

var styles = {
    container: {
      background: "transparent"
    },
    image: {
        padding: '5px'
    },
    subtext: {
        fontSize: '30px',
        fontWeight: '100'
    }
};

function Forecast (props) {
    return (
        <div className="conatiner" style={styles.container}>
            <div style={styles.image}>
                <img src={props.imageURL} width="150" height="auto" alt=""/>
            </div>
            <div style={styles.subtext}>
                <h3 style={styles.subtext}>{Moment.unix(props.timestamp).format("dddd, MMM DD")}</h3>
            </div>
        </div>
    )
}

Forecast.PropTypes = {
    imageURL: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
};

module.exports = Forecast;
