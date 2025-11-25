import consultant from '../assets/consultant.png'
import repair from '../assets/repair.png'
import homeServices from '../assets/home services.jpg'
import doctor from '../assets/doctor.jpg'
import './ContentGrid.css'

function ContentGrid() {
  return (
    <div className="content-grid">
      {/* Left Side - Banner */}
      <div className="banner-section">
        <div className="promo-banner">
          <div className="banner-content">
            <h3>Time to fly at Lowest Airfares</h3>
            <button className="book-now-btn">Book Now</button>
            <p className="powered-by">Powered by EaseMyTrip.com</p>
          </div>
          <div className="banner-image">
            <div className="suitcase-icon">✈️</div>
          </div>
        </div>
      </div>

      {/* Middle - Service Cards */}
      <div className="service-cards">
        <div className="service-card">
          <img src={consultant} alt="B2B Quick Quotes" />
          <h4>B2B Quick Quotes</h4>
        </div>
        <div className="service-card">
          <img src={repair} alt="Repairs & Services" />
          <h4>REPAIRS & SERVICES</h4>
          <p>Get Nearest Vendor</p>
        </div>
        <div className="service-card">
          <img src={homeServices} alt="Real Estate" />
          <h4>REAL ESTATE</h4>
          <p>Finest Agents</p>
        </div>
        <div className="service-card">
          <img src={doctor} alt="Doctors" />
          <h4>DOCTORS</h4>
          <p>Book Now</p>
        </div>
      </div>

      {/* Right Side - Action Buttons */}
      <div className="action-buttons">
        <button className="download-app-btn">
          <span className="phone-icon">📱</span>
          <div>
            <div className="app-label">Download App</div>
            <div className="app-logo">OD</div>
          </div>
        </button>
        <button className="advertise-btn">Advertise</button>
        <button className="free-listing-btn">Free Listing</button>
      </div>
    </div>
  )
}

export default ContentGrid

