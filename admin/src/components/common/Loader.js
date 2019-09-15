import React from 'react'
import { Spinner } from 'reactstrap'

const Loader = ({ ...props }) => {
  return <Spinner color="primary" {...props} />
}
export default Loader
