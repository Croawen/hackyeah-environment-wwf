import flat from 'flat'

const getErrorMessage = (touched, errors, otherError) => {
  const flatTouched = flat(touched)
  const flatErrors = flat(errors)

  const touchedErrors = Object.keys(flatErrors)
    .filter(key => flatTouched[key])
    .map(key => flatErrors[key])
  if (touchedErrors.length > 1) {
    return 'Some fields are invalid'
  } else {
    return touchedErrors[0] || otherError
  }
}

export default getErrorMessage
