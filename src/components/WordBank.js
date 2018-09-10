import React from 'react'
import PropTypes from 'prop-types'

const WordBank = ({ words, ...props }) => (
  <p {...props}>
    {words.map((word, index) => (
      <span key={word}>
        {word} {index < words.length - 1 && '· '}
      </span>
    ))}
  </p>
)

export default WordBank
