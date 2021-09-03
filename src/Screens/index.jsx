import { connect } from "react-redux";
import { Profile } from "./Profile";
import { userNameSelector } from "../../Store/Profile/selectors";
import { changeUserNameAction } from "../../Store/Profile/actions";

const mapStateToProps = (state) => ({
  userName: userNameSelector(state),
});

const mapDispatchToProps = {
  changeUserName: changeUserNameAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);