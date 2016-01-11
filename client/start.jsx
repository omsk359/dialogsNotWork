Meteor.startup(function () {

    function mapStateToProps(state) {
        log.debug('select state: {1}', state);
        return {
            taskCreator: state.taskCreator,
            taskTable: state.taskTable,
            idsIterateTaskCreator: state.idsIterateTaskCreator
        }
    }

    //var AppRootWrap = connect(mapStateToProps)(TaskTableTest);

    //ReactDOM.render(<RoutesWrap />, document.getElementById("container"));
    ReactDOM.render((
            <Routes />
    ), document.getElementById("container"));
});