import { REMOVE_SURVIVOR, UPDATE_DB, UPDATE_SURVIVOR } from './actions';

const initialState = {
    survivors: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DB: {
            return { survivors: action.payload }
        }
        case UPDATE_SURVIVOR: {
            let prevSurvivor = state.survivors.filter(survivor => survivor._id === action.payload);
            let survivorList = state.survivors.filter(survivor => survivor._id !== action.payload);
            let newSurvivor = [...prevSurvivor]
            newSurvivor[0].infected = !prevSurvivor[0].infected
            return { survivors: [...survivorList, ...newSurvivor] };
        }
        case REMOVE_SURVIVOR: {
            let survivorIndex = state.survivors.findIndex(survivor => survivor._id === action.payload);
            let beforeList = state.survivors.slice(0, survivorIndex);
            let postList = state.survivors.slice(survivorIndex + 1, state.survivors.length);
            return { survivors: [...beforeList, ...postList] };
        }
        default: {
            return state;
        }
    }
}