import React from 'react'
import { useFormik } from 'formik';

export const Validation1 =() => {

    const formik = useFormik({
        initialValues: {
            email: '',
            mobileno:''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address : </label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <br/>

            <label htmlFor="mobileno">Mobile Num. : </label>
            <input
                id="mobileno"
                name="mobileno"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.mobileno}
            />
            <br/>
    
            <button type="submit">Submit</button>
        </form>
    )
}