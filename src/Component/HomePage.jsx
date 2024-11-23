import React from 'react'
import Form from './Form'
import Footer from './Footer'
import Insight from './Insight'
import Industries from './Industries'
import Carousel from './Carousel'
import ClientStories from './ClientStories'
import Blog from './Blog'
import MediaCard from './MediaCard'
function HomePage() {
  return (
    <>
      <Carousel />
      <Blog />
      <Insight />
      <ClientStories />
      <Industries />
      <MediaCard />
      <Form />

      <Footer />
    </>
  )
}

export default HomePage
