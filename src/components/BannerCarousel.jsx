import { useState, useEffect } from 'react'
import banner1 from '../assets/banner 1.jpg'
import banner2 from '../assets/banner 2.jpg'
import banner3 from '../assets/banner 3.jpg'
import banner4 from '../assets/banner 4.jpg'
import banner5 from '../assets/banner 5.jpg'
import banner6 from '../assets/banner 6.jpg'

function BannerCarousel({ bannerSet = 1 }) {
  // First set: banners 1, 2, 3
  // Second set: banners 4, 5, 6
  const allBanners = [
    { id: 1, image: banner1, alt: 'Banner 1' },
    { id: 2, image: banner2, alt: 'Banner 2' },
    { id: 3, image: banner3, alt: 'Banner 3' },
    { id: 4, image: banner4, alt: 'Banner 4' },
    { id: 5, image: banner5, alt: 'Banner 5' },
    { id: 6, image: banner6, alt: 'Banner 6' }
  ]

  const banners = bannerSet === 1 
    ? allBanners.slice(0, 3) // First 3 banners (1, 2, 3)
    : allBanners.slice(3, 6)  // Last 3 banners (4, 5, 6)

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
    }, 4000) // Change banner every 4 seconds

    return () => clearInterval(interval)
  }, [banners.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="mb-12 px-4">
      <div className="relative w-full overflow-hidden rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.1)] bg-white h-[clamp(220px,30vw,380px)] md:h-[clamp(180px,25vw,300px)]">
        <div 
          className="flex transition-transform duration-500 ease-in-out w-full h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner) => (
            <div key={banner.id} className="min-w-full w-full h-full overflow-hidden relative flex-shrink-0">
              <img src={banner.image} alt={banner.alt} className="w-full h-full object-cover block" style={{ imageRendering: '-webkit-optimize-contrast', imageRendering: 'crisp-edges' }} />
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 md:bottom-3 left-1/2 -translate-x-1/2 flex gap-2 md:gap-1.5 z-10 bg-black/50 px-3 py-1.5 md:px-2.5 md:py-1 rounded-full">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`rounded-full border-none cursor-pointer transition-all p-0 ${index === currentIndex ? 'bg-[#13335a] w-5 md:w-[18px] rounded-[10px] md:rounded-[9px]' : 'bg-white/60 w-2 md:w-1.5 hover:bg-white/90 hover:scale-110'} h-2 md:h-1.5`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BannerCarousel

