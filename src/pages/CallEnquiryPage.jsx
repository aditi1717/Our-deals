import { useNavigate } from 'react-router-dom'
import './CallEnquiryPage.css'

function CallEnquiryPage() {
  const navigate = useNavigate()

  return (
    <div className="call-enquiry-page">
      <div className="call-enquiry-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="call-enquiry-title">Call Enquiry</h2>
        <div style={{ width: '24px' }}></div>
      </div>

      <div className="call-enquiry-content">
        <p className="empty-message">No call enquiries found.</p>
      </div>
    </div>
  )
}

export default CallEnquiryPage

