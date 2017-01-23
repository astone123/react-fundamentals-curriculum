var React = require('react');

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
        fontSize: '50px',
        fontWeight: '100'
    },
};

function NotFound(props) {
    return(
        <div style={styles.container}>
            <div className="text-center">
                <i className="mdi mdi-magnify" style={styles.icon}/>
                <h1 className="lead" style={styles.headerText}>404 Not Found</h1>
                <p style={styles.text}>The page that you requested could not be found!</p>
            </div>
        </div>
    )
}

module.exports = NotFound;