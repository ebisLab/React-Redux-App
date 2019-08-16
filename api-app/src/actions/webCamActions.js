import axios from 'axios'

export const FETCHING_WEBCAM_DATA_START = 'FETCHING_WEBCAM_DATA_START';
export const FETCHING_WEBCAM_DATA_SUCCESS = 'FETCHING_WEBCAM_DATA_SUCCESS';
export const FETCHING_WEBCAM_DATA_FAILURE = 'FETCHING_WEBCAM_DATA_FAIL';


export const getData = () => {
    return dispatch => {
        //dispatch an action that tells reducer to transition to loading space
        dispatch({type: 'FETCHING_WEBCAM_DATA_START'});
        axios.get(`https://ghibliapi.herokuapp.com/films`)
        .then(res => {
            //component is getting data from reducer
            dispatch({type: FETCHING_WEBCAM_DATA_SUCCESS, payload: res.data})
            console.log(res)
        })
        .catch(err =>{ 
            dispatch({type: FETCHING_WEBCAM_DATA_FAILURE, payload: err.response})})

    }
}