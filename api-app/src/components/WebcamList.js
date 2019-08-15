import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner'

const WebCamList = (props) => {
    return  (<>
    <h1>Welcome to Studio Ghibili</h1>
    <button>
        {props.isLoading ?
        <Loader
        type="Puff"
        color="#00BFFF"
        height="100"
        width="100" /> : 'Get info'
        }
        </button>
    </>)

}

const mapStateToProps = state =>{
    return {
        isLoading: state.isLoading
    };
  };

export default connect(mapStateToProps,{})(WebCamList);