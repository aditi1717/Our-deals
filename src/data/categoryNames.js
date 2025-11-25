// Import images for categories
import beautyCare from '../assets/beauty care.jpg'
import consultant from '../assets/consultant.png'
import contractor from '../assets/contractor.png'
import dailyServices from '../assets/daily services.jpg'
import doctor from '../assets/doctor.jpg'
import education from '../assets/eductaion.png'
import exploreCities from '../assets/explore cites.jpg'
import foodDining from '../assets/food and Dining.jpg'
import healthFitness from '../assets/health and fitness.jpg'
import homeServices from '../assets/home services.jpg'
import hotelPg from '../assets/hotel and pg.jpg'
import rentHire from '../assets/rent and hire.jpg'
import repair from '../assets/repair.png'
import securityService from '../assets/security service.jpg'
import transportationTravel from '../assets/transortation and travel.png'
import weddingPlans from '../assets/wedding plans.jpg'

// Main Category Names with Images - These are the categories shown in the CategoryGrid
export const categoryNames = [
  { name: 'Restaurants', image: foodDining },
  { name: 'Hotels', image: hotelPg },
  { name: 'Beauty Spa', image: beautyCare },
  { name: 'Home Decor', image: homeServices },
  { name: 'Wedding Planning', image: weddingPlans },
  { name: 'Education', image: education },
  { name: 'Rent & Hire', image: rentHire },
  { name: 'Hospitals', image: doctor },
  { name: 'Contractors', image: contractor },
  { name: 'Pet Shops', image: dailyServices },
  { name: 'Repairs', image: repair },
  { name: 'Security', image: securityService },
  { name: 'Transportation', image: transportationTravel },
  { name: 'Health & Fitness', image: healthFitness },
  { name: 'Consultants', image: consultant },
  { name: 'Explore Cities', image: exploreCities },
  { name: 'PG/Hostels', image: hotelPg },
  { name: 'Estate Agent', image: homeServices },
  { name: 'Dentists', image: doctor },
  { name: 'Gym', image: healthFitness },
  { name: 'Loans', image: consultant },
  { name: 'Event Organisers', image: weddingPlans },
  { name: 'Driving Schools', image: transportationTravel },
  { name: 'Packers & Movers', image: transportationTravel },
  { name: 'Courier Service', image: transportationTravel }
]

// Category Sections - Main categories that have subcategories with images
// These are shown in CategorySections component
export const categorySectionsData = [
  {
    categoryName: 'Wedding Requisites',
    subcategories: [
      { name: 'Banquet Halls', image: hotelPg },
      { name: 'Bridal Requisite', image: weddingPlans },
      { name: 'Caterers', image: foodDining }
    ]
  },
  {
    categoryName: 'Beauty & Spa',
    subcategories: [
      { name: 'Beauty Parlours', image: beautyCare },
      { name: 'Spa & Massages', image: beautyCare },
      { name: 'Salons', image: beautyCare }
    ]
  },
  {
    categoryName: 'Repairs & Services',
    subcategories: [
      { name: 'AC Service', image: repair },
      { name: 'Car Service', image: transportationTravel },
      { name: 'Bike Service', image: transportationTravel }
    ]
  },
  {
    categoryName: 'Daily Needs',
    subcategories: [
      { name: 'Movies', image: dailyServices },
      { name: 'Grocery', image: foodDining },
      { name: 'Electricians', image: homeServices }
    ]
  }
]

// Popular Searches with Images - These are shown in PopularSearches component
export const popularSearches = [
  { name: 'Estate Agents For Residential Rental', image: homeServices },
  { name: 'Interior Designers', image: homeServices },
  { name: 'Real Estate Agents', image: homeServices },
  { name: 'Banquet Halls', image: hotelPg },
  { name: 'Caterers', image: foodDining }
]

// All Subcategories organized by their parent categories with images
export const allSubcategories = {
  'Wedding Requisites': [
    { name: 'Banquet Halls', image: hotelPg },
    { name: 'Bridal Requisite', image: weddingPlans },
    { name: 'Caterers', image: foodDining }
  ],
  'Beauty & Spa': [
    { name: 'Beauty Parlours', image: beautyCare },
    { name: 'Spa & Massages', image: beautyCare },
    { name: 'Salons', image: beautyCare }
  ],
  'Repairs & Services': [
    { name: 'AC Service', image: repair },
    { name: 'Car Service', image: transportationTravel },
    { name: 'Bike Service', image: transportationTravel }
  ],
  'Daily Needs': [
    { name: 'Movies', image: dailyServices },
    { name: 'Grocery', image: foodDining },
    { name: 'Electricians', image: homeServices }
  ],
  'Real Estate': [
    { name: 'Estate Agents For Residential Rental', image: homeServices },
    { name: 'Interior Designers', image: homeServices },
    { name: 'Real Estate Agents', image: homeServices }
  ]
}
