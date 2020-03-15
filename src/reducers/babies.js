import * as types from '../types/babies';
import { combineReducers } from 'redux'
import { history } from '../components/App'


const orderById = (state = [], action) => {
    switch (action.type) {
        case types.ADD_BABY: {
            history.push(`/see/baby/${action.payload.id}`)
            return [...state, action.payload.id];
        }
        default: {
            return state;
        }
    }
};
const byId = (state = {}, action) => {
    switch (action.type) {
        case types.ADD_BABY: {
            return { ...state, [action.payload.id]: action.payload, }
        }
        default: {
            return state;
        }
    }
}

const babies = combineReducers({
    byId,
    orderById,
})

export default babies

export const getBabyById = (state, id) => state.byId[id]
