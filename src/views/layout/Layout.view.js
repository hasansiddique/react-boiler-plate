import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { Switch, Route, withRouter } from 'react-router-dom';

import classes from './Layout.view.scss';

const Loading = () => 'Loading...';

const Auth = Loadable({
  loader: () => import(/* webpackChunkName: "Admin" */ '../auth/Auth.container'),
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
              <Switch>
                <Route exact path="/" component={Auth} />
              </Switch>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Layout.defaultProps = {
  supportFeature: {},
  tableauDashboard: {},
};

Layout.propTypes = {};

Layout.contextTypes = {
  router: PropTypes.object,
};

const mapStateToProps = () => ({});

export default withRouter(connect(mapStateToProps)(Layout));
