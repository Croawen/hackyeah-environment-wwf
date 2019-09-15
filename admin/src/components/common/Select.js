import ReactSelect from 'react-select'
import styled from 'styled-components'
import React from 'react'

const customStyles = {
  control: (provided, { selectProps: { small } }) => {
    if (!small) return provided
    return {
      ...provided,
      height: 'calc(1.5em + 0.5rem + 2px)',
      minHeight: 'auto',
      fontSize: '0.76562rem',
    }
  },
  dropdownIndicator: (provided, { selectProps: { small } }) => {
    if (!small) return provided
    return {
      ...provided,
      paddingTop: '0',
      paddingBottom: '0',
    }
  },
  valueContainer: (provided, { selectProps: { small } }) => {
    if (!small) return provided
    return {
      ...provided,
      padding: '0 0.5rem',
    }
  },
}

const Select = styled(props => (
  <ReactSelect {...props} styles={customStyles} />
))`
  z-index: ${props => (props.zIndex ? props.zIndex : 10)};
`

export default Select
