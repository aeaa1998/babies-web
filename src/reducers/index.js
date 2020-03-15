import { combineReducers } from 'redux';
import babies, * as babiesSelectors from './babies'
import events, * as eventsSelectors from './events'
import { reducer as formReducer } from 'redux-form'



const reducer = combineReducers({
  babies,
  events,
  form: formReducer
});


export default reducer;

export const getBabies = state => state.babies.orderById.map(id => state.babies.byId[id])
export const getBabyById = (state, id) => babiesSelectors.getBabyById(state.babies, id)
export const getEvents = (state, babyId) => eventsSelectors.getEvents(state.events, babyId)
export const getVisibleEvents = (events, type) => eventsSelectors.getVisibleEvents(events, type)


