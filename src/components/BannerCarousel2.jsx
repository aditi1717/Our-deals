import { useState, useEffect } from 'react'
import banner4 from '../assets/banner 4.jpg'
import banner5 from '../assets/banner 5.jpg'
import banner6 from '../assets/banner 6.jpg'
import './BannerCarousel.css'

function BannerCarousel2() {
  const banners = [
    { id: 4, image: banner4, alt: 'Banner 4' },
    { id: 5, image: banner5, alt: 'Banner 5' },
    { id: 6, image: banner6, alt: 'Banner 6' }
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

export default BannerCarousel2

