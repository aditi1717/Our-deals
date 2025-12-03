import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { dummyCategoriesData } from '../data/dummyCategories'
import banner7 from '../assets/banner 7.jpg'
import banner8 from '../assets/banner 8.webp'

function BannerWithCategories() {
  const navigate = useNavigate()
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0)

  const banners = [banner7, banner8]

  // Get Wedding Requisites and Explore City categories
  const weddingRequisites = dummyCategoriesData.find(
    cat => cat.categoryName === 'Wedding Requisites'
  )
  const exploreCity = dummyCategoriesData.find(
    cat => cat.categoryName === 'Explore City'
  )

  useEffect(() => {
    // Set first banner as active immediately
    if (banners.length > 0) {
      setCurrentBannerIndex(0)
    }
    
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % banners.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [banners.length])

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${encodeURIComponent(categoryName)}`)
  }

  return (
    <div className="hidden md:flex w-full px-4 mb-[clamp(24px,3vw,32px)] md:mb-[clamp(20px,2.5vw,28px)] flex-col md:flex-row gap-[clamp(12px,1.5vw,16px)] items-stretch">
      {/* Banner */}
      <div className="flex-1 max-w-[50%] rounded-[clamp(12px,1.5vw,16px)] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)] relative bg-gray-100 h-[clamp(200px,25vw,400px)] min-h-[clamp(200px,25vw,400px)]">
        <div className="relative w-full h-full">
          {banners.map((banner, index) => (
            <img
              key={index}
              src={banner}
              alt={`Banner ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full block object-cover transition-opacity duration-500 ${index === currentBannerIndex ? 'opacity-100 z-[1]' : 'opacity-0'} ${index === 0 ? 'opacity-100 z-[1]' : ''}`}
            />
          ))}
        </div>
        <div className="absolute bottom-[clamp(12px,1.5vw,16px)] left-1/2 -translate-x-1/2 flex gap-[clamp(6px,0.8vw,8px)] z-10">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-[clamp(8px,1vw,10px)] h-[clamp(8px,1vw,10px)] rounded-full border-none cursor-pointer transition-colors p-0 ${index === currentBannerIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/80'}`}
              onClick={() => setCurrentBannerIndex(index)}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Category Boxes */}
      <div className="grid grid-cols-2 gap-[clamp(12px,1.5vw,16px)] flex-[0_0_auto] w-full md:w-[clamp(500px,50vw,600px)] h-[clamp(200px,25vw,400px)] min-h-[clamp(200px,25vw,400px)]">
        {weddingRequisites && (
          <div 
            className="bg-white rounded-[clamp(28px,4vw,40px)] shadow-[0_-2px_6px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.08),-2px_0_6px_rgba(0,0,0,0.08),2px_0_6px_rgba(0,0,0,0.08)] overflow-visible cursor-pointer flex-shrink-0 transition-all flex flex-col p-[clamp(12px,1.5vw,16px)] box-border relative hover:-translate-y-1 h-full"
            onClick={() => handleCategoryClick(weddingRequisites.categoryName)}
          >
            <div className="flex items-center justify-between py-[clamp(12px,1.5vw,16px)] px-[clamp(10px,1.3vw,14px)] bg-white box-border flex-shrink-0">
              <span className="text-[clamp(14px,1.8vw,18px)] font-bold text-[#856D65] flex-1 leading-[1.3] break-words overflow-hidden text-ellipsis line-clamp-2">{weddingRequisites.categoryName}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#856D65] flex-shrink-0 w-[clamp(12px,1.5vw,16px)] h-[clamp(12px,1.5vw,16px)] ml-2">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="w-full flex-1 relative overflow-hidden bg-white rounded-b-[clamp(28px,4vw,40px)] min-h-0">
              <img 
                src={weddingRequisites.image} 
                alt={weddingRequisites.categoryName}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {exploreCity && (
          <div 
            className="bg-white rounded-[clamp(28px,4vw,40px)] shadow-[0_-2px_6px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.08),-2px_0_6px_rgba(0,0,0,0.08),2px_0_6px_rgba(0,0,0,0.08)] overflow-visible cursor-pointer flex-shrink-0 transition-all flex flex-col p-[clamp(12px,1.5vw,16px)] box-border relative hover:-translate-y-1 h-full"
            onClick={() => handleCategoryClick(exploreCity.categoryName)}
          >
            <div className="flex items-center justify-between py-[clamp(12px,1.5vw,16px)] px-[clamp(10px,1.3vw,14px)] bg-white box-border flex-shrink-0">
              <span className="text-[clamp(14px,1.8vw,18px)] font-bold text-[#856D65] flex-1 leading-[1.3] break-words overflow-hidden text-ellipsis line-clamp-2">{exploreCity.categoryName}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#856D65] flex-shrink-0 w-[clamp(12px,1.5vw,16px)] h-[clamp(12px,1.5vw,16px)] ml-2">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="w-full flex-1 relative overflow-hidden bg-white rounded-b-[clamp(28px,4vw,40px)] min-h-0">
              <img 
                src={exploreCity.image} 
                alt={exploreCity.categoryName}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BannerWithCategories

