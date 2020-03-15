import * as types from '../types/events';
import { combineReducers } from 'redux'
import _ from 'lodash'

const orderById = (state = [], action) => {
    switch (action.type) {
        case types.ADD_EVENT: {
            return [...state, action.payload.id];
        }
        case types.DELETE_EVENT: {
            return state.filter(id => id != action.payload.id)
        }
        default: {
            return state;
        }
    }
};
const byId = (state = {}, action) => {
    switch (action.type) {
        case types.ADD_EVENT: {
            return { ...state, [action.payload.id]: action.payload }
        }
        case types.DELETE_EVENT: {
            return _.omit(state, action.payload.id)
        }
        default: {
            return state;
        }
    }
}

const events = combineReducers({
    orderById,
    byId,
})

export default events

export const getEvents = (state, babyId) => state.orderById.map(id => state.byId[id])
    .filter(e => e != undefined)
    .filter(event => event.babyId == babyId)
export const getVisibleEvents = (events, type = "") => type == "" ? events : events.filter(event => events.type == type)
