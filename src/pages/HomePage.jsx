import SearchSection from '../components/SearchSection'
import CategoryGrid from '../components/CategoryGrid'
import PopularSearches from '../components/PopularSearches'
import BannerCarousel from '../components/BannerCarousel'
import TouristPlaces from '../components/TouristPlaces'
import CategorySections from '../components/CategorySections'
import BannerCarousel2 from '../components/BannerCarousel2'
import './HomePage.css'

function HomePage() {
  return (
    <main className="homepage">
      <div className="homepage-container">
        <SearchSection />
        <CategoryGrid />
        <PopularSearches />
        <BannerCarousel />
        <CategorySections />
        <BannerCarousel2 />
        <TouristPlaces />
      </div>
    </main>
  )
}

export default HomePage
