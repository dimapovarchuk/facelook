import React from 'react';
import Music from './Music';
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class MusicContainer extends React.Component {

  render() { 
  return <Music {...this.props}/>
  }
}

const mapStateToProps = (state) => ({
  // isAuth: state.auth.isAuth,
});


export default compose(
  connect(mapStateToProps),
  withAuthRedirect
)(MusicContainer);