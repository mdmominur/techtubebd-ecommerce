import SeoComponent from '@/components/Shared/SEO/Seo.component';
import React from 'react'
import HeroComponent from './Hero.component';
import FeatureProducts from './FeatureProducts.component';
import WhyChooseUs from './WhyChooseUs.component';
import LatestBlog from './LatestBlog.component';
import Footer from '@/components/Shared/Footer.component';
import Navbar from '@/components/Shared/Navbar.component';


const Home = (props) => {
  const {products} = props;
  return (
    <>
      <SeoComponent
        title="TechtubeBD - Your Ultimate Tech Destination"
        description="Explore and shop the latest tech gadgets in Bangladesh. Fast delivery, secure checkout, genuine products."
        keywords="tech gadgets, smartwatch, camera, headphones, bangladesh"
      />
      <Navbar/>
      <HeroComponent />
      <FeatureProducts products={products} />
      <WhyChooseUs />
      <LatestBlog />
      <Footer />
    </>
  )
}

export default Home;