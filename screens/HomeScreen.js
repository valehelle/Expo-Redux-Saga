import React from 'react';

import { connect } from 'react-redux'
import UserActions from '../redux/user'
import { HomeComponent } from '../components/Home'
import { getText } from '../redux/user'

class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };

  handleAlert = () => {
    this.props.onClick()
  }

  render() {
    return (
      <HomeComponent handleAlert = {this.handleAlert} text = {this.props.text}/>
    );
  }

}

const mapStateToProps = state => {
  return {
    text: getText(state)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(UserActions.helloWorld())
    }
  }
}

const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeScreen