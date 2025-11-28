import SearchSection from '../components/SearchSection'
import DownloadApp from '../components/DownloadApp'
import BannerWithCategories from '../components/BannerWithCategories'
import CategoryGrid from '../components/CategoryGrid'
import PopularCategoriesSection from '../components/PopularCategoriesSection'
import CategorySectionsList from '../components/CategorySectionsList'
import BannerCarousel from '../components/BannerCarousel'
import CategorySectionsList14to16 from '../components/CategorySectionsList14to16'
import RemainingCategorySectionsList from '../components/RemainingCategorySectionsList'
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
        <div className="download-app-top-wrapper">
          <DownloadApp />
        </div>
        <SearchSection />
        <BannerWithCategories />
        <CategoryGrid />
        <PopularCategoriesSection />
        <CategorySectionsList />
        <BannerCarousel bannerSet={1} />
        <CategorySectionsList14to16 />
        <BannerCarousel bannerSet={2} />
        <RemainingCategorySectionsList />
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
