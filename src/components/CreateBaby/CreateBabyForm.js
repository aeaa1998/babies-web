import React from 'react'
import { Field, reduxForm } from 'redux-form'
const required = value => value ? undefined : 'Required'
const notNumber = value => value && !isNaN(Number(value)) ? 'No puede ser un numero' : undefined
let CreateBabyForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="offset-4 col-4 ">
                <Field className="w-100 rounded-form" name="name" component="input" validate={[required]} placeholder="Nombre" type="text" />
            </div>

            <div className="offset-4 col-4 p-3">
                <Field className="w-100 rounded-form" name="lastName" component="input" validate={[required]} placeholder="Apellido" type="text" />
            </div>
            <div className="offset-4 col-4 p-3">
                <button type="submit" className="btn  btn-outline-success w-100">Crear</button>
            </div>
        </form>
    )
}

CreateBabyForm = reduxForm({
    form: 'baby'
})(CreateBabyForm)

export default CreateBabyForm