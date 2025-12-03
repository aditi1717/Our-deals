import SearchSection from '../components/SearchSection'
import BannerWithCategories from '../components/BannerWithCategories'
import CategoryGrid from '../components/CategoryGrid'
import PopularCategoriesSection from '../components/PopularCategoriesSection'
import CategorySectionsList from '../components/CategorySectionsList'
import BannerCarousel from '../components/BannerCarousel'
import CategorySectionsList14to16 from '../components/CategorySectionsList14to16'
import RemainingCategorySectionsList from '../components/RemainingCategorySectionsList'
import WhyChooseUs from '../components/WhyChooseUs'
import Statistics from '../components/Statistics'
import TrustBadges from '../components/TrustBadges'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <main className="bg-white pt-[clamp(50px,6vw,60px)] md:pt-[clamp(50px,6vw,70px)]">
      <div className="max-w-[1400px] mx-auto pt-[clamp(16px,3vw,32px)] pb-0 px-0 bg-white md:px-0 md:pt-[clamp(16px,2vw,24px)]">
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
        <TrustBadges />
        <FAQ />
        <Footer />
      </div>
    </main>
  )
}

export default HomePage
