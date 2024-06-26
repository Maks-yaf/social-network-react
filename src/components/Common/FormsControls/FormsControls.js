import React from 'react';
import s from "./FormsControls.module.css"
import {Field} from "redux-form";
import {TextField} from "@mui/material";
import Box from '@mui/material/Box';


export const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div >
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span style={{color: 'red'}}>{meta.error}</span> }
            </div>


        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}>
        <Box sx={{
                width: 500,
                maxWidth: '100%',
            }}>
        <TextField
            fullWidth
            {...input}
            {...restProps}
            id="filled-basic"
            label=""
            variant="filled" />
        </Box>
    </FormControl>
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

