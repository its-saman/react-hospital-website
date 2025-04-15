import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faHeartbeat, 
  faStethoscope, 
  faHospital, 
  faAmbulance, 
  faPills, 
  faUserMd,
  faPhone, 
  faEnvelope, 
  faLocationDot, 
  faClock,
  faStar,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons'


library.add(
  faHeartbeat, 
  faStethoscope, 
  faHospital, 
  faAmbulance, 
  faPills, 
  faUserMd,
  faPhone, 
  faEnvelope, 
  faLocationDot, 
  faClock,
  faStar,
  faBars,
  faTimes,
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faLinkedin
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
