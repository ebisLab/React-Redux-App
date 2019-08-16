import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner' 


const Webcam = (props) => {
    return  (<>
    <h4>{props.webcam.title}</h4>
    </>)

}

export default (Webcam);