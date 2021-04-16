import { connect } from "react-redux";
import SessionForm from "./session_form";

const mapStateToProps = (state) => ({
  formType: "login",
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
