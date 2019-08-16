import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner' 
import Webcam from './Webcam'

const WebCamList = (props) => {
    return  (<>
    <h1>Welcome to Studio Ghibiliii</h1>
    <button>
        {props.isLoading ?
        <Loader
        type="Puff"
        color="#00BFFF"
        height="100"
        width="100" /> : 'Get info'
        }
        </button>
        {props.webcams && 
        props.webcams.map(item => (
            <Webcam key={item.name} webcam ={item} />
        ))}
    </>)

}

const mapStateToProps = state =>{
    return {
        isLoading: state.isLoading,
        webcams: state.webcams
    };
  };

export default connect(mapStateToProps,{})(WebCamList);