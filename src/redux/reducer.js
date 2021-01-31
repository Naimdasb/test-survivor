import { DELETE_SURVIVOR_STORE, UPDATE_DB, UPDATE_SURVIVOR_STORE, ADD_SURVIVOR_STORE } from './actions';

const initialState = {
    survivors: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DB: {
            return { survivors: action.payload }
        }
        case ADD_SURVIVOR_STORE: {
            return { survivors: [...state.survivors, action.payload] }
        }
        case UPDATE_SURVIVOR_STORE: {
            let prevSurvivor = state.survivors.filter(survivor => survivor._id === action.payload.id);
            let survivorList = state.survivors.filter(survivor => survivor._id !== action.payload.id);
            let newSurvivor = [...prevSurvivor]
            newSurvivor[0].infected = action.payload.infected
            return { survivors: [...survivorList, ...newSurvivor] };
        }
        case DELETE_SURVIVOR_STORE: {
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