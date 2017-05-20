import React from 'react'
import Main from './react-loading'

class Loading extends Main {}

Loading.propTypes = {
    dotSize: React.PropTypes.number,
    dotColor: React.PropTypes.string,
    style: React.PropTypes.object,
    open: React.PropTypes.bool,
    opacity: React.PropTypes.bool,
    fullWindow: React.PropTypes.bool,
    backgroundColor: React.PropTypes.string,
};

export default Loading;