import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Formikfieldtype = () => {
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '' }}
            validate={values => {
                const errors = {};

                if (!values.name) {
                    errors.name = 'Invaild Required';
                }

                if (!values.Name) {
                    errors.Name = 'Name Required';
                }

                if (!values.Number) {
                    errors.Number = 'Number Required';
                }

                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)
                ) {
                    errors.email = 'Invalid email address';
                }


                if (!values.password) {
                    errors.password = "Password is required";
                } else if (values.password.length < 4) {
                    errors.password = "Password must be more than 4 characters";
                } else if (values.password.length > 10) {
                    errors.password = "Password cannot exceed more than 10 characters";
                }

                if (!values.ConfirmPassword) {
                    errors.ConfirmPassword = "ConfirmPassword is required";
                } else if (values.ConfirmPassword.length < 4) {
                    errors.ConfirmPassword = "ConfirmPassword must be more than 4 characters";
                } else if (values.ConfirmPassword.length > 10) {
                    errors.ConfirmPassword = "ConfirmPassword cannot exceed more than 10 characters";
                }
                return errors;
            }}

            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text" />
                <ErrorMessage name="firstName" />

                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text" />
                <ErrorMessage name="lastName" />

                <label htmlFor="email">Email Address</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" />

                <label htmlFor="Number"> Mobile Number</label>
                <Field name="Number" type="Number" />
                <ErrorMessage name="Number" />

                <label htmlFor="Address">Address</label>
                <Field name="Address" type="textarea" />
                <ErrorMessage name="Address" />

                <label htmlFor="DATEOFBIRTH">DATEOFBIRTH</label>
                <Field name="DATEOFBIRTH" type="DATE" />
                <ErrorMessage name="DATEOFBIRTH" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};
export default Formikfieldtype;