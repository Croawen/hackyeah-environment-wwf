import { useState } from 'react'

// [null | string, boolean, function]
const useImagePreview = () => {
  const reader = new FileReader()

  const [previewSrc, setPreviewSrc] = useState(null)
  const [loading, setLoading] = useState(false)

  const loadHandler = () => {
    setPreviewSrc(reader.result)
    setLoading(false)
  }

  const loadFile = file => {
    setLoading(true)
    if (file && file.type.startsWith('image/')) {
      reader.readAsDataURL(file)
    } else {
      setPreviewSrc(null)
      setLoading(false)
    }
  }

  reader.addEventListener('load', loadHandler)
  return [previewSrc, loading, loadFile]
}

export default useImagePreview
