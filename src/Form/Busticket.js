import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function BusTicket() {
    const initialValues = {
        numberOfTickets: '',
        tickets: []
    };

    const validationSchema = Yup.object().shape({
        numberOfTickets: Yup.string().required('Number of tickets is required'),
        tickets: Yup.array().of(
            Yup.object().shape({
                name: Yup.string().required('Name is required'),
                email: Yup.string().email('Email is invalid').required('Email is required')
            })
        )
    });

    function onChangeTickets(e, field, values, setValues) {

        const tickets = [...values.tickets];
        const numberOfTickets = e.target.value || 0;
        const previousNumber = parseInt(field.value || '0');
        if (previousNumber < numberOfTickets) {
            for (let i = previousNumber; i < numberOfTickets; i++) {
                tickets.push({ name: '', email: '' });
            }
        } else {
            for (let i = previousNumber; i >= numberOfTickets; i--) {
                tickets.splice(i, 1);
            }
        }
        setValues({ ...values, tickets });
        field.onChange(e);
    }

    function onSubmit(fields) {

        alert(JSON.stringify(fields, null, 4));
    }

    return (
        <center>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {({ errors, values, touched, setValues }) => (
                    <Form>
                        <div >
                            <h5> Formik Dynamic </h5>
                            <div>
                                <label>Number of Tickets</label>
                                <Field name="numberOfTickets">
                                    {({ field }) => (
                                        <select {...field} className={'form-control' + (errors.numberOfTickets && touched.numberOfTickets ? ' is-invalid' : '')}
                                            onChange={e => onChangeTickets(e, field, values, setValues)}>
                                            <option value=""></option>
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i =>
                                                <option key={i} value={i}>{i}</option>
                                            )}
                                        </select>
                                    )}
                                </Field>
                                <ErrorMessage name="numberOfTickets" component="div" className="invalid-feedback" />
                            </div>


                            <FieldArray name="tickets">
                                {() => (values.tickets.map((ticket, i) => {
                                    const ticketErrors = errors.tickets?.length && errors.tickets[i] || {};
                                    const ticketTouched = touched.tickets?.length && touched.tickets[i] || {};
                                    return (
                                        <div key={i} >
                                            <div >
                                                <h5 >Ticket {i + 1}</h5>
                                                <div >
                                                    <div>
                                                        <label>Name</label>
                                                        <Field name={`tickets.${i}.name`} type="text" className={'form-control' + (ticketErrors.name && ticketTouched.name ? ' is-invalid' : '')} />
                                                        <ErrorMessage name={`tickets.${i}.name`} component="div" className="invalid-feedback" />
                                                    </div>
                                                    <div >
                                                        <label>Email</label>
                                                        <Field name={`tickets.${i}.email`} type="text" className={'form-control' + (ticketErrors.email && ticketTouched.email ? ' is-invalid' : '')} />
                                                        <ErrorMessage name={`tickets.${i}.email`} component="div" className="invalid-feedback" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }))}
                            </FieldArray>
                            <div >
                                <button type="submit">
                                    Buy Tickets
                                </button>
                                <button type="reset">Reset</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </center>
    )
}

export default BusTicket;