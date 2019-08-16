import {FETCHING_WEBCAM_DATA_START, FETCHING_WEBCAM_DATA_SUCCESS, FETCHING_WEBCAM_DATA_FAILURE} from '../actions'

const initialState = {
    webcams: [], 
    isLoading: false, 
    error: ''
}

export const reducer = (state = initialState, action) => {

    console.log(initialState.webcams, 'initstate')
    switch(action.type){

        case 'FETCHING_WEBCAM_DATA_START':
            return {
                ...state,
                isLoading: true,
                error: ''
            };

            case 'FETCHING_WEBCAM_DATA_SUCCESS':
            return {
                ...state,
                isLoading: false,
                webcams: action.payload, 
                error: ''
            }
        default:
            return state;
    }
}