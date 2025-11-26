import { useState } from 'react'
import './NameModal.css'

function NameModal({ isOpen, onClose, mobileNumber, onLoginSuccess }) {
  const [name, setName] = useState('')

  if (!isOpen) return null

  const handleSubmit = () => {
    if (name.trim()) {
      // Handle name submission here
      console.log('Name submitted:', name)
      // Pass user data to parent
      if (onLoginSuccess) {
        onLoginSuccess({ name, mobileNumber })
      }
      onClose() // Close modal and return to main page
    }
  }

  return (
    <>
      <div className="modal-overlay"></div>
      <div className="name-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-logo">
            <span className="logo-our">Our</span>
            <span className="logo-deals"> Deals</span>
          </div>
          <div className="modal-welcome">
            <h2 className="welcome-title">Welcome</h2>
            <p className="welcome-subtitle">Login for a seamless experience</p>
          </div>
        </div>
        <div className="modal-content">
          <div className="name-input-group">
            <input
              type="text"
              className="name-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
            />
          </div>
          <div className="mobile-display">
            <span className="mobile-label">Mobile Number:</span>
            <span className="mobile-value">+91 {mobileNumber}</span>
          </div>
          <button 
            className="submit-name-btn"
            onClick={handleSubmit}
            disabled={!name.trim()}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  )
}

export default NameModal

