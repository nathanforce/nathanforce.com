import React from 'react'
import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`

const TypewriterText = styled.div`
  font-size: 1.25rem;
  font-family: monospace;
`

const Cursor = styled.span`
  color: #85144b;
  line-height: 0.9;
  padding-right: 1px;
  border-right: 2px solid #0074d9;
  animation: ${blink} 1s steps(1) infinite;
`

class Typewriter extends React.Component {
  state = {
    position: 1,
  }

  update = () => {
    this.setState(({ position }) => {
      const newPosition = position + 1
      if (newPosition >= this.props.children.length) {
        clearInterval(this.interval)
      }
      return { position: newPosition }
    })
  }

  render() {
    const text = this.props.children
    const done = text.substr(0, this.state.position + 1)
    return (
      <TypewriterText {...this.props}>
        <span>{done}</span>
        <Cursor />
      </TypewriterText>
    )
  }

  componentDidMount() {
    this.interval = setInterval(this.update, 100)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
}

export default Typewriter
