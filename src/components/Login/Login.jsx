import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../Utils/Validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/Auth-reducer";
import {Navigate} from "react-router-dom";
import s from "../../../src/components/Common/FormsControls/FormsControls.module.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'}
                       placeholder={'email'}
                       component={Input}
                       validate={[required, maxLengthCreator(50)]}/>
            </div>
            <div>
                <Field name={'password'}
                       placeholder={'password'}
                       type={'password'}
                       component={Input}
                       validate={[required, maxLengthCreator(50)]}/>
            </div>
            <div>
                <Field name={'rememberMe'}
                       component={'input'}
                       type={'checkbox'}/>
                Remember me
            </div>
            {props.captchaUrl
                && <img src={props.captchaUrl}/> }
            {props.captchaUrl
                && <div>
                <Field name={'captcha'}
                       placeholder={'Symbols from image'}
                       component={Input}
                       validate={[required, maxLengthCreator(10)]}/>
            </div>}
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button type='submit'>LOGIN</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return (
            <Navigate to={"/profile"}/>
        )
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>

    )
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, {login})(Login);