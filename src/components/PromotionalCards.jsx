import consultant from '../assets/consultant.png'
import repair from '../assets/repair.png'
import homeServices from '../assets/home services.jpg'
import doctor from '../assets/doctor.jpg'
import './PromotionalCards.css'

function PromotionalCards() {
  const cards = [
    {
      title: "B2B",
      subtitle: "Quick Quotes",
      image: consultant,
      bgClass: "card-blue"
    },
    {
      title: "REPAIRS & SERVICES",
      subtitle: "Get Nearest Vendor",
      image: repair,
      bgClass: "card-blue-dark"
    },
    {
      title: "REAL ESTATE",
      subtitle: "Finest Agents",
      image: homeServices,
      bgClass: "card-indigo"
    },
    {
      title: "DOCTORS",
      subtitle: "Book Now",
      image: doctor,
      bgClass: "card-purple"
    }
  ]

  return (
    <div className="promotional-section">
      <div className="promotional-cards">
        {cards.map((card, index) => (
          <div key={index} className={`promotional-card ${card.bgClass}`}>
            {card.image ? (
              <div className="card-image-wrapper">
                <img src={card.image} alt={card.title} className="card-image" />
                <div className="card-content-overlay">
                  <h3 className="card-title">{card.title}</h3>
                  {card.subtitle && <p className="card-subtitle">{card.subtitle}</p>}
                </div>
              </div>
            ) : (
              <div className="card-icon-wrapper">
                <div className="card-icon">{card.icon}</div>
                <div className="card-content-overlay">
                  <h3 className="card-title">{card.title}</h3>
                  {card.subtitle && <p className="card-subtitle">{card.subtitle}</p>}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PromotionalCards
