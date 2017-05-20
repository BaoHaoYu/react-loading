import React from 'react';
import s from './style.styl';
import ReactCSS from 'react-addons-css-transition-group'
import './animate.css'
import CssCombine from '../util/cssCombine'
var css = new CssCombine({style:s});

class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var p = this.props;
        var rootClass = css.combine('boxLoading', p.fullWindow && '-fullWindow', p.opacity && '-opacity');
        var dotStyle = {
            width: `${p.dotSize}px`,
            height: `${p.dotSize}px`,
            backgroundColor: p.dotColor
        };
        return (
          <ReactCSS
            transitionName="loading"
            transitionEnterTimeout={ 300 }
            transitionLeaveTimeout={ 200 }>
              {p.open && (
                <div
                  ref={ 'main' }
                  className={ rootClass }
                  style={ {...p.style, backgroundColor: p.backgroundColor} }>
                    <div className={ s['boxLoading-contain'] }>
                        <div className={ s['boxLoading-content'] }>
                            { [0, 1, 2].map((v, i) =>
                              <span
                                key={ i }
                                className={ s[`boxLoading-dot-${i}`] }
                                style={ dotStyle }
                              />
                            ) }
                        </div>
                    </div>
                </div>
              )}
          </ReactCSS>
        );
    }
}

Loading.defaultProps = {
    dotSize: 25,
    dotColor: '#07d1ff',
    opacity: !1,
    open: !1,
    fullWindow: !1,
    style: {},
    backgroundColor: null
};

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