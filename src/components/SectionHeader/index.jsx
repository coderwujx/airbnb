import PropTypes from 'react'
import React, { memo } from 'react'
import { SectionWrapper } from './style'

const SectionHeader = memo((props) => {
  const { title, subtitle } = props

  return (
    <SectionWrapper>
      <div className="title">{title}</div>
      {
        subtitle && <div className="subtitle">{subtitle}</div>
      }
    </SectionWrapper>
  )
})

SectionHeader.prototype = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionHeader