import { connect } from "react-redux";
import SessionForm from "./session_form";

const mapStateToProps = (state) => ({
  formType: "set_new_password",
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
