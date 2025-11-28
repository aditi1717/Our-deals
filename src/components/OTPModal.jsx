import { useState, useRef, useEffect } from 'react'
import './OTPModal.css'

function OTPModal({ isOpen, onClose, mobileNumber, onBack }) {
  const [otp, setOtp] = useState(['', '', '', ''])
  const [resendTimer, setResendTimer] = useState(9)
  const inputRefs = useRef([])

  useEffect(() => {
    if (isOpen && resendTimer > 0) {
      const timer = setInterval(() => {
        setResendTimer((prev) => (prev > 0 ? prev - 1 : 0))
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isOpen, resendTimer])

  if (!isOpen) return null

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return
    
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 3) {
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
    const pastedData = e.clipboardData.getData('text').slice(0, 4)
    const newOtp = [...otp]
    for (let i = 0; i < pastedData.length && i < 4; i++) {
      newOtp[i] = pastedData[i]
    }
    setOtp(newOtp)
    const nextEmptyIndex = pastedData.length < 4 ? pastedData.length : 3
    inputRefs.current[nextEmptyIndex]?.focus()
  }

  const handleVerify = () => {
    const otpString = otp.join('')
    if (otpString.length === 4) {
      // Handle OTP verification here
      console.log('OTP Verified:', otpString)
      onClose(otpString) // Pass OTP to parent and show name section
    }
  }

  const handleResend = () => {
    if (resendTimer === 0) {
      // Handle resend OTP
      console.log('Resend OTP')
      setOtp(['', '', '', ''])
      setResendTimer(9)
      inputRefs.current[0]?.focus()
    }
  }

  const isOtpComplete = otp.every(digit => digit !== '')

  return (
    <div className="otp-verification-page">
      {onBack && (
        <button className="otp-back-btn" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      <div className="otp-verification-content">
        <h1 className="otp-verification-title">
          <span>OTP</span>
          <span>Verification</span>
        </h1>
        <p className="otp-verification-instruction">Enter the 4-digit code sent to</p>
        <p className="otp-verification-phone">+91 {mobileNumber}</p>
        
        <div className="otp-inputs-container">
          {otp.map((digit, index) => (
            <div key={index} className="otp-circle-input-wrapper">
              <input
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                className="otp-circle-input"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                maxLength="1"
                inputMode="numeric"
              />
            </div>
          ))}
        </div>

        <div className="otp-resend-section">
          <span className="otp-resend-text">
            Didn't receive OTP? {resendTimer > 0 && <span>{resendTimer}</span>}
          </span>
        </div>

        <button 
          className="otp-verify-continue-btn"
          onClick={handleVerify}
          disabled={!isOtpComplete}
        >
          Verify & Continue
        </button>
      </div>
    </div>
  )
}

export default OTPModal

