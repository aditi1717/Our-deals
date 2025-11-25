import { useEffect } from 'react'
import './PrivacyPolicyPage.css'

function PrivacyPolicyPage({ onClose }) {
  // Prevent body scroll when page is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="privacy-policy-overlay" onClick={onClose}>
      <div className="privacy-policy-page" onClick={(e) => e.stopPropagation()}>
        <div className="privacy-policy-header">
          <button className="back-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h2 className="privacy-policy-title">Privacy Policy</h2>
          <div style={{ width: '24px' }}></div>
        </div>

        <div className="privacy-policy-content">
          <h1 className="policy-main-title">Privacy Policy – Ourdeals</h1>

          <section className="policy-section">
            <h3 className="section-title">1. Information We Collect</h3>
            <ul className="policy-list">
              <li>
                <strong>Personal Information:</strong> When you make a booking, we may collect your name, phone number, location, and booking details.
              </li>
              <li>
                <strong>Usage Data:</strong> We may automatically collect information about how you use the app (such as pages visited and time spent).
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h3 className="section-title">2. How We Use Your Information</h3>
            <p>We use the collected information for purposes such as:</p>
            <ul className="policy-list">
              <li>Processing your bookings.</li>
              <li>Connecting you directly with vendors (through call or chat).</li>
              <li>Improving user experience and app performance.</li>
              <li>Ensuring security, fraud prevention, and legal compliance.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h3 className="section-title">3. Sharing of Information</h3>
            <ul className="policy-list">
              <li>We only share your information with the vendor you choose to connect with.</li>
              <li>We do not sell or rent your personal data to any third party.</li>
              <li>Information may be shared with law enforcement authorities only when required by law.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h3 className="section-title">4. Data Security</h3>
            <ul className="policy-list">
              <li>We use secure servers, encryption, and other safeguards to protect your personal data from unauthorized access, alteration, or misuse.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h3 className="section-title">5. Your Rights & Control</h3>
            <ul className="policy-list">
              <li>You can update or delete your account information anytime.</li>
              <li>You may contact us to request deletion of your personal data.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h3 className="section-title">6. Cookies & Tracking</h3>
            <ul className="policy-list">
              <li>We may use cookies or similar technologies to improve app performance and user experience.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h3 className="section-title">7. Changes to This Policy</h3>
            <ul className="policy-list">
              <li>We may update this Privacy Policy from time to time. Any changes will be effective once posted in the app.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h3 className="section-title">8. Contact Us</h3>
            <p>For any questions about this Privacy Policy or our data practices, please contact us at:</p>
            <div className="contact-info">
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Email: ourdealsservices@gmail.com</span>
              </div>
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9842 21.5573 21.2126 21.3518 21.3992C21.1463 21.5858 20.9033 21.7262 20.6381 21.811C20.3729 21.8958 20.0922 21.9231 19.815 21.891C16.7428 21.5856 13.786 20.5341 11.19 18.82C8.77382 17.3148 6.72533 15.2663 5.22 12.85C3.49997 10.2412 2.44824 7.27099 2.15 4.18C2.11793 3.90322 2.14518 3.62281 2.22981 3.35788C2.31444 3.09295 2.45452 2.85002 2.64082 2.64458C2.82712 2.43914 3.05531 2.27554 3.31007 2.16389C3.56483 2.05224 3.84034 1.99508 4.119 2H7.119C7.59357 1.99522 8.05808 2.16708 8.43322 2.49055C8.80836 2.81402 9.07173 3.27236 9.179 3.78L9.88 6.75C9.98603 7.24195 9.93842 7.75767 9.74447 8.22293C9.55052 8.68819 9.21969 9.08114 8.8 9.35L7.33 10.28C8.47697 12.3301 10.1699 14.023 12.22 15.17L13.15 13.71C13.4201 13.2908 13.8132 12.9602 14.2784 12.7663C14.7436 12.5724 15.2591 12.5247 15.75 12.63L18.71 13.33C19.2176 13.4373 19.676 13.7007 19.9995 14.0758C20.323 14.4509 20.4948 14.9154 20.49 15.39L22 19.39Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Phone: +91 0510-2990891</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage

