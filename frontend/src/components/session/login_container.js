import { connect } from "react-redux";
import { loginUser } from "../../actions/session_action";
import SessionForm from "./session_form";

const mapStateToProps = (state) => ({
  formType: "login",
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (data) => dispatch(loginUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
