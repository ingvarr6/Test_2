import React, { Component } from "react";
import Profile from "../Components/Profile";
import { connect } from "react-redux";
import { getUserInfo } from "../actions/userInfoAction";

class ProfileContainer extends Component {
  componentWillMount() {
    const { city, languages, social } = this.props;
    (city && languages && social) || this.props.getUserInfo(this.props.userId);
  }

  render() {
    const { city, languages, social, errorUserInfo, fetching } = this.props;
    return <Profile city={city} languages={languages} social={social} errorUserInfo={errorUserInfo} fetching={fetching}/>;
  }
}
const mapStateToProps = state => {
  return {
    userId: state.session.user.userId,
    city: state.user.city,
    languages: state.user.languages,
    social: state.user.social,
    errorUserInfo: state.user.errMsg,
    fetching: state.user.fetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserInfo: id => {
      dispatch(getUserInfo(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
