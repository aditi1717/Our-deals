import homeServices from '../assets/home services.jpg'
import hotelPg from '../assets/hotel and pg.jpg'
import foodDining from '../assets/food and Dining.jpg'
import weddingPlans from '../assets/wedding plans.jpg'
import consultant from '../assets/consultant.png'
import './PopularSearches.css'

function PopularSearches() {
  const popularItems = [
    {
      title: "Estate Agents For Residential Rental",
      image: homeServices,
      buttonText: "Enquire Now"
    },
    {
      title: "Interior Designers",
      image: homeServices,
      buttonText: "Enquire Now"
    },
    {
      title: "Real Estate Agents",
      image: homeServices,
      buttonText: "Enquire Now"
    },
    {
      title: "Banquet Halls",
      image: hotelPg,
      buttonText: "Enquire Now"
    },
    {
      title: "Caterers",
      image: foodDining,
      buttonText: "Enquire Now"
    }
  ]

  return (
    <div className="popular-searches-section">
      <h2 className="popular-searches-title">Popular Searches</h2>
      <div className="popular-searches-container">
        <div className="popular-searches-carousel">
          {popularItems.map((item, index) => (
            <div key={index} className="popular-search-card">
              <div className="popular-search-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="popular-search-content">
                <h3 className="popular-search-title">{item.title}</h3>
                <button className="popular-search-button">{item.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PopularSearches

