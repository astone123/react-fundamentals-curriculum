var React = require('react');
var GetWeatherContainer = require('../containers/GetWeatherContainer');

var styles = {
    container: {
        width: '100%',
        height: '92%'
    },
    header :{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(252, 90, 44, 0.89)',
        color: '#fff',
        padding: 5,
    }
};

function Header(props) {
        return(
            <div style={styles.container}>
                <div style={styles.header}>
                    <h2 style={{margin: 0}}>Weather App</h2>
                </div>
            </div>
        )
}

module.exports = Header;
