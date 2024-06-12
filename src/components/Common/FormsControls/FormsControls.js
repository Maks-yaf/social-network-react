import React from 'react';
import s from "./FormsControls.module.css"
import {Field} from "redux-form";

export const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + ( hasError? s.error : " ") }>
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span>{meta.error}</span> }
            </div>

        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}> <textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}> <input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, validate, component, props = {}, text = "" ) => {
    return (
        <div>
            <Field placeholder={placeholder}
                   name={name}
                   validate={validate}
                   component={component}
                   {...props}
            /> {text}
        </div>
    )
}

