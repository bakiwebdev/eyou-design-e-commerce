import CustomDesignServiceCard from '../components/CustomDesignServiceCard'
import FeatureSection from '../components/FeatureSection'
import Footer from '../components/footer'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import NewsletterSection from '../components/NewsletterSection'
import PromoSection from '../components/PromoSection'
import SelectedProductSection from '../components/SelectedProductSection'

export default function Home() {
  return (
    <div className='relative'>
      <NavBar />
      <Hero />
      <PromoSection />
      <SelectedProductSection
        header='Selected just for you'
        onClick={() => {}}
      />
      <CustomDesignServiceCard />
      <FeatureSection />
      <SelectedProductSection header='Products in today' onClick={() => {}} />
      <NewsletterSection />
      <Footer />
    </div>
  )
}
