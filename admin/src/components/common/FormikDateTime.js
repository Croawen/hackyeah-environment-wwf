import React from 'react'
import Datetime from 'react-datetime'
import moment from 'moment'
import 'react-datetime/css/react-datetime.css'

const FormikDateTime = ({ field, form, timeFormat, dateFormat, invalid, isValid }) => {
  const onFieldChange = value => {
    let dateValue = value

    // if the date field isn't in a valid date format,
    // react-datetime's onChange handler returns a string
    // otherwise it returns a moment object
    // this is why we can't override DateTime's onChange
    // prop with Formik's field.onChange
    // if (value instanceof moment) {
    //   dateValue = moment(value).format('llll')
    // }

    form.setFieldValue(field.name, dateValue)
  }

  const onFieldBlur = () => {
    form.setFieldTouched(field.name, true)
  }

  const valid = current => {
    return current.isSameOrAfter(moment(new Date()), 'day')
  }

  return (
    <Datetime
      value={field.value}
      timeFormat={timeFormat}
      dateFormat={dateFormat}
      id={field.name}
      name={field.name}
      onChange={onFieldChange}
      onBlur={onFieldBlur}
      isValidDate={valid}
      inputProps={{
        placeholder: 'Select date and time',
        className: `${invalid ? 'form-control is-invalid' : 'form-control'} ${
          isValid ? ' is-valid' : ''
        }`,
      }}
    />
  )
}

export default FormikDateTime
