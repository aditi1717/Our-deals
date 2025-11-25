import { useState, useEffect } from 'react'
import banner1 from '../assets/banner 1.jpg'
import banner2 from '../assets/banner 2.jpg'
import banner3 from '../assets/banner 3.jpg'
import './BannerCarousel.css'

function BannerCarousel() {
  const banners = [
    { id: 1, image: banner1, alt: 'Banner 1' },
    { id: 2, image: banner2, alt: 'Banner 2' },
    { id: 3, image: banner3, alt: 'Banner 3' }
  ]

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
    <div className="banner-carousel-section">
      <div className="banner-carousel-container">
        <div 
          className="banner-carousel-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner) => (
            <div key={banner.id} className="banner-slide">
              <img src={banner.image} alt={banner.alt} className="banner-image" />
            </div>
          ))}
        </div>
        <div className="banner-indicators">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`banner-indicator ${index === currentIndex ? 'active' : ''}`}
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

