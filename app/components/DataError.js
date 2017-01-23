var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var styles = {
    container: {
        paddingTop: '10%',
        marginLeft: '10%',
        marginRight: '10%'
    },
    headerText : {
        fontSize: '100px',

    },
    icon: {
        fontSize: '100px'
    },
    text: {
        fontSize: '40px',
        fontWeight: '100',
        paddingBottom: '20px'
    },
    button: {
        padding: '15px',
        fontSize: '25px',
        fontWeight: '100'
    }
};

function DataError(props) {
    return(
        <div style={styles.container}>
            <div className="text-center">
                <i className="mdi mdi-alert-circle-outline" style={styles.icon}/>
                <h1 className="lead" style={styles.headerText}>Error</h1>
                <p style={styles.text}>There was a problem gathering forecast data for {props.routeParams.location}!
                Please make sure that you enter a valid city and state.</p>
                <Link to="/">
                    <button style={styles.button} className="btn btn-primary">Try Again</button>
                </Link>
            </div>
        </div>
    )
}

module.exports = DataError;