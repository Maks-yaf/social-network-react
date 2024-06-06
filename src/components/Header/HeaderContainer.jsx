import React from 'react';
import Header from "./Header";
import {logout} from "../../Redax/Auth-reducer";
import {connect} from "react-redux";
import {updateProfile} from "../../Redax/Profile-reducer";

class HeaderContainer extends React.Component {

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
                       email={this.props.email}

                       logout={this.props.logout}
                       updateProfile={this.props.updateProfile}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
});

export default connect(mapStateToProps, {logout, updateProfile})(HeaderContainer);