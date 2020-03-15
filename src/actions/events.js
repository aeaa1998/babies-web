import * as types from '../types/events';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment'

export const addEvent = (babyId, type, notes) => ({
    type: types.ADD_EVENT,
    payload: { id: uuidv4(), babyId, type, notes, date: moment.now() },
})

export const deleteEvent = (id) => ({
    type: types.DELETE_EVENT,
    payload: { id },
})

export const eventsByBabyId = (babyId) => ({
    type: types.FILTER_BY_BABY,
    payload: { babyId },
})

export const eventsByType = (type = "all") => ({
    type: types.FILTER_BY_TYPE,
    payload: { type },
})

