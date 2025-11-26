import './AppDownload.css'

function AppDownload() {
  return (
    <div className="app-download-section">
      <div className="app-download-container">
        <div className="app-download-content">
          <div className="app-download-text">
            <h2 className="app-download-title">Download Our App</h2>
            <p className="app-download-description">
              Get the best deals and services on the go. Download our app now!
            </p>
            <div className="app-download-buttons">
              <a href="#" className="app-download-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.18 8.85 6.84 8.37c1.08.07 1.97.67 3.08.73 1.14-.07 2.19-.63 3.45-.64 1.47.03 2.79.58 3.84 1.33-3.36 1.87-2.94 6.68.58 8.29-.76 1.99-1.66 3.95-2.83 5.9-.58 1.01-1.26 2.02-2.17 2.78zM12.03 7.89c.27-2.8 2.43-4.97 5.24-5.23.42 3.05-2.33 5.8-5.24 5.23z"/>
                </svg>
                <div className="btn-text">
                  <span className="btn-label">Download on the</span>
                  <span className="btn-name">App Store</span>
                </div>
              </a>
              <a href="#" className="app-download-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L16.81,15.12L14.54,12.85L16.81,10.81L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="btn-text">
                  <span className="btn-label">Get it on</span>
                  <span className="btn-name">Google Play</span>
                </div>
              </a>
            </div>
          </div>
          <div className="app-download-image">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-content">
                  <div className="phone-header"></div>
                  <div className="phone-body"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppDownload

