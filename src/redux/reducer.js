const initialState = {
    survivors: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_DB': {
            return { survivors: action.payload }
        }
        case 'UPDATE_SURVIVOR': {
            let prevSurvivor = state.survivors.filter(survivor => survivor.id === action.payload);
            let survivorList = state.survivors.filter(survivor => survivor.id !== action.payload);
            let newSurvivor = [...prevSurvivor]
            newSurvivor[0].infected = !prevSurvivor[0].infected
            return { survivors: [...survivorList, ...newSurvivor] };
        }
        default: {
            return state;
        }
    }
}