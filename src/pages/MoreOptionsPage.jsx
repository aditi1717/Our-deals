import { useNavigate } from 'react-router-dom'
import './MoreOptionsPage.css'

function MoreOptionsPage() {
  const navigate = useNavigate()

  const handleAgentClick = () => {
    // Navigate to agent page or handle agent action
    // navigate('/agent')
    console.log('Agent clicked')
  }

  const handleVendorClick = () => {
    // Navigate to vendor page or handle vendor action
    // navigate('/vendor')
    console.log('Vendor clicked')
  }

  return (
    <div className="more-options-page">
      <div className="more-options-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="more-options-title">More Options</h2>
        <div style={{ width: '24px' }}></div>
      </div>

      <div className="more-options-content">
        <div className="more-options-grid">
          <div className="more-option-card" onClick={handleAgentClick}>
            <div className="more-option-icon agent-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 17C7 14.7909 9.23858 13 12 13C14.7614 13 17 14.7909 17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="more-option-label">Agent</span>
          </div>

          <div className="more-option-card" onClick={handleVendorClick}>
            <div className="more-option-icon vendor-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="more-option-label">Vendor</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreOptionsPage

