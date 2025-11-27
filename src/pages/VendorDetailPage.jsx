import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaPhone, FaWhatsapp, FaDirections, FaShare } from 'react-icons/fa'
import './VendorDetailPage.css'

function VendorDetailPage() {
  const navigate = useNavigate()
  const { vendorId } = useParams()
  const [activeTab, setActiveTab] = useState('Overview')
  const [selectedRating, setSelectedRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)

  // Sample vendor data - In real app, this would be fetched based on vendorId
  // This matches the vendors from VendorListPage
  const allVendors = [
    {
      id: 1,
      name: 'Test Services',
      rating: 5.0,
      ratingsCount: 7,
      address: '123 MG Road, Indore',
      city: 'Indore',
      yearsInBusiness: 4,
      hours: 'Open 24 Hrs',
      phone: '1234567890',
      email: 'test@example.com',
      whatsapp: '1234567890',
      services: [
        { icon: 'list', text: '24 Hours Services Available' },
        { icon: 'lightning', text: 'Respond in 25 mins.' }
      ],
      category: 'Grocery Store'
    },
    {
      id: 2,
      name: 'City Mart Supermarket',
      rating: 4.8,
      ratingsCount: 12,
      address: '456 AB Road, Indore',
      city: 'Indore',
      yearsInBusiness: 6,
      hours: 'Open: 8:00 AM – 10:00 PM',
      phone: '9876543210',
      email: 'citymart@example.com',
      whatsapp: '9876543210',
      services: [
        { icon: 'list', text: 'Home Delivery Available' },
        { icon: 'lightning', text: 'Fast Delivery Service' }
      ],
      category: 'Supermarket'
    }
  ]

  // Find vendor by ID or use default
  const vendorData = allVendors.find(v => v.id === parseInt(vendorId)) || {
    id: 1,
    name: 'vivek',
    rating: 5.0,
    ratingsCount: 7,
    address: '123 MG Road, Indore',
    city: 'Indore',
    yearsInBusiness: 9,
    hours: 'Open 24 Hrs',
    phone: '9876543255',
    email: 'vivek12@example.com',
    whatsapp: '9876543255',
    services: [
      { icon: 'list', text: 'Cooling Solution good.' },
      { icon: 'lightning', text: 'Respond in 25 mins.' }
    ],
    category: 'Grocery Store'
  }

  const handleCall = () => {
    window.location.href = `tel:+91${vendorData.phone}`
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/91${vendorData.whatsapp.replace(/[^0-9]/g, '')}`, '_blank')
  }

  const handleDirection = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(vendorData.address)}`, '_blank')
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: vendorData.name,
        text: `Check out ${vendorData.name} at ${vendorData.address}`,
        url: window.location.href
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  const tabs = ['Overview', 'Reviews', 'Quick Info']

  return (
    <div className="vendor-detail-page">
      {/* Header */}
      <div className="vendor-detail-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="vendor-detail-title">About Service</h2>
        <div style={{ width: '24px' }}></div>
      </div>

      <div className="vendor-detail-content">
        {/* Main Vendor Card */}
        <div className="vendor-detail-card">
          <div className="vendor-detail-main">
            <div className="vendor-detail-info">
              <div className="vendor-name-rating">
                <div className="vendor-name-header">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 11L12 2L17 11M7 11H17M7 11L12 14L17 11M17 18H7L12 22L17 18Z" fill="currentColor"/>
                  </svg>
                  <h1 className="vendor-detail-name">{vendorData.name}</h1>
                </div>
                <div className="vendor-rating-badge">
                  <div className="rating-score">
                    <span>{vendorData.rating}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <span className="ratings-count">{vendorData.ratingsCount} Ratings</span>
                </div>
              </div>

              <div className="vendor-location-info">
                <p className="vendor-address">{vendorData.address}</p>
                <p className="vendor-business-years">{vendorData.yearsInBusiness} Years in Business</p>
                <p className="vendor-hours-badge">{vendorData.hours}</p>
              </div>

              <div className="vendor-services-list">
                {vendorData.services.map((service, index) => (
                  <div key={index} className="service-item">
                    {service.icon === 'list' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {service.icon === 'lightning' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    <span>{service.text}</span>
                  </div>
                ))}
              </div>

              <div className="vendor-quick-actions">
                <button className="quick-action-btn" onClick={handleCall}>
                  <div className="quick-action-icon-box">
                    <FaPhone className="quick-action-icon" />
                  </div>
                  <span>Call Now</span>
                </button>
                <button className="quick-action-btn" onClick={handleWhatsApp}>
                  <div className="quick-action-icon-box">
                    <div className="whatsapp-icon-wrapper">
                      <FaPhone className="quick-action-icon" />
                    </div>
                  </div>
                  <span>Whatsapp</span>
                </button>
                <button className="quick-action-btn" onClick={handleDirection}>
                  <div className="quick-action-icon-box">
                    <FaDirections className="quick-action-icon" />
                  </div>
                  <span>Direction</span>
                </button>
                <button className="quick-action-btn" onClick={handleShare}>
                  <div className="quick-action-icon-box">
                    <FaShare className="quick-action-icon" />
                  </div>
                  <span>Share</span>
                </button>
              </div>
            </div>

            <div className="vendor-image-section-detail">
              <div className="vendor-image-placeholder-detail">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 16L8.586 11.414C8.96106 11.0391 9.46967 10.8284 10 10.8284C10.5303 10.8284 11.0389 11.0391 11.414 11.414L16 16M14 14L15.586 12.414C15.9611 12.0391 16.4697 11.8284 17 11.8284C17.5303 11.8284 18.0389 12.0391 18.414 12.414L20 14M14 8H14.01M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="coming-soon-text">COMING SOON</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="vendor-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`vendor-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="vendor-tab-content">
            {activeTab === 'Overview' && (
              <div className="overview-content">
                <div className="info-row">
                  <span className="info-label">City:</span>
                  <span className="info-value">{vendorData.city}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Contact:</span>
                  <div className="info-value-with-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9842 21.5573 21.2126 21.3518 21.3992C21.1463 21.5858 20.9033 21.7262 20.6381 21.811C20.3729 21.8958 20.0922 21.9231 19.815 21.891C16.7428 21.5856 13.786 20.5341 11.19 18.82C8.77382 17.3148 6.72533 15.2663 5.22 12.85C3.49997 10.2412 2.44824 7.27099 2.15 4.18C2.11793 3.90322 2.14518 3.62281 2.22981 3.35788C2.31444 3.09295 2.45452 2.85002 2.64082 2.64458C2.82712 2.43914 3.05531 2.27554 3.31007 2.16389C3.56483 2.05224 3.84034 1.99508 4.119 2H7.119C7.59357 1.99522 8.05808 2.16708 8.43322 2.49055C8.80836 2.81402 9.07173 3.27236 9.179 3.78L9.88 6.75C9.98603 7.24195 9.93842 7.75767 9.74447 8.22293C9.55052 8.68819 9.21969 9.08114 8.8 9.35L7.33 10.28C8.47697 12.3301 10.1699 14.023 12.22 15.17L13.15 13.71C13.4201 13.2908 13.8132 12.9602 14.2784 12.7663C14.7436 12.5724 15.2591 12.5247 15.75 12.63L18.71 13.33C19.2176 13.4373 19.676 13.7007 19.9995 14.0758C20.323 14.4509 20.4948 14.9154 20.49 15.39L22 19.39Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{vendorData.phone}</span>
                  </div>
                </div>
                <div className="info-row">
                  <span className="info-label">Email:</span>
                  <div className="info-value-with-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{vendorData.email}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Reviews' && (
              <div className="reviews-content">
                <h3 className="reviews-section-title">Start Review</h3>
                <div className="star-rating-container">
                  <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        className="star-btn"
                        onClick={() => setSelectedRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                      >
                        <svg 
                          width="32" 
                          height="32" 
                          viewBox="0 0 24 24" 
                          fill={star <= (hoveredRating || selectedRating) ? "#fbbf24" : "none"}
                          stroke={star <= (hoveredRating || selectedRating) ? "#fbbf24" : "#d1d5db"}
                          strokeWidth="2"
                        >
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                        </svg>
                      </button>
                    ))}
                  </div>
                  <p className="rating-hint">Tap a star to rate</p>
                </div>

                <h3 className="reviews-section-title user-reviews-title">User Reviews</h3>
                <div className="no-reviews-placeholder">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 9L12 12L17 9" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p>No reviews yet</p>
                </div>
              </div>
            )}

            {activeTab === 'Quick Info' && (
              <div className="quick-info-content">
                <div className="quick-info-section">
                  <div className="quick-info-item">
                    <span className="quick-info-label">Address</span>
                    <span className="quick-info-value">{vendorData.address}</span>
                  </div>
                  <div className="quick-info-item">
                    <span className="quick-info-label">Contacts</span>
                    <span className="quick-info-value">{vendorData.phone}</span>
                  </div>
                  <div className="quick-info-item clickable">
                    <div className="quick-info-left">
                      <span className="quick-info-label">Business Hours</span>
                      <span className="quick-info-value">Open Now: {vendorData.hours}</span>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="quick-info-item">
                    <span className="quick-info-label">Year of Establishment</span>
                    <span className="quick-info-value">{new Date().getFullYear() - vendorData.yearsInBusiness}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Action Buttons */}
          <div className="vendor-detail-bottom-actions">
            <button className="bottom-action-btn call-now-btn" onClick={handleCall}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9842 21.5573 21.2126 21.3518 21.3992C21.1463 21.5858 20.9033 21.7262 20.6381 21.811C20.3729 21.8958 20.0922 21.9231 19.815 21.891C16.7428 21.5856 13.786 20.5341 11.19 18.82C8.77382 17.3148 6.72533 15.2663 5.22 12.85C3.49997 10.2412 2.44824 7.27099 2.15 4.18C2.11793 3.90322 2.14518 3.62281 2.22981 3.35788C2.31444 3.09295 2.45452 2.85002 2.64082 2.64458C2.82712 2.43914 3.05531 2.27554 3.31007 2.16389C3.56483 2.05224 3.84034 1.99508 4.119 2H7.119C7.59357 1.99522 8.05808 2.16708 8.43322 2.49055C8.80836 2.81402 9.07173 3.27236 9.179 3.78L9.88 6.75C9.98603 7.24195 9.93842 7.75767 9.74447 8.22293C9.55052 8.68819 9.21969 9.08114 8.8 9.35L7.33 10.28C8.47697 12.3301 10.1699 14.023 12.22 15.17L13.15 13.71C13.4201 13.2908 13.8132 12.9602 14.2784 12.7663C14.7436 12.5724 15.2591 12.5247 15.75 12.63L18.71 13.33C19.2176 13.4373 19.676 13.7007 19.9995 14.0758C20.323 14.4509 20.4948 14.9154 20.49 15.39L22 19.39Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Call Now</span>
            </button>
            <button className="bottom-action-btn chat-now-btn" onClick={handleWhatsApp}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <span>Chat Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorDetailPage

