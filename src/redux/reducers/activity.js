import { ACTION_NAP, ACTION_EAT, ACTION_PLAY } from "../actionTypes";

const initialState = "napping"

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_NAP: {
        return "napping"
        }
        case ACTION_EAT: {
        return "eating"
        }
        case ACTION_PLAY: {
        return "playing"
        }
        default:
        return state;
    }
};

export default activityReducer;