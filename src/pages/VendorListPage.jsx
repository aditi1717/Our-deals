import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './VendorListPage.css'

function VendorListPage() {
  const navigate = useNavigate()
  const { subcategoryName } = useParams()
  const [selectedFilter, setSelectedFilter] = useState('All')

  // Sample vendor data
  const vendors = [
    {
      id: 1,
      name: 'Test Services',
      address: '123 MG Road, Indore',
      category: 'Grocery Store',
      services: '24 Hours Services',
      hours: 'Open: 9:00 AM – 9:00 PM',
      image: null,
      phone: '+91 1234567890',
      whatsapp: '+91 1234567890',
      since: '2020'
    },
    {
      id: 2,
      name: 'City Mart Supermarket',
      address: '456 AB Road, Indore',
      category: 'Supermarket',
      services: 'Home Delivery Available',
      hours: 'Open: 8:00 AM – 10:00 PM',
      image: null,
      phone: '+91 9876543210',
      whatsapp: '+91 9876543210',
      since: '2018'
    },
    {
      id: 3,
      name: 'Fresh Fruits & Vegetables',
      address: '789 Vijay Nagar, Indore',
      category: 'Fruits & Vegetables',
      services: 'Fresh Daily Stock',
      hours: 'Open: 6:00 AM – 9:00 PM',
      image: null,
      phone: '+91 8765432109',
      whatsapp: '+91 8765432109',
      since: '2019'
    },
    {
      id: 4,
      name: 'Quick Bites Restaurant',
      address: '321 Palasia, Indore',
      category: 'Restaurant',
      services: 'Dine-in & Takeaway',
      hours: 'Open: 11:00 AM – 11:00 PM',
      image: null,
      phone: '+91 7654321098',
      whatsapp: '+91 7654321098',
      since: '2021'
    },
    {
      id: 5,
      name: 'Beauty Care Salon',
      address: '654 Scheme 54, Indore',
      category: 'Beauty Salon',
      services: 'Haircut & Styling',
      hours: 'Open: 10:00 AM – 8:00 PM',
      image: null,
      phone: '+91 6543210987',
      whatsapp: '+91 6543210987',
      since: '2017'
    },
    {
      id: 6,
      name: 'Home Decor Solutions',
      address: '987 Bypass Road, Indore',
      category: 'Home Decor',
      services: 'Custom Design Available',
      hours: 'Open: 10:00 AM – 7:00 PM',
      image: null,
      phone: '+91 5432109876',
      whatsapp: '+91 5432109876',
      since: '2016'
    },
    {
      id: 7,
      name: 'Tech Repair Center',
      address: '147 Mhow Naka, Indore',
      category: 'Electronics Repair',
      services: 'Same Day Service',
      hours: 'Open: 9:00 AM – 7:00 PM',
      image: null,
      phone: '+91 4321098765',
      whatsapp: '+91 4321098765',
      since: '2022'
    },
    {
      id: 8,
      name: 'Fashion Boutique',
      address: '258 Regal Square, Indore',
      category: 'Clothing Store',
      services: 'Latest Fashion Trends',
      hours: 'Open: 10:00 AM – 9:00 PM',
      image: null,
      phone: '+91 3210987654',
      whatsapp: '+91 3210987654',
      since: '2015'
    },
    {
      id: 9,
      name: 'Pharmacy Plus',
      address: '369 Sapna Sangeeta, Indore',
      category: 'Pharmacy',
      services: '24 Hours Services',
      hours: 'Open: 24 Hours',
      image: null,
      phone: '+91 2109876543',
      whatsapp: '+91 2109876543',
      since: '2014'
    },
    {
      id: 10,
      name: 'Pet Care Store',
      address: '741 Sudama Nagar, Indore',
      category: 'Pet Shop',
      services: 'Pet Food & Accessories',
      hours: 'Open: 9:00 AM – 8:00 PM',
      image: null,
      phone: '+91 1098765432',
      whatsapp: '+91 1098765432',
      since: '2020'
    }
  ]

  const filters = [
    { id: 'all', label: 'All', icon: 'list' },
    { id: 'nearby', label: 'Near by', icon: 'location' },
    { id: 'available', label: 'Available', icon: 'lightning' },
    { id: 'toprated', label: 'Top-rated', icon: 'star' }
  ]

  const handleCall = (phone) => {
    window.location.href = `tel:${phone}`
  }

  const handleChat = (whatsapp) => {
    window.open(`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`, '_blank')
  }

  const handleDirection = (address) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank')
  }

  return (
    <div className="vendor-list-page">
      <div className="vendor-list-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="vendor-list-title">Vendor List</h2>
        <div style={{ width: '24px' }}></div>
      </div>

      <div className="vendor-list-content">
        {/* Filter Buttons */}
        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${selectedFilter === filter.label ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter.label)}
            >
              {filter.icon === 'list' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              {filter.icon === 'location' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                </svg>
              )}
              {filter.icon === 'lightning' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              {filter.icon === 'star' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              )}
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="results-count">
          {vendors.length} Results for your search
        </div>

        {/* Vendor Cards */}
        <div className="vendors-list">
          {vendors.map((vendor) => (
            <div 
              key={vendor.id} 
              className="vendor-card"
              onClick={() => navigate(`/vendor/${vendor.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="vendor-image-section">
                <div className="vendor-image-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 16L8.586 11.414C8.96106 11.0391 9.46967 10.8284 10 10.8284C10.5303 10.8284 11.0389 11.0391 11.414 11.414L16 16M14 14L15.586 12.414C15.9611 12.0391 16.4697 11.8284 17 11.8284C17.5303 11.8284 18.0389 12.0391 18.414 12.414L20 14M14 8H14.01M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="coming-soon-text">COMING SOON</span>
                </div>
                <div className="vendor-since">Since {vendor.since}</div>
              </div>
              <div className="vendor-details">
                <h3 className="vendor-name">{vendor.name}</h3>
                <div className="vendor-location">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#dc2626"/>
                  </svg>
                  <span>{vendor.address}</span>
                </div>
                <div className="vendor-category-tag">{vendor.category}</div>
                <div className="vendor-services">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{vendor.services}</span>
                </div>
                <div className="vendor-hours">{vendor.hours}</div>
                <div className="vendor-actions" onClick={(e) => e.stopPropagation()}>
                  <button className="vendor-action-btn call-btn" onClick={() => handleCall(vendor.phone)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9842 21.5573 21.2126 21.3518 21.3992C21.1463 21.5858 20.9033 21.7262 20.6381 21.811C20.3729 21.8958 20.0922 21.9231 19.815 21.891C16.7428 21.5856 13.786 20.5341 11.19 18.82C8.77382 17.3148 6.72533 15.2663 5.22 12.85C3.49997 10.2412 2.44824 7.27099 2.15 4.18C2.11793 3.90322 2.14518 3.62281 2.22981 3.35788C2.31444 3.09295 2.45452 2.85002 2.64082 2.64458C2.82712 2.43914 3.05531 2.27554 3.31007 2.16389C3.56483 2.05224 3.84034 1.99508 4.119 2H7.119C7.59357 1.99522 8.05808 2.16708 8.43322 2.49055C8.80836 2.81402 9.07173 3.27236 9.179 3.78L9.88 6.75C9.98603 7.24195 9.93842 7.75767 9.74447 8.22293C9.55052 8.68819 9.21969 9.08114 8.8 9.35L7.33 10.28C8.47697 12.3301 10.1699 14.023 12.22 15.17L13.15 13.71C13.4201 13.2908 13.8132 12.9602 14.2784 12.7663C14.7436 12.5724 15.2591 12.5247 15.75 12.63L18.71 13.33C19.2176 13.4373 19.676 13.7007 19.9995 14.0758C20.323 14.4509 20.4948 14.9154 20.49 15.39L22 19.39Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Call</span>
                  </button>
                  <button className="vendor-action-btn chat-btn" onClick={() => handleChat(vendor.whatsapp)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Chat</span>
                  </button>
                  <button className="vendor-action-btn direction-btn" onClick={() => handleDirection(vendor.address)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Direction</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default VendorListPage

