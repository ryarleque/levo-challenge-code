import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OrganizationComponent from './components/Organization/Organization';
import TestReportComponent from './components/TestReport/TestReport';
import TestReportDetailComponent from './components/TestReportDetail/TestReportDetail';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <div>           
      <Router>
        <div>
          <Route path="/" exact component={OrganizationComponent} />        
          <Route path="/testReport/:organizationId" component={TestReportComponent} />
          <Route path="/testReportDetail/:organizationId/:reportId" component={TestReportDetailComponent} />
        </div>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
);