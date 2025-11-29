import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import BottomNavigation from './components/BottomNavigation'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import CategoriesPage from './pages/CategoriesPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import ContactUsPage from './pages/ContactUsPage'
import VendorListPage from './pages/VendorListPage'
import VendorDetailPage from './pages/VendorDetailPage'
import CategorySubcategoriesPage from './pages/CategorySubcategoriesPage'
import MoreOptionsPage from './pages/MoreOptionsPage'
import AgentRegistrationPage from './pages/AgentRegistrationPage'
import CallEnquiryPage from './pages/CallEnquiryPage'

function AppContent() {
  const location = useLocation()
  const showHeader = location.pathname === '/'

  return (
    <div className="min-h-screen bg-white font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,sans-serif] overflow-x-hidden">
      {showHeader && <Header />}
             <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/profile" element={<ProfilePage />} />
               <Route path="/profile/edit" element={<ProfilePage editMode={true} />} />
               <Route path="/categories" element={<CategoriesPage />} />
               <Route path="/categories/:categoryName" element={<CategoriesPage />} />
               <Route path="/category/:categoryName" element={<CategorySubcategoriesPage />} />
               <Route path="/vendors/:subcategoryName" element={<VendorListPage />} />
               <Route path="/vendor/:vendorId" element={<VendorDetailPage />} />
               <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
               <Route path="/contact-us" element={<ContactUsPage />} />
               <Route path="/more" element={<MoreOptionsPage />} />
               <Route path="/agent-registration" element={<AgentRegistrationPage />} />
               <Route path="/call-enquiry" element={<CallEnquiryPage />} />
             </Routes>
      <BottomNavigation />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
