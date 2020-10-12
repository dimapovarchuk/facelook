import React from 'react';
import News from './News';
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class NewsContainer extends React.Component {

  render() { 
  return <News {...this.props}/>
  }
}

const mapStateToProps = (state) => ({
  // isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps),
  withAuthRedirect
)(NewsContainer);
