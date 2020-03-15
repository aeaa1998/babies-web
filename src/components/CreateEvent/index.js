import React from 'react'
import { Field, reduxForm, reset } from 'redux-form'
const eventTypes = ["Siesta", "Pacha", "Cambio pañal (Pipi)", "Cambio pañal (Popó)"]
const required = value => value ? undefined : 'Required'
const afterSubmit = (result, dispatch) =>
    dispatch(reset('baby-event'))
let CreateEvent = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="col-10">
                <Field className="w-100 rounded-form" name="type" component="select" validate={[required]} placeholder="Tipo de instrumento" >
                    <option />
                    {eventTypes.map(eventType => <option key={eventType} value={eventType}>{eventType}</option>)}
                </Field>
            </div>

            <div className="col-10 p-3">
                <Field className="w-100 rounded-form" name="notes" validate={[required]} component="textarea" placeholder="Notas" />
            </div>
            <div className="col-8 p-3">
                <button type="submit" className="btn  btn-outline-success w-100">Crear</button>
            </div>
        </form>
    )
}

CreateEvent = reduxForm({
    form: 'baby-event',
    onSubmitSuccess: afterSubmit
})(CreateEvent)

export default CreateEvent