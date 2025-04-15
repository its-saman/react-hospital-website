import React from 'react';
import './App.css';

function App() {
  return (
    <>
        <Header />
      <Home />
      <IconsContainer />
      <Medic />
              <Services />
      <Book />
      <Review />
      <About />
      <Footer />
    </>
  );
}


function Header() {
  return (
    <header className="head">
      <a href="#" className="logo"><i className="fas fa-heartbeat"></i>healthcare</a>
      <nav className="navbar">
        <a href="#home">HOME</a>
        <a href="#medic">MEDIC</a>
        <a href="#services">SERVICES</a>
        <a href="#review">REVIEW</a>
        <a href="#about">ABOUT</a>
        <a href="#book">APPOINTMENT</a>
      </nav>
      <div id="menu-btn" className="fas fa-bars"></div>
    </header>
  );
}


function Home() {
  return (
    <section className="home" id="home">
      <div className="image">
        <img src="images/bg.jpg" alt="" />
      </div>
      <div className="content">
        <h3>your health, our priority.</h3>
        <p>we are committed to providing top-notch medical care with compassion and dedication.</p>
        <a href="#" className="btn">contact us<span className="fas fa-chevron-right"></span></a>
      </div>
    </section>
  );
}


function IconsContainer() {
  return (
    <section className="icons-container">
      <div className="icons">
        <i className="fas fa-user-md"></i>
        <h3>140+</h3>
        <p>doctors at work</p>
      </div>
      <div className="icons">
        <i className="fas fa-users"></i>
        <h3>1250+</h3>
        <p>satisfied patients</p>
      </div>
      <div className="icons">
        <i className="fas fa-procedures"></i>
        <h3>300+</h3>
        <p>bed facility</p>
      </div>
      <div className="icons">
        <i className="fas fa-hospital"></i>
        <h3>80+</h3>
        <p>available hospitals</p>
      </div>
    </section>
  );
}


function Medic() {
  return (
    <section className="medic" id="medic">
      <h1 className="heading"> our <span>medics</span></h1>
      <div className="box-container">
        <div className="box">
          <img src="images/doc5.jpeg" alt="" />
          <h3>alice parker</h3>
          <span>cardiologist</span>
          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>
        <div class="box">
        <img src="images/doc2.jpg" alt="">
        <h3>christian harper</h3>
        <span>neurologist</span>
        <div class="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
        </div>
      </div>
          
      <div class="box">
        <img src="images/doc3.avif" alt="">
        <h3>ava chen</h3>
        <span>orthopedic</span>
        <div class="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
        </div>
      </div>
      </div>
    </section>
  );
}


function Services() {
  return (
    <section className="services" id="services">
      <h1 className="heading"> our <span>services</span></h1>
      <div className="box-container">
        <div className="box">
          <i className="fas fa-notes-medical"></i>
          <h3>free health checkups</h3>
          <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span></a>
        </div>

        <div class="box">
      <i class="fas fa-ambulance"></i>
      <h3>24/7 ambulance</h3>
      
      <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="box">
      <i class="fas fa-user-md"></i>
      <h3>expert doctors</h3>
      
      <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="box">
      <i class="fas fa-pills"></i>
      <h3>medicines</h3>
      
      <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="box">
      <i class="fas fa-procedures"></i>
      <h3>bed facility</h3>
      
      <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="box">
      <i class="fas fa-heartbeat"> </i>
      <h3>total care</h3>
      
      <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span></a>
    </div>

      </div>
    </section>
  );
}


function Book() {
  return (
    <section className="book" id="book">
      <h1 className="heading"><span>book</span> now </h1>
      <div className="row">
        <div className="image">
          <img src="images/bg3.webp" alt="" />
        </div>
        <form action="">
          <h3>book your appointment</h3>
          <input type="text" placeholder="name" className="box" />
          <input type="number" placeholder="number" className="box" />
          <input type="email" placeholder="email" className="box" />
          <input type="date" className="box" />
          <input type="submit" value="book now" className="btn" />
        </form>
      </div>
    </section>
  );
}


function Review() {
  return (
    <section className="review" id="review">
      <h1 className="heading"> patient's <span>review</span></h1>
      <div className="box-container">
        <div className="box">
          <img src="images/p1.jpeg" alt="" />
          <h3>stella alonso</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
          <p className="text">"Great service and compassionate care."</p>
        </div>
        <div class="box">
      <img src="images/p2.jpeg" alt="">
      <h3>josh chen</h3>
      <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        
      </div>
      <p class="text">"Highly recommended for their professionalism."</p>
      </div>
      </div>
    </section>
  );
}


function About() {
  return (
    <section className="about" id="about">
      <h1 className="heading"><span>about</span> us </h1>
      <div className="row">
        <div className="image">
          <img src="images/bg2.webp" alt="hospital illustration" />
              </div>
        <div className="content">
          <h3>we take care of your healthy life</h3>
          <p>Welcome to our healthcare facility, where compassionate care and advanced medical expertise come together. Our dedicated team is committed to providing personalized treatments, promoting wellness, and supporting your journey to better health.</p>
          <p>From preventive care to advanced treatments, we prioritize your health and well-being every step of the way.</p>
          <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span></a>
              </div>
            </div>
    </section>
  );
}


function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>easy access</h3>
          <a href="#"><i className="fas fa-chevron-right"></i>home</a>
          <a href="#"><i class="fas fa-chevron-right"></i>medic</a>
        <a href="#"><i class="fas fa-chevron-right"></i>services</a>
        <a href="#"><i class="fas fa-chevron-right"></i>review</a>
        <a href="#"><i class="fas fa-chevron-right"></i>appointment</a>
          <a href="#"><i class="fas fa-chevron-right"></i>about</a>
        </div>
        
        <div class="box">
        <h3>services</h3>
        <a href="#"><i class="fas fa-chevron-right"></i>cardiologists</a>
        <a href="#"><i class="fas fa-chevron-right"></i>orthopedic</a>
        <a href="#"><i class="fas fa-chevron-right"></i>physiotherapy</a>
        <a href="#"><i class="fas fa-chevron-right"></i>diagnosis</a>
        <a href="#"><i class="fas fa-chevron-right"></i>ambulance </a>
        
        <a href="#"><i class="fas fa-chevron-right"></i>dermatologists</a>
        
      </div>
      <div class="box">
        <h3>contact info</h3>
        <a href="#"><i class="fas fa-phone"></i>985756xxxx</a>
        <a href="#"><i class="fas fa-phone"></i>948576xxxx</a>
        <a href="#"><i class="fas fa-phone"></i>874627xxxx</a>
        <a href="#"><i class="fas fa-envelope"></i>review</a>
        <a href="#"><i class="fas fa-map-marker-alt"></i>edenburg, south africa</a>
      </div>
    
      <div class="box">
      <h3>follow us</h3>
      <a href="#"><i class="fab fa-facebook-f"></i>facebook</a>
      <a href="#"><i class="fab fa-twitter"></i>twitter</a>
      <a href="#"><i class="fab fa-instagram"></i>instagram</a>
      <a href="#"><i class="fab fa-linkedin"></i>linkedin</a>
      </div>
        
      </div>
    </section>
  );
}

export default App;
