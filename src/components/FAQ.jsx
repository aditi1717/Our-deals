import { useState } from 'react'
import './FAQ.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How do I find vendors in my area?',
      answer: 'You can use our search feature to find vendors by category or location. Simply enter your search query or browse through categories.'
    },
    {
      question: 'Are all vendors verified?',
      answer: 'Yes, we verify all businesses before listing them on our platform to ensure quality and reliability.'
    },
    {
      question: 'How can I contact a vendor?',
      answer: 'You can contact vendors directly through the "Call Now" or "Chat Now" buttons on their profile page.'
    },
    {
      question: 'Is the service free to use?',
      answer: 'Yes, our platform is completely free for users to search and connect with vendors.'
    },
    {
      question: 'Can I list my business on your platform?',
      answer: 'Yes! You can register your business through our "Become a Partner" section in the footer.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={`faq-icon ${openIndex === index ? 'rotated' : ''}`}
                >
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ

