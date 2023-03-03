import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import BlogPost from './BlogPost'

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <Hero />
      <BlogPost />
      <Footer />
    </div>
  )
}

export default HomeScreen