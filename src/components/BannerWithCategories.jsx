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
    <div className="w-full px-4 mb-[clamp(24px,3vw,32px)] md:mb-[clamp(20px,2.5vw,28px)] flex flex-col md:flex-row gap-[clamp(12px,1.5vw,16px)] items-stretch">
      {/* Banner */}
      <div className="flex-1 rounded-[clamp(12px,1.5vw,16px)] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)] min-h-[clamp(200px,40vw,364px)] h-[clamp(200px,40vw,364px)] md:min-h-[364px] md:h-[364px] relative bg-gray-100">
        <div className="relative w-full h-full min-h-[clamp(200px,40vw,364px)] md:min-h-[364px]">
          {banners.map((banner, index) => (
            <img
              key={index}
              src={banner}
              alt={`Banner ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full block object-cover transition-opacity duration-500 min-h-[clamp(200px,40vw,364px)] md:min-h-[364px] ${index === currentBannerIndex ? 'opacity-100 z-[1]' : 'opacity-0'} ${index === 0 ? 'opacity-100 z-[1]' : ''}`}
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
      <div className="grid grid-cols-2 gap-[clamp(12px,1.5vw,16px)] flex-[0_0_auto] w-full md:w-[clamp(300px,35vw,400px)] items-stretch">
        {weddingRequisites && (
          <div 
            className="bg-[rgba(133,109,101,0.1)] border border-[rgba(133,109,101,0.3)] rounded-[clamp(12px,1.8vw,16px)] shadow-[0_0_8px_2px_rgba(133,109,101,0.2)] overflow-hidden cursor-pointer transition-all flex flex-col p-0 box-border relative hover:-translate-y-0.5 hover:shadow-[0_0_12px_4px_rgba(133,109,101,0.3)]"
            onClick={() => handleCategoryClick(weddingRequisites.categoryName)}
          >
            <div className="flex items-center justify-between py-[clamp(14px,1.8vw,18px)] px-[clamp(12px,1.5vw,16px)] bg-transparent min-h-[clamp(90px,10vw,110px)] box-border overflow-visible flex-shrink-0">
              <div className="flex-1 flex flex-col gap-[clamp(4px,0.5vw,6px)] min-w-0 overflow-visible justify-center">
                <h3 className="text-[clamp(16px,2vw,20px)] font-bold text-black m-0 leading-[1.3] break-words overflow-hidden text-ellipsis line-clamp-2 max-h-[2.6em] flex-shrink-0">{weddingRequisites.categoryName}</h3>
                <p className="text-[clamp(12px,1.5vw,14px)] font-normal text-black m-0 opacity-100 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap block visible">Quick Quotes</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black flex-shrink-0 w-[clamp(14px,1.5vw,18px)] h-[clamp(14px,1.5vw,18px)] ml-2">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="w-full h-[clamp(140px,38vw,200px)] md:h-auto md:h-[clamp(180px,30vw,250px)] relative overflow-hidden bg-[rgba(133,109,101,0.1)] rounded-b-[clamp(12px,1.8vw,16px)] flex-shrink-0">
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
            className="bg-[rgba(133,109,101,0.1)] border border-[rgba(133,109,101,0.3)] rounded-[clamp(12px,1.8vw,16px)] shadow-[0_0_8px_2px_rgba(133,109,101,0.2)] overflow-hidden cursor-pointer transition-all flex flex-col p-0 box-border relative hover:-translate-y-0.5 hover:shadow-[0_0_12px_4px_rgba(133,109,101,0.3)]"
            onClick={() => handleCategoryClick(exploreCity.categoryName)}
          >
            <div className="flex items-center justify-between py-[clamp(14px,1.8vw,18px)] px-[clamp(12px,1.5vw,16px)] bg-transparent min-h-[clamp(90px,10vw,110px)] box-border overflow-visible flex-shrink-0">
              <div className="flex-1 flex flex-col gap-[clamp(4px,0.5vw,6px)] min-w-0 overflow-visible justify-center">
                <h3 className="text-[clamp(16px,2vw,20px)] font-bold text-black m-0 leading-[1.3] break-words overflow-hidden text-ellipsis line-clamp-2 max-h-[2.6em] flex-shrink-0">{exploreCity.categoryName}</h3>
                <p className="text-[clamp(12px,1.5vw,14px)] font-normal text-black m-0 opacity-100 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap block visible">Get Nearest Vendor</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black flex-shrink-0 w-[clamp(14px,1.5vw,18px)] h-[clamp(14px,1.5vw,18px)] ml-2">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="w-full h-[clamp(140px,38vw,200px)] md:h-auto md:h-[clamp(180px,30vw,250px)] relative overflow-hidden bg-[rgba(133,109,101,0.1)] rounded-b-[clamp(12px,1.8vw,16px)] flex-shrink-0">
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

