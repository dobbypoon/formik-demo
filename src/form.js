import { connect } from "react-redux";
import React, { Component } from 'react';
import { withFormik, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

import { simpleAction } from './actions/simpleAction'

const mapDispatchToProps = dispatch => ({
    simpleAction: (payload) => dispatch(simpleAction(payload))
})

const mapStateToProps = state => ({
    ...state
})

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

class RegisterForm extends Component {
    render() {
        const {
            values,
            touched,
            errors,
            dirty,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            isSubmitting,
        } = this.props;
        return (
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div>
                            {/* <input
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.fullName}
                                name="fullName"
                            />
                            {errors.fullName && touched.fullName && <div id="feedback">{errors.fullName}</div>} */}

                            {/* <label htmlFor="fullName">Name</label>
                            <Field type="name" name="fullName" />
                            <ErrorMessage name="fullName" component="div" className="error" /> */}

                            <MyTextInput
                                label="Name"
                                name="fullName"
                                type="text"
                                placeholder="Jane Wong"
                                className="text-input"
                            />
                        </div>
                        <div>
                            <MyTextInput
                                label="Member ID"
                                name="memberId"
                                type="text"
                                className="text-input"
                                disabled
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>

                        <div>
                            <label htmlFor="tel">Tel</label>
                            <Field type="tel" name="tel" />
                            <ErrorMessage name="tel" component="div" className="error" />
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <label htmlFor="birthday">Birthday</label>
                            <Field type="date" name="birthday" />
                        </div>

                        <div>
                            <label htmlFor="title">Title</label>
                            <Field name="title" as="select">
                                <option value="">Please select</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Ms.">Ms.</option>
                            </Field>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <div id="checkbox-group">Checked</div>
                            <div role="group" aria-labelledby="checkbox-group">
                                <label><Field type="checkbox" name="checked" value="One" />One</label>
                                <label><Field type="checkbox" name="checked" value="Two" />Two</label>
                                <label><Field type="checkbox" name="checked" value="Three" />Three</label>
                            </div>
                        </div>
                        <div>
                            <div id="my-radio-group">Picked</div>
                            <div role="group" aria-labelledby="my-radio-group">
                                <label><Field type="radio" name="picked" value="One" />One</label>
                                <label><Field type="radio" name="picked" value="Two" />Two</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field type="password" name="confirmPassword" />
                            <ErrorMessage name="confirmPassword" component="div" className="error" />
                        </div>
                    </div>
                    <div className="row">
                        <button className="button secondary" type="submit" disabled={isSubmitting}>
                            Register
                        </button>
                    </div>
                </form>
            </div >
        );
    }
};

const formikEnhancer = withFormik({
    mapPropsToValues: () => ({ 
        fullName: '', 
        memberId: '123456', 
        email: '', 
        tel: '',
        birthday: '',
        title: '',
        checked: '',
        picked: '',
        password: '',
        confirmPassword: ''
    }),
    // validationSchema (https://github.com/jquense/yup)
    validationSchema: Yup.object({
        fullName: Yup.string().matches(/\w/, 'Alphanumeric only').required('Required'),
        email: Yup.string().email('Invalid email address'),
        tel: Yup.string().matches(/[0-9]/, 'Invalid tel').required('Required'),
    }),
    validate: values => {
        const errors = {};
        if (values.password && values.confirmPassword) {
            if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Password not matched';
            }
        }
        return errors;
    },
    handleSubmit: (values, { props, setSubmitting }) => {
        props.simpleAction(values);
        setTimeout(() => setSubmitting(false), 3000);
    }
})(RegisterForm);

export default connect(mapStateToProps, mapDispatchToProps)(formikEnhancer);
