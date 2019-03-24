import React, { Component } from 'react'
import ParticleEffectButton from 'react-particle-effect-button'
import Link from 'gatsby-link'

class Button extends Component {
  state = {
    hidden: false
  }

  toggleButton = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  render () {
    return (
      <div>
        <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}>
        <li>
          {/* <Link to ='/'> */}
            <ParticleEffectButton
              color='#121019'
              hidden={this.state.hidden}
              duration={2000}
              type={['circle','rectangle','triangle'][Math.floor(Math.random()*3)]}
              >
               <Link to='/' onClick={() => this.toggleButton}>Click Me!</Link>
            </ParticleEffectButton>
          {/* </Link> */}
        </li>
        <li>
        <Link to ='/'>
            <ParticleEffectButton
              color='#121019'
              hidden={this.state.hidden}
              >
               <button onClick={() => this.toggleButton}>Click Me!</button>
            </ParticleEffectButton>
          </Link>
        </li>
        <li>
        <ParticleEffectButton
          color='#121019'
          hidden={this.state.hidden}
          onClick={this.toggleButton}
        >
          <Link to='/projects'>Projects</Link>
        </ParticleEffectButton>
        </li>
        </ul>
      </div>
    )
  }
}

export default Button;