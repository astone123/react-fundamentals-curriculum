var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var styles = {
    form: {
        color: 'black',
        fontSize: '20px'
    },
    input: {
        paddingLeft: '50%',
        paddingRight: '50%'
    },
    button: {
        fontSize: '17px'
    }
};

function GetWeather(props) {
    return (
    <div>
        <form onSubmit={props.onSubmitLocation}>
            <div className="form-group" style={styles.form}>
                <input className="form-control"
                       type="text"
                       placeholder="St. George, Utah"
                       onChange={props.onUpdateLocation}
                       value={props.location}
                        />
                    <br/>
                    <div className="row">
                        <button style={styles.button} type="submit" className="btn btn-lg btn-success">Get Weather</button>
                    </div>
            </div>
        </form>
    </div>
    )
}

GetWeather.PropTypes = {
    location: PropTypes.string.isRequired,
    onUpdateLocation: PropTypes.func.isRequired,
    onSubmitLocation: PropTypes.func.isRequired
};

module.exports = GetWeather;
