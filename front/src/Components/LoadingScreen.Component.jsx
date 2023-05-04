import React from 'react';
import ReactLoading from 'react-loading';

const LoadingScreen = ({ type, color }) => (
    <div className='loadingScreen'>
        <ReactLoading type='balls' color='rgb(32, 32, 32)' />
    </div>
);

export default LoadingScreen;