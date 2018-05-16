import Login from "../Components/Login";
import { logIn } from "../actions/authAction";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  errMsg: state.session.errMsg,
  fetching: state.session.fetching
});

const mapDispatchToProps = dispatch => ({
  logIn: (params, cb) => dispatch(logIn(params, cb))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
