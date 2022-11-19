import CustomDesignServiceCard from '../components/CustomDesignServiceCard'
import FeatureSection from '../components/FeatureSection'
import Footer from '../components/footer'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import NewsletterSection from '../components/NewsletterSection'
import PromoSection from '../components/PromoSection'
import SelectedProductSection from '../components/SelectedProductSection'
import { selected_product_data, today_deal_data } from '../data/product'

export default function Home() {
  return (
    <div className='relative'>
      <NavBar />
      <Hero />
      <PromoSection />
      <SelectedProductSection
        products={selected_product_data}
        header='Selected just for you'
        onClick={() => {}}
      />
      <CustomDesignServiceCard />
      <FeatureSection />
      <SelectedProductSection
        products={today_deal_data}
        header='Products in today'
        onClick={() => {}}
      />
      <NewsletterSection />
      <Footer />
    </div>
  )
}
