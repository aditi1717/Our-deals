import { useState, useRef } from 'react'
import './OTPModal.css'

function OTPModal({ isOpen, onClose, mobileNumber }) {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const inputRefs = useRef([])

  if (!isOpen) return null

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return
    
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, 6)
    const newOtp = [...otp]
    for (let i = 0; i < pastedData.length && i < 6; i++) {
      newOtp[i] = pastedData[i]
    }
    setOtp(newOtp)
    const nextEmptyIndex = pastedData.length < 6 ? pastedData.length : 5
    inputRefs.current[nextEmptyIndex]?.focus()
  }

  const handleVerify = () => {
    const otpString = otp.join('')
    if (otpString.length === 6) {
      // Handle OTP verification here
      console.log('OTP Verified:', otpString)
      onClose(otpString) // Pass OTP to parent and show name section
    }
  }

  const handleResend = () => {
    // Handle resend OTP
    console.log('Resend OTP')
    setOtp(['', '', '', '', '', ''])
    inputRefs.current[0]?.focus()
  }

  const isOtpComplete = otp.every(digit => digit !== '')

  return (
    <>
      <div className="modal-overlay"></div>
      <div className="otp-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-welcome">
            <h2 className="welcome-title">Enter OTP</h2>
            <p className="welcome-subtitle">
              We've sent an OTP to +91 {mobileNumber}
            </p>
          </div>
        </div>
        <div className="modal-content">
          <div className="otp-input-group">
            <label className="input-label">Enter 6-digit OTP</label>
            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  className="otp-input"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  maxLength="1"
                  inputMode="numeric"
                />
              ))}
            </div>
          </div>
          <div className="otp-actions">
            <button 
              className="verify-otp-btn"
              onClick={handleVerify}
              disabled={!isOtpComplete}
            >
              Verify OTP
            </button>
            <div className="resend-section">
              <span className="resend-text">Didn't receive OTP?</span>
              <button className="resend-btn" onClick={handleResend}>
                Resend OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OTPModal

