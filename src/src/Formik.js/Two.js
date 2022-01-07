import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.number) {
        errors.number = 'Required';
    } else if (values.number.length > 10) {
        errors.number = 'Invalid Mobile number';
    }

    if (!values.checkbox) {
        errors.checkbox = 'Required';
    }

    if (!values.radio) {
        errors.radio = 'Required';
    }

    if (!values.Category) {
        errors.Category = 'Required';
    }
    console.log('error', errors)
    return errors;
};

const Two = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            number: '',
            radio: '',
            checkbox: false,
            Category: ''
        },
        validate,
        onSubmit: (values, resetForm) => {

            alert(JSON.stringify(values, null,));
            resetForm({ values });
        },
    });
    return (

        <center>
            <h2> USE FORMIK </h2>
            <form onSubmit={formik.handleSubmit}>
                <label>First Name <span>*</span></label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.firstName}
                /><br />
                {formik.errors.firstName ? <div style={{ "color": "red" }}>{formik.errors.firstName}</div> : null}

                <label>Last Name <span>*</span> </label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                /><br />
                {formik.errors.lastName ? <div style={{ "color": "red" }}>{formik.errors.lastName}</div> : null}

                <label>Email Address <span>*</span> </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                /><br />
                {formik.errors.email ? <div style={{ "color": "red" }}>{formik.errors.email}</div> : null}

                <label>Mobile number<span>*</span> </label>
                <input
                    id="number"
                    name="number"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.number}
                /><br />
                {formik.errors.number ? <div style={{ "color": "red" }}>{formik.errors.number}</div> : null}

                <label>Choose <span>*</span></label>
                <select name='Category' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Category} >
                    <option value="None">None</option>
                    <option value="Lan Issue">Lan Issue</option>
                    <option value="Cable Issue">Cable Issue</option>
                    <option value="Laptop Charger Issue">Laptop Charger Issue</option>
                    <option value="Laptop Battery Issue">Laptop Battery Issue</option>
                </select><br />
                {formik.errors.Category ? <div style={{ "color": "red" }}>{formik.errors.Category}</div> : null}


                <label> radio button <span>*</span> </label>
                <input
                    type="radio"
                    name="radio"
                    value="high"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                // value={formik.values.radio} 
                />	&nbsp;

                High
                <input
                    type="radio"
                    name="radio"
                    value="Medium"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                // value={formik.values.radio} 
                />	&nbsp;
                Medium

                <input
                    type="radio"
                    name="radio"
                    value="low"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                // value={formik.values.radio}
                />&nbsp;
                low
                <br />
                {formik.errors.radio ? <div style={{ "color": "red" }}>{formik.errors.radio}</div> : null}


                <label>
                    <input
                        type="checkbox"
                        name="checkbox"
                        value="termsandconditions"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.checkbox} />
                    Terms and Conditions
                </label><br />
                {formik.errors.checkbox ? <div style={{ "color": "red" }}>{formik.errors.checkbox}</div> : null}



                <button onClick={formik.resetForm} type="reset">reset</button>
                <button type="submit">Submit</button>
            </form>
        </center>
    );
};
export default Two;