import React, { useRef } from 'react';
import './Contact.css';

export default function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    alert("Urakoze kuduha ubutumwa! Turakubaza mukanya.");
    e.target.reset();
  };

  return (
    <div className="contact-page-container">
      <div className="contact-main-content">
        
        {/* REFU RW'IBUMOSO: AMALURU YO KUGUSHAKAHI */}
        <div className="contact-info-section">
          <h1 className="me">CONTACT ME</h1>
          <h2 className="my-status">Let's Work Together</h2>
          <p className="hero-description">
            Feel free to reach out if you want to collaborate on a project, 
            have questions, or just want to connect!
          </p>
    
          <div className="contact-details-list">
            <div className="contact-detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">imanirumvapacifique39@gmail.com</span>
            </div>
            
            <div className="contact-detail-item">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">07886421456</span>
            </div>
            <div className="contact-detail-item">
              <span className="detail-label">WhatsApp:</span>
              <span className="detail-value">07834287653</span>
            </div>
            <div className="contact-detail-item">
              <span className="detail-label">GitHub:</span>
              <span className="detail-value">PACIFIQUE_VIBUCODER</span>
            </div>
             <div className="contact-detail-item">
              <span className="detail-label">Location:</span>
              <span className="detail-value">Kigali,Rwanda</span>
            </div>
          </div>
        </div>

        {/* RUHANDE RW'IBURYO: FORM YA START CONVERSATION */}
        <div className="contact-form-section">
          <div className="contact-form-card">
            <h2 className="tell-about" style={{ marginLeft: '0', textAlign: 'center', marginBottom: '3vh' }}>
              Start Conversation
            </h2>
            <form ref={form} onSubmit={handleSubmit} className="actual-form">
              <div className="form-group">
                <input type="text" name="user_name" placeholder="Your Name" required className="contact-input" />
              </div>
              <div className="form-group">
                <input type="email" name="user_email" placeholder="Your Email" required className="contact-input" />
              </div>
              <div className="form-group">
                <input type="tel" name="user_phone" placeholder="Your Phone Number" required className="contact-input" />
              </div>
              <div className="form-group2">
                <input type="tel" name="user_phone" placeholder="Your country" required className="contact-input" />
        <input type="tel" name="user_phone" placeholder="city" required className="contact-input" />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message..." required rows="5" className="contact-input contact-textarea"></textarea>
              </div>
              <button type="submit" className="submit-btn" style={{ width: '100%', marginTop: '2vh', fontSize: '2.5vh', height: '6vh' }}>
                Send Message
              </button>
            </form>
          </div>
          <div class="whatsapp-container">
        <a href="https://wa.me/250788000000?text=Muraho!" class="whatsapp-btn" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 
                5.348 5.4.01 12.008.01c3.202.001 6.212 1.246 8.477 3.516 2.266
                 2.27 3.51 5.284 3.508 8.492-.005 6.653-5.347 11.991-11.956 
                 11.991-1.992-.001-3.951-.499-5.688-1.449L0 
                 24zm6.59-4.846c1.655.982 3.511 1.5 5.409 1.51 5.4 0 9.79-4.386 
                 9.794-9.779.002-2.612-1.01-5.067-2.852-6.911C17.1 2.13 14.653.992
                  12.01.992c-5.398 0-9.786 4.387-9.79 9.78-.002 1.801.474 3.56 1.378 5.12l-.995 3.634 
3.72-.975zm11.096-7.466c-.29-.145-1.716-.847-1.983-.944-.266-.097-.46-.145-.654.145-.193.291-.748.944-.918 
1.138-.17.193-.34.217-.63.072-.29-.145-1.226-.452-2.334-1.44-1.108-.989-1.857-2.21-2.074-2.501-.218-.291-.023-.448.122-.592.13-.13.29-.34.435-.509.145-.17.193-.29.29-.484.097-.194.048-.363-.024-.509-.072-.145-.654-1.573-.895-2.154-.235-.565-.473-.489-.654-.498-.169-.008-.363-.01-.557-.01-.194 0-.508.073-.774.363-.266.291-1.016.993-1.016
 2.422 0 1.43 1.04 2.81 1.185 3.004.145.194 2.048 3.127 
4.96 4.383.693.299 1.234.478 1.656.612.696.222 1.329.19 1.83.115.558-.08 1.716-.701 
1.958-1.379.242-.678.242-1.259.17-1.379-.072-.12-.266-.194-.556-.34z"/>
            </svg>
        </a>
    </div>
        </div>
      </div>

  <footer className='footer-section'>
<div className='handle'>
  <h2 className='heading'>quick access</h2><br />
  <p className='heading1'> home</p>
  <p className='heading1'> about</p>
  <p className='heading1'>skill</p>
  <p className='heading1'>project</p>
   <p className='heading1'>testimonial</p>
    <p className='heading1'>contact</p>
</div>

<div className='handle'>
  <h2 className='heading'>meet  with  social meadia</h2> <br />
  <p className='social-media'>use social media link to meet with me</p>
  <div className='handle-media'></div>
  <div className='handle-media'></div>
  <div className='handle-media'></div>
  <div className='handle-media'></div>
  <div className='handle-media'></div>
</div>
<div className='handle'>
  <h2 className='heading'>contact</h2><br />
  <div className='handle2'>
  <div className='handle-contact1'></div> <span className="type">phone <br /><span className='new-value'> 0782654256 </span></span>
  <div className='handle-contact1'></div> <span className='type'>whatapp <br /><span className='new-value1'>0782564432 </span> </span>
</div>
</div>
<div className='handle'>
  <h2 className='heading'>location</h2><br />
  <div className='location'> District : <span className='location-value'>Kicukiro</span> </div><br />
    <div className='location'> City : <span className='location-value'>Kigali</span> </div><br />
      <div className='location'>Country   : <span className='location-value'>Rwanda</span> </div><br />
      <p className='over-all'>Kicukiro,Kigali,Rwanda</p>


  
  <div></div>
</div>
  </footer>
  <legend className='copyright'> <br />
    &copy; 2026 IMANIRUMVA Pacifique, All Rights Reserved
     </legend>
    </div>
  );
}