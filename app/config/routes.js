var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var ForecastContainer = require('../containers/ForecastContainer');
var Detail = require('../components/Detail');
var NotFound = require('../components/notFound');
var DataError = require('../components/DataError');

var routes = (
    <Router history={hashHistory}>
    <Route path='/' component={Main}>
    <IndexRoute component={Home} />
        <Route path="forecast/:location" component={ForecastContainer}/>
        <Route path="detail/:location/:index" component={Detail}/>
        <Route path="error/:location" component={DataError} />
        <Route path="*" component={NotFound}/>
    </Route>
    </Router>
);

module.exports = routes;