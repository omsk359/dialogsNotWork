//const ThemeManager = new mui.Styles.ThemeManager();
_.assign(this, mui);

const {
    Router,
    Route,
    IndexRoute,
    IndexLink,
    Link,
    history
} = ReactRouter;

// A history object must be created to maintain the history for our router
browserHistory = history.createHistory();

Routes = React.createClass({
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={AppRoot}>
                    <Route path="test" component={Test2} />
                </Route>
            </Router>
        );
    }
});

Test = React.createClass({
    render: function() {
        return (
            <div >
                <FlatButton label="Primary" primary={true} />
            </div>
        );
    }
});
Test2 = React.createClass({
    render: function() {
        return (
            <Dialog title="1234" open={true} >
                <FlatButton label="Primary" primary={true} />
            </Dialog>
        );
    }
});


AppRoot = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});


