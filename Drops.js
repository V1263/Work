import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
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
    const [state, setstate] = useState({
        departments: [],
        services: []
    });

    const changeFloor = (floorid) => {
        var selectedFloor = todo.filter(x => x.floorId === +floorid);
        selectedFloor = selectedFloor[0]?.departments;
        console.log('selectedDepts', selectedFloor)
        setstate({ departments: selectedFloor });

    }
    return (
        <div>
            <Formik
                initialValues={{
                    floor: '',
                    department: '',
                    service: '',

                }}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values }) => (
                    <Form>
                        {console.log('values', values, state)}

                        <Field as="select" id="floor" name="floor" onChange={(e) => { changeFloor(e.target.value) }}>
                            {todo.map(x => (<option value={x.floorId}>{x.floorName} </option>))}
                        </Field>

                        <Field component="select" id="department" name="department" >
                            {state.departments?.map(x => (<option value={x.deptId}>{x.deptName} </option>))}
                        </Field>

                        <Field component="select" id="service" name="service" >
                            {todo.service?.map(x => (<option value={x.serviceId}>{x.serviceName} </option>))}
                        </Field>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Drops;