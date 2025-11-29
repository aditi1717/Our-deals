import { useState } from 'react'

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
    <div className="w-full py-[clamp(32px,4vw,48px)] px-4 bg-white">
      <h2 className="text-center text-[clamp(24px,3vw,32px)] font-bold text-gray-800 mb-[clamp(24px,3vw,32px)]">Frequently Asked Questions</h2>
      <div className="max-w-[800px] mx-auto flex flex-col gap-[clamp(12px,1.5vw,16px)]">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-100 rounded-[clamp(8px,1vw,12px)] overflow-hidden">
            <button 
              className="w-full flex items-center justify-center relative p-[clamp(16px,2vw,20px)] text-center bg-transparent border-none cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-[clamp(13px,1.5vw,16px)] font-medium text-gray-800 text-center">{faq.question}</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={`text-gray-600 flex-shrink-0 absolute right-[clamp(16px,2vw,20px)] transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
              >
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-[clamp(16px,2vw,20px)] pb-[clamp(16px,2vw,20px)]">
                <p className="text-[clamp(13px,1.4vw,15px)] text-gray-600 leading-[1.6] m-0 text-center">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ

