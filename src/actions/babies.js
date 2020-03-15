import * as types from '../types/babies';
import { v4 as uuidv4 } from 'uuid';

export const addBaby = (name, lastName) => ({
    type: types.ADD_BABY,
    payload: { id: uuidv4(), name, lastName },
})
