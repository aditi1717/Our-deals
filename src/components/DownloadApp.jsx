import clientLogo from '../assets/Client logo.png'
import './DownloadApp.css'

function DownloadApp({ isMobile = false }) {
  return (
    <div className={`download-app-wrapper ${isMobile ? 'mobile-only' : 'desktop-only'}`}>
      <button className="download-app-btn">
        <span className="download-app-text">Download App</span>
      </button>
      <div className="download-app-icon-wrapper">
        <div className="download-app-icon">
          <div className="phone-notch"></div>
          <div className="phone-content">
            <img src={clientLogo} alt="Our Deals" className="phone-logo-image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadApp

