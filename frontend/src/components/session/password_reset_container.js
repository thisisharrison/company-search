import { connect } from "react-redux";
import { resetPassword } from "../../actions/session_action";

import SessionForm from "./session_form";

const mapStateToProps = (state) => ({
  formType: "reset_password",
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (data) => dispatch(resetPassword(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
