import React from 'react'
import Gallery from './Gallery'

const images = []
for (let i = 1; i <= 62; i++) {
  images.push(`/images/gallery/Image${i}.JPG`);
}

const page = () => {
  return (
    <>
      <Gallery images={images}></Gallery>
    </>

  )
}

export default page

