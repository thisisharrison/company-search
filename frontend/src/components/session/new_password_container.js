import { connect } from "react-redux";
import { confirmNewPassword } from "../../actions/session_action";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => ({
  formType: "set_new_password",
  uid: ownProps.match.params.uid,
  token: ownProps.match.params.token,
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (data) => dispatch(confirmNewPassword(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
