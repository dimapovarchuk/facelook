import React from 'react';
import Settings from './Settings';
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class SettingsContainer extends React.Component {

  render() { 
  return <Settings {...this.props}/>
  }
}

const mapStateToProps = (state) => ({
  // isAuth: state.auth.isAuth,
});


export default compose(
  connect(mapStateToProps),
  withAuthRedirect
)(SettingsContainer);