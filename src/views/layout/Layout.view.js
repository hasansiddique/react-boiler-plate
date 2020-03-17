import React from 'react';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { Switch, Route, withRouter } from 'react-router-dom';

import { MAINTENANCE_MODE } from '../../common/constants';

import classes from './Layout.view.scss';
import ProtectedComponent from '../../components/ProtectedComponent';

const Loading = () => 'Loading...';

const Auth = Loadable({
  loader: () => import(/* webpackChunkName: "Admin" */ '../auth/Auth.container'),
  loading: Loading,
});

const Maintenance = Loadable({
  loader: () => import(/* webpackChunkName: "Admin" */ '../../components/Maintenance/Maintenance'),
  loading: Loading,
});


class Layout extends React.PureComponent {
  render() {
    return (
      <>
        <BreadcrumbsItem to="/" key="layout-breadcrumb">
          Home
        </BreadcrumbsItem>
        <div className={classes.layout}>
          <div className={classes.main}>
            <div className={classes.pageContent}>
              {MAINTENANCE_MODE === 'Yes'
                ? <Route path="/" component={Maintenance} />
                : (
                  <Switch>
                    <Route
                      path="/user"
                      component={Auth}
                    />
                    <ProtectedComponent
                      path="/"
                      component={Auth}
                    />
                  </Switch>
                )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

Layout.defaultProps = {};

Layout.propTypes = {};

const mapStateToProps = () => ({});

export default withRouter(connect(mapStateToProps)(Layout));
