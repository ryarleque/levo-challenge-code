import { createStore, combineReducers, applyMiddleware } from 'redux';
import organizationReducer from '../reducer/organizationReducer';
import testReportReducer from '../reducer/testReportReducer';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    organization: organizationReducer,
    testReport: testReportReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;