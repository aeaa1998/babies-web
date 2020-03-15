import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/events'
import CreateEvent from '../CreateEvent'
import Event from '../Event'
import * as selectors from '../../reducers';
import { history } from '../App'

const eventTypes = ["Siesta", "Pacha", "Cambio pañal (Pipi)", "Cambio pañal (Popó)"]
const addBaby = () => history.push("/")


class Baby extends React.Component {

    render() {
        return (

            <div className="jumbotron jumbotron-fluid vh-100 mb-0">
                <div className="container">
                    <h1 className="display-4">Bebe: {this.props.selected.name} {this.props.selected.lastName}</h1>
                    <p className="lead">Aca vera las actividades de su bebe escogido.</p>
                    <hr className="my-4"></hr>
                    <div className="row">
                        <div className="col-4">
                            <select className="custom-select w-100"
                                id="babySelect"
                                selected={this.props.selected.id}
                                onChange={() => {
                                    let val = document.getElementById("babySelect").value
                                    if (val !== this.props.selected.id) {
                                        history.push(`/see/baby/${val}`)
                                    }
                                }
                                }
                            >
                                <option value={this.props.selected.id}>{this.props.selected.name} {this.props.selected.lastName}</option>
                                {this.props.babies
                                    .filter(baby => baby.id !== this.props.selected.id)
                                    .map(baby => <option key={baby.id} value={baby.id}>{baby.name} {baby.lastName}</option>)}
                            </select>
                        </div>
                        <div className="offset-1 col-3">
                            <button type="button" className="btn  btn-outline-success w-100" onClick={addBaby}>Agregar Bebe</button>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-8 mh-420 overflow-auto">
                            <div className="row">
                                {this.props.events.length == 0 ? <h1>Todavia no hay eventos</h1> :
                                    <div className="offset-1 col-10">
                                        {this.props.events.map(event => <Event key={event.id} selected={event} />)}
                                    </div>
                                }

                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Agregar Evento</h5>
                                    <CreateEvent onSubmit={this.props.createEvent} />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        )

    }
}
function mapStateToProps(state, props) {
    return {
        selected: state.babies.byId[props.match.params.id],
        babies: selectors.getBabies(state),
        events: selectors.getEvents(state, props.match.params.id),
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createEvent: values => {
            dispatch(actions.addEvent(ownProps.match.params.id, values.type, values.notes))
        },
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Baby);
