import React from 'react'
import { useFormik } from 'formik';


const One = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            Category: "",
            Priority:"",
        },
        onSubmit: (values) => {
            console.log('form submit', values)
        },
        validate: (values) => {
            let errors = {};
            if (!values.name) {
                errors.name = "name required"
            }
            if (!values.email) {
                errors.email = "email required"
            }
            if (!values.password) {
                errors.password = "password required"
            }
            if (!values.Category) {
                errors.Category = "Category required"
            }
            
            return errors;
        }
    })
    //   console.log('giri',formik.values)
    return (
        <div className='One'>
            <center>
                <form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" id="name" value={formik.values.name} onChange={formik.handleChange} /> <br />
                    {formik.errors.name ? <div>{formik.errors.name}</div> : null}

                    <label>Email</label>
                    <input type="text" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} /> <br />
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}

                    <label>Password</label>
                    <input type="text" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} /> <br />
                    {formik.errors.password ? <div>{formik.errors.password}</div> : null}

                    <label>Choose </label><select name="Category" id="Category" value={formik.values.Category} onChange={formik.handleChange}>
                        <option value="None">None</option>
                        <option value="Lan ">Lan </option>
                        <option value="Cable ">Cable </option>
                        <option value="Laptop Charger ">Laptop Charger </option>
                        <option value="Laptop Battery ">Laptop Battery </option>
                    </select>
                    {formik.errors.Category ? <div>{formik.errors.Category}</div> : null} <br />

                   

                 <button type="submit" > Register </button>
                </form>
            </center>
        </div>
    )
}

export default One;
