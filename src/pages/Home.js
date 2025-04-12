import React from 'react'
import HeroSection from '../components/Herosection'
import Categories from '../components/Categories'
import PopularProducts from '../components/PopularProducts'
import PromoBanner from '../components/PromoBanner'
import TopBrands from '../components/TopBrands'
const Home = () => {
  return (
    <div>
        <HeroSection />
        <Categories />
        <PopularProducts />
        <PromoBanner />
        <TopBrands />
    </div>
  )
}

export default Home