import { connect } from "react-redux";
import { registerUser } from "../../actions/session_action";
import SessionForm from "./session_form";

const mapStateToProps = (state) => ({
  formType: "signup",
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (data) => dispatch(registerUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
