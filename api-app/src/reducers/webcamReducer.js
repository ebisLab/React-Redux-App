import {FETCHING_WEBCAM_DATA} from '../actions'

const initialState = {
    webcams: [], 
    isLoading: false, 
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){

        case 'FETCHING_WEBCAM_DATA':
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        default:
            return state;
    }
}