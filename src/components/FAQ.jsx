import { useState } from 'react'
import './FAQ.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How do I find vendors in my area?",
      answer: "You can search for vendors using our search bar or browse through categories. You can also filter vendors by location to find businesses near you."
    },
    {
      question: "Are all vendors verified?",
      answer: "Yes, all vendors on our platform are verified and trusted. We ensure that every business listed meets our quality standards."
    },
    {
      question: "How can I contact a vendor?",
      answer: "You can contact vendors directly through their profile page. Each vendor has contact information including phone number and WhatsApp for easy communication."
    },
    {
      question: "Is the service free to use?",
      answer: "Yes, our platform is completely free for users to browse and find vendors. There are no hidden charges for using our services."
    },
    {
      question: "Can I list my business on your platform?",
      answer: "Yes, you can list your business on our platform. Please contact us through the 'Contact Us' page or call our support team for more information."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button 
              className={`faq-question ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={`faq-arrow ${openIndex === index ? 'rotated' : ''}`}
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
  )
}

export default FAQ

