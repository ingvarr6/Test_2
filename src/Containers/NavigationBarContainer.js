import { connect } from "react-redux";
import NavigationBar from "../Components/NavigationBar";
import { LogOut } from '../actions/authAction'

const mapStateToProps = state => ({
  isAuth: state.session.user.userId
});

const mapDispatchToProps = (dispatch) => {
  return {
    Logout: () => {
      dispatch(LogOut())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
