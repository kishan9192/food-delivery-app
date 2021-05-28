import CHANGE_MODE from '../actionTypes';
const initialState = {
    dark : false
}
const themeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_MODE': return {
            ...state,
            dark : !(state.dark)
        }
        default: return state;
    }
}
export default themeReducer;