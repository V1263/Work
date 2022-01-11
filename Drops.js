import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
const todo = [{
    floorId: 1,
    floorName: "FIRIS FLOOR ",
    departments: [
        { deptId: 1, deptName: "design", services: [{ serviceId: 1, serviceName: "service1" }] },
        { deptId: 2, deptName: "machinelearning", services: [{ serviceId: 1, serviceName: "ml service1" }, { serviceId: 2, serviceName: "ml service2" }] }
    ]
},
{
    floorId: 2,
    floorName: "SECOND FLOOR ",
    departments: [
        { deptId: 1, deptName: "React", services: [{ serviceId: 1, serviceName: "service1" }] }
    ]
}
];
const Drops = () => {
    const ChangeFloor = (floorId) => {
    var department = todo.filter(x =>x.floorId === floorId)
  console.log('dept',Drops)
    }
    return (
        <div>
            <Formik
                initialValues={{
                    floor: '',
                    department: '',
                    service: ''
                }}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values }) => (
                    <Form>
               {console.log('values',values)}
                        <Field component="select" id="floor" name="floor" onChange={ChangeFloor(values.floor)}>

                            {todo.map(x => (<option value={x.floorId}>{x.floorName}</option>))}
                        </Field>
                        <Field component="select" id="department" name="department" onChange={ChangeFloor(values.floor)}>

                        </Field>
                        <Field component="select" id="service" name="service"  onChange={ChangeFloor(values.floor)}>

                        </Field>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Drops;