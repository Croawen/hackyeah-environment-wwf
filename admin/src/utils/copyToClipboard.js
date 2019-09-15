const fallback = text => {
  const textArea = document.createElement('textarea')
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    document.execCommand('copy')
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err)
  }

  document.body.removeChild(textArea)
}

const copyToClipboard = text => {
  if (!navigator.clipboard) {
    return fallback(text)
  }
  navigator.clipboard.writeText(text).catch(err => {
    console.error('Async: Could not copy text: ', err)
  })
}

export default copyToClipboard
