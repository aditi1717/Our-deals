import exploreCities from '../assets/explore cites.jpg'
import homeServices from '../assets/home services.jpg'
import hotelPg from '../assets/hotel and pg.jpg'
import foodDining from '../assets/food and Dining.jpg'
import './TouristPlaces.css'

function TouristPlaces() {
  const cities = [
    {
      name: 'Mumbai',
      image: exploreCities,
      exploreText: 'Explore >'
    },
    {
      name: 'Pune',
      image: hotelPg,
      exploreText: 'Explore >'
    },
    {
      name: 'Nashik',
      image: homeServices,
      exploreText: 'Explore >'
    },
    {
      name: 'Ahmedabad',
      image: foodDining,
      exploreText: 'Explore >'
    }
  ]

  return (
    <div className="tourist-places-section">
      <div className="tourist-places-header">
        <h2 className="tourist-places-title">Explore Top Tourist Places</h2>
        <span className="new-badge">NEW</span>
      </div>
      <div className="tourist-places-container">
        <div className="tourist-places-carousel">
          {cities.map((city, index) => (
            <div key={index} className="tourist-place-card">
              <div className="tourist-place-image">
                <img src={city.image} alt={city.name} />
              </div>
              <div className="tourist-place-content">
                <h3 className="tourist-place-name">{city.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TouristPlaces

