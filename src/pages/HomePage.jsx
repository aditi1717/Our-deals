import SearchSection from '../components/SearchSection'
import CategoryGrid from '../components/CategoryGrid'
import BannerCarousel from '../components/BannerCarousel'
import TouristPlaces from '../components/TouristPlaces'
import CategorySections from '../components/CategorySections'
import BannerCarousel2 from '../components/BannerCarousel2'
import WhyChooseUs from '../components/WhyChooseUs'
import Statistics from '../components/Statistics'
import AppDownload from '../components/AppDownload'
import TrustBadges from '../components/TrustBadges'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import './HomePage.css'

function HomePage() {
  return (
    <main className="homepage">
      <div className="homepage-container">
        <SearchSection />
        <CategoryGrid />
        <BannerCarousel />
        <CategorySections />
        <BannerCarousel2 />
        <TouristPlaces />
        <WhyChooseUs />
        <Statistics />
        <AppDownload />
        <TrustBadges />
        <FAQ />
        <Footer />
      </div>
    </main>
  )
}

export default HomePage
