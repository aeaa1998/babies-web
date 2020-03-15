import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment'
import './styles.css'

import * as actions from '../../actions/events'
import { history } from '../App'

const eventTypes = ["Siesta", "Pacha", "Cambio pañal (Pipi)", "Cambio pañal (Popó)"]
const addBaby = () => history.push("/")


class Event extends React.Component {

    render() {
        return (
            <div className="p-5 position-relative bg-white rounded-pill mb-4">
                <h5 className="card-subtitle mb-2 text-muted">Fecha: {moment(this.props.selected.date).locale('es').format("dddd, MMMM Do YYYY, h:mm:ss a")}</h5>
                <h5 className="card-subtitle mb-2 text-muted">Tipo: {this.props.selected.type}</h5>
                <h5 className="card-subtitle mb-2 text-muted">Notas:</h5>
                <div>
                    {this.props.selected.notes}
                </div>
                <button className="position-absolute btn btn-danger delete" onClick={this.props.deleteEvent}> Borrar</button>
            </div>
        )

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteEvent: values => {
            dispatch(actions.deleteEvent(ownProps.selected.id))
        },
    }
}
export default connect(
    undefined,
    mapDispatchToProps
)(Event);
