// https://github.com/alphagov/govuk-frontend/blob/master/src/components/radios/_radios.scss
import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import { YELLOW } from 'govuk-colours'

const MultipleChoice = glamorous.label({
  display: 'block',
  float: 'none',
  clear: 'left',
  position: 'relative',
  padding: '0 0 0 38px',
  marginBottom: '10px',
  ':last-child': {
    marginBottom: 0
  }
},
({inline}) => ({
  float: inline ? 'left' : 'none',
  clear: inline ? 'none' : 'left',
  marginRight: inline ? '30px' : '0',
  marginBottom: inline ? '0' : MultipleChoice.marginBottom
}))

const Input = glamorous.input({
  position: 'absolute',
  cursor: 'pointer',
  left: 0,
  top: 0,
  width: '38px',
  height: '38px',
  zIndex: 1,
  margin: 0,
  zoom: 1,
  opacity: 0,
  '[disabled]': {
    cursor: 'auto',
  },
  '[disabled] + span': {
    opacity: '.4',
    cursor: 'auto',
    pointerEvents: 'none'
  },
  ':checked + span::after': {
    opacity: 1
  },
  ':focus + span::before': {
    boxShadow: `0 0 0 4px ${YELLOW}`
  }
})

const Label = glamorous.span({
  fontFamily: '"nta", Arial, sans-serif',
  fontWeight: 400,
  textTransform: 'none',
  fontSize: '16px',
  lineHeight: '1.25',
  cursor: 'pointer',
  padding: '8px 10px 9px 12px',
  display: 'block',
  ':before': {
    content: ' ',
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '2.10526em',
    height: '2.10526em',
    border: '2px solid black',
    borderRadius: '50%',
    background: 'transparent'
  },
  ':after': {
    content: ' ',
    position: 'absolute',
    top: '0.52632em',
    left: '0.52632em',
    width: 0,
    height: 0,
    border: '0.52632em solid',
    borderRadius: '50%',
    opacity: 0
  }
});


const Radio = ({children, ...props}) => (
  <MultipleChoice {...props}>
    <Input type="radio" name={props.radioName} {...props} />
    <Label>{children}</Label>
  </MultipleChoice>
)

Radio.propTypes = {
	children: PropTypes.node.isRequired,
  radioName: PropTypes.string.isRequired
}

export default Radio;