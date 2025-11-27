import { useState } from 'react'
import OTPModal from './OTPModal'
import NameModal from './NameModal'
import './LoginModal.css'

function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [mobileNumber, setMobileNumber] = useState('')
  const [agreeToTerms, setAgreeToTerms] = useState(true)
  const [showOTP, setShowOTP] = useState(false)
  const [showName, setShowName] = useState(false)

  if (!isOpen) return null

  const handleLogin = () => {
    if (mobileNumber.length === 10 && agreeToTerms) {
      setShowOTP(true)
    }
  }

  const handleOTPClose = (otp) => {
    if (otp) {
      // OTP verified, show name section
      setShowOTP(false)
      setShowName(true)
    } else {
      // Maybe later or close
      setShowOTP(false)
      onClose()
    }
  }

  const handleNameClose = (userData) => {
    setShowName(false)
    if (userData && onLoginSuccess) {
      onLoginSuccess(userData)
    }
    onClose() // Close modal and return to main page
  }

  return (
    <>
      {!showOTP && !showName && (
        <>
          <div className="modal-overlay"></div>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-welcome">
            <h2 className="welcome-title">Welcome</h2>
            <p className="welcome-subtitle">Login for a seamless experience</p>
          </div>
        </div>
        <div className="modal-content">
          <div className="mobile-input-group">
            <div className="mobile-input-wrapper">
              <span className="country-code">+91</span>
              <input
                type="tel"
                className="mobile-input"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Enter your mobile number"
                maxLength="10"
              />
            </div>
          </div>
          <div className="terms-section">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="terms-checkbox"
              />
              <span>I Agree to Terms and Conditions</span>
            </label>
            <a href="#" className="terms-link">T&C's Privacy Policy</a>
          </div>
          <button 
            className="login-otp-btn"
            onClick={handleLogin}
            disabled={!mobileNumber || mobileNumber.length !== 10 || !agreeToTerms}
          >
            Continue with OTP
          </button>
          <button className="maybe-later-btn" onClick={onClose}>
            Maybe Later
          </button>
        </div>
      </div>
      </>
      )}
      {showOTP && (
        <OTPModal 
          isOpen={showOTP} 
          onClose={handleOTPClose}
          mobileNumber={mobileNumber}
        />
      )}
      {showName && (
        <NameModal 
          isOpen={showName} 
          onClose={handleNameClose}
          mobileNumber={mobileNumber}
          onLoginSuccess={handleNameClose}
        />
      )}
    </>
  )
}

export default LoginModal

