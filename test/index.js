import React from 'react'
import ReactDom from 'react-dom'
import Loading from '../dist/react-loading'
import {fromJS} from 'immutable'
import {from} from 'immutable/contrib/cursor'
import './index.styl'
class Main extends React.Component {
    state = {
        $$s: fromJS({
            data: {
                fullWindow: {
                    open: !1,
                    opacity: !1
                },
                box: {
                    open: !0
                },
                dotSize: 25,
            }
        })
    };

    setIn($$s) {
        this.setState({$$s})
    }

    render() {
        const $$data = from(this.state.$$s, ['data'], $$newS => this.setIn($$newS));
        const $$fullWindow = $$data.getIn(['fullWindow']);
        const $$box = $$data.getIn(['box']);

        return (
          <div>
              <div>
                  <h3>common</h3>
                  <div>
                      <label>dotSize:</label>
                      <input
                        value={ $$data.get('dotSize') }
                        onChange={ e => $$data.set('dotSize', e.target.value) }/>
                  </div>
              </div>
              <div>
                  <h3>fullWindow</h3>
                  <Loading
                    open={ $$fullWindow.get('open') }
                    opacity={ $$fullWindow.get('opacity') }
                    dotSize={ $$data.get('dotSize') }
                    fullWindow={ !0 }
                  />

                  <button className="fullwindow" onClick={ e => $$fullWindow.update('open', v => !v) }> toggle open
                  </button>

                  <button onClick={ e => $$fullWindow.update('opacity', v => !v) }>toggle opacity</button>
              </div>

              <div className="box">
                  <h3>box</h3>

                  <div className="box-content">
                      <Loading
                        open={ $$box.get('open') }
                        opacity={ $$box.get('opacity') }
                        dotSize={ $$data.get('dotSize') }
                        fullWindow={ !1 }
                      />
                  </div>

                  <button onClick={ e => $$box.update('open', v => !v) }>toggle open</button>

                  <button onClick={ e => $$box.update('opacity', v => !v) }>toggle opacity</button>
              </div>
          </div>
        )
    }
}

ReactDom.render(<Main/>, document.getElementById('react'));
