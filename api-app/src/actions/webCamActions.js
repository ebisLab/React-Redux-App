export const FETCHING_WEBCAM_DATA = 'FETCHING_WEBCAM_DATA';

export const getData = () => {
    return dispatch => {
        //dispatch an action that tells reducer to transition to loading space
        dispatch({type: 'FETCHING_WEBCAM_DATA'})

    }
}