import React from 'react'
import Form from './Form'
import Footer from './Footer'
import Insight from './Insight'
import Industries from './Industries'
import Carousel from './Carousel'
import ClientStories from './ClientStories'
function HomePage() {
  return (
    <>
      <Carousel />
      <Insight />
      <ClientStories />
      <Industries />
      <Form />

      <Footer />
    </>
  )
}

export default HomePage
