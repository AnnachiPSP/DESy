import React from 'react'
import Navbar from '../../components/Navbar'
import './index.css'

function Contact() {
  return (
    <>
        <Navbar />
        <div className='container desy-contact'>
            <div className="row">
                <div className="col contact-col">
                    <div className='col-left'>
                        <h1 className='contact-heading'>Contact Us</h1>
                        <h2 className="contact-subheading">Find us here</h2>
                        <div className="sub-block">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.859650769117!2d77.26904477539996!3d28.543937975713238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e45d85d3e3%3A0x691393414902968e!2sIIIT-Delhi%20R%26D%20Building!5e0!3m2!1sen!2sin!4v1702475919876!5m2!1sen!2sin" width="400" height="240" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <h2 className='contact-subheading mob'>Mobile No</h2>
                        <div className='sub-block'>
                            <p>+91-9541587692</p>
                            <p>+91-9654286574</p>
                        </div>
                        <h2 className='contact-subheading soc'>Social</h2>
                        <i className="sub-block bi bi-linkedin"></i>
                        <i className="sub-block bi bi-twitter"></i>
                        <i className="sub-block bi bi-facebook"></i>
                    </div>
                </div>
                <div className="col contact-col">
                    <div className='col-right'>
                        <form>
                            <h2 className="contact-subheading">Any Doubts?</h2>
                            <br />
                            <div className='row mb-3'>
                                <div className='col'>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="name" placeholder="Name" name="name" required />
                                        <label htmlFor="name">Name</label>
                                    </div>
                                </div>

                                <div className='col'>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" required />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" placeholder="Your message" name="message" style={{ height: '150px' }} required />
                                <label htmlFor="message">Message</label>
                            </div>

                            <button type="submit" className="contact-btn btn btn-success"> Submit </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact