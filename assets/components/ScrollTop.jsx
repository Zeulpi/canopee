import React, { Component } from 'react'

export default class ScrollTop extends Component {
    state= {
        theposition : 0
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
      }
      componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
      }
      listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
      
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      
        const scrolled = winScroll / height
      
        this.setState({
          theposition: winScroll,
        })
        // console.log(this.state);
      }

  render() {
    return (
        <div className={`navHaut ${this.state.theposition >250 ? 'd-block': 'd-none'}`} style={{'top': this.state.theposition, zIndex : 1000}} onClick={() => {document.documentElement.scrollTop = 0}}>
            ⬆
        </div>
    )
  }
}
