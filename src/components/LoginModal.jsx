import { useState } from 'react'
import OTPModal from './OTPModal'
import './LoginModal.css'

function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [mobileNumber, setMobileNumber] = useState('')
  const [showOTPSent, setShowOTPSent] = useState(false)
  const [showOTP, setShowOTP] = useState(false)

  if (!isOpen) return null

  const handleLogin = () => {
    if (mobileNumber.length === 10) {
      setShowOTPSent(true)
    }
  }

  const handleOTPSentOK = () => {
    setShowOTPSent(false)
    setShowOTP(true)
  }

  const handleOTPClose = (otp) => {
    if (otp) {
      // OTP verified, directly login success
      setShowOTP(false)
      const userData = {
        mobile: mobileNumber,
        name: `User ${mobileNumber}` // Default name
      }
      if (onLoginSuccess) {
        onLoginSuccess(userData)
      }
      onClose() // Close modal and return to main page
    } else {
      // Maybe later or close
      setShowOTP(false)
      onClose()
    }
  }

  return (
    <>
      {!showOTPSent && !showOTP && (
        <div className="login-page">
          <button className="login-back-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="login-page-content">
            <h1 className="login-app-title">Ourdeals</h1>
            <p className="login-tagline">Book Your Services in 2 minutes</p>
            
            <div className="login-form-container">
              <div className="mobile-input-group">
                <div className="mobile-input-wrapper">
                  <span className="country-code">+91</span>
                  <input
                    type="tel"
                    className="mobile-input"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="Enter your phone number"
                    maxLength="10"
                  />
                </div>
              </div>
              
              <button 
                className="login-continue-btn"
                onClick={handleLogin}
                disabled={!mobileNumber || mobileNumber.length !== 10}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
      {showOTPSent && (
        <>
          <div className="login-page">
            <button className="login-back-btn" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="login-page-content">
              <h1 className="login-app-title">Ourdeals</h1>
              <p className="login-tagline">Book Your Services in 2 minutes</p>
              
              <div className="login-form-container">
                <div className="mobile-input-group">
                  <div className="mobile-input-wrapper">
                    <span className="country-code">+91</span>
                    <input
                      type="tel"
                      className="mobile-input"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      placeholder="Enter your phone number"
                      maxLength="10"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="otp-sent-popup">
            <div className="otp-sent-popup-content">
              <h2 className="otp-sent-title">OTP Sent!</h2>
              <p className="otp-sent-message">A verification code has been sent to your phone.</p>
              <button className="otp-sent-ok-btn" onClick={handleOTPSentOK}>OK</button>
            </div>
          </div>
        </>
      )}
      {showOTP && (
        <OTPModal 
          isOpen={showOTP} 
          onClose={handleOTPClose}
          mobileNumber={mobileNumber}
          onBack={() => {
            setShowOTP(false)
            setShowOTPSent(false)
          }}
        />
      )}
    </>
  )
}

export default LoginModal

