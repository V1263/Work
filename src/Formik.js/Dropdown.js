import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";

const validation = yup.object().shape({
    Name: yup.string().max(15),
    name: yup.string().min(2).max(15),
    Number: yup.string().min(10).max(12),
    email: yup.string().email(),
    // Email:yup.string().Email().required(),
    password: yup.string().min(8).max(32),
    Password: yup.string().min(8).max(32),
    ConfirmPassword: yup.string().min(8).max(32),

});

    const Dropdown = () => (

        < div >

            {/* <center> */}
            <h1>Task</h1>
            <Formik

                initialValues={{
                    Name: '',
                    name: '',
                    Number: '',
                    email: '',
                    Email: '',
                    password: '',
                    Password: '',
                    ConfirmPassword: '',
                    Number: ''
                }}
                validationSchema={validation}

            // validate={values => {
            //     const errors = {};

            //     if (!values.name) {
            //         errors.name = 'Invaild Required';

            //     }


            //     if (!values.Name) {
            //         errors.Name = 'Name Required';
            //     }

            //     if (!values.Number) {
            //         errors.Number = 'Number Required';
            //     }

            //     if (!values.Email) {
            //         errors.Email = 'Required';
            //     } else if (
            //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)
            //     ) {
            //         errors.Email = 'Invalid email address';
            //     }

            //     if (!values.email) {
            //         errors.email = 'Required';
            //     } else if (
            //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            //     ) {
            //         errors.email = 'Invalid email address';
            //     }

            //     if (!values.password) {
            //         errors.password = "Password is required";
            //     } else if (values.password.length < 4) {
            //         errors.password = "Password must be more than 4 characters";
            //     } else if (values.password.length > 10) {
            //         errors.password = "Password cannot exceed more than 10 characters";
            //     }

            //     if (!values.ConfirmPassword) {
            //         errors.ConfirmPassword = "ConfirmPassword is required";
            //     } else if (values.ConfirmPassword.length < 4) {
            //         errors.ConfirmPassword = "ConfirmPassword must be more than 4 characters";
            //     } else if (values.ConfirmPassword.length > 10) {
            //         errors.ConfirmPassword = "ConfirmPassword cannot exceed more than 10 characters";
            //     }
            //     return errors;
            // }}

            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null,2));
                    setSubmitting(false);
                }, 400);
                console.log('values', values)
            }}


            >

                {({ isSubmitting, values, errors }) => (
                    <Form>
                        {console.log('values', errors)}
                        <Field component="select" id="category" name="category">
                            <option value="None">None</option>
                            <option value="one">one</option>
                            <option value="Two">Two</option>
                            <option value="Login">Login</option>
                            <option value="registration">registration </option>

                        </Field> <br />
                        {values.category}

                        {values.category === "one" &&
                            <div>

                                One : <Field type="text" name="Name" />
                                <ErrorMessage name="Name" component="div" /><br />

                            </div>
                        }

                        {values.category === "Two" &&
                            <div>

                                Name
                                <Field type="text" name="name" /> <br />
                                <ErrorMessage name="name" component="div" /><br />

                                Password
                                <Field type="Password" name="Password" /> <br />
                                <ErrorMessage name="Password" component="div" /><br />

                            </div>
                        }

                        {values.category === "Login" &&
                            <div>
                                email:<Field type="email" name="email" />
                                <ErrorMessage name="email" component="div" /><br />

                                password:<Field type="password" name="password" />
                                <ErrorMessage name="password" component="div" /><br />
                            </div>
                        }

                        {values.category === "registration" &&
                            <div>

                                Full Name
                                <Field type="text" name="name" id="name" /> <br />
                                <ErrorMessage name="name" component="div" /><br />

                                Email
                                <Field type="Email" name="Email" id="Email" /> <br />
                                <ErrorMessage name="Email" component="div" /><br />

                                Mobile Number
                                <Field type="Number" name="Number" id="Number" /> <br />
                                <ErrorMessage name="Number" component="div" /><br />

                                Password
                                <Field type="Password" name="Password" id="Password" /> <br />
                                <ErrorMessage name="password" component="div" /><br />

                                Confirm Password
                                <Field type="Password" name="ConfirmPassword" id="ConfirmPassword" /> <br />
                                <ErrorMessage name="ConfirmPassword" component="div" /><br />

                            </div>


                        }

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
            {/* </center> */}
        </div >
    );

    export default Dropdown;