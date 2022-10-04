import { useState } from "react"

export default function Image(props) {
  const {src} = props
  const [image, setImage] = useState(null)
  
  


  const loadImage = () => {
    const img = new window.Image()
    img.src = src
    img.addEventListener("load", handleLoad)
  }

  const handleLoad = () => {
    setImage(img)
  }

  return (
    <div>

    </div>
  )
}