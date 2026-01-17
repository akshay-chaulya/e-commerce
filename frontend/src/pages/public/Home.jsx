import OurPolicy from '@/components/OurPolicy'
import Hero from '@/components/Hero'
import NewsletterBox from '@/components/common/NewsletterBox'
import BestSeller from '@/components/product/BestSeller'
import LatestCollection from '@/components/product/LatestCollection'

const Home = () => {
  
  return (
    <div>
      <Hero/> 
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
