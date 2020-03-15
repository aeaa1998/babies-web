import React from 'react';
import { connect } from 'react-redux';
import CreateBabyForm from './CreateBabyForm'
import * as actions from '../../actions/babies'




class CreateBaby extends React.Component {
    render() {
        return (
            <div>
                <h1 className="mb-4 text-center">
                    {(this.props.babiesCount > 0) ? "Agregue un bebe mas a su cuenta" : "Ingrese su primer bebe"}
                </h1>

                <div className="row justify-content-center">
                    <div className="col-7">
                        <div className="row card bg-secondary p-4">
                            <div className="card-body">
                                <h1 className="card-title mb-4 text-center">Crear un bebe</h1>
                            </div>
                            <CreateBabyForm onSubmit={this.props.createBaby} />
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
function mapStateToProps(state) {
    return {
        babiesCount: state.babies.orderById.length
    }
}
const mapDispatchToProps = dispatch => {
    return {
        createBaby: values => {
            dispatch(actions.addBaby(values.name, values.lastName))
        },
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateBaby);
