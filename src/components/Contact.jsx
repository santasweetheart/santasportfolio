import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";


export const Contact = () => {
    const formInitialDetails = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails); //stores form details 
    const [buttonText, setButtonText] = useState('Send'); 
    const [status, setStatus] = useState({});
  
    const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value
        })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      // Logging the form data before sending
      console.log('Form data before sending:', { firstName, lastName, email, phone, message });
    
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
            message,
          }),
        });
    
        // Logging the response status and response object
        console.log('Response status:', response.status);
        console.log('Response:', response);
    
        const data = await response.json();
    
        // Logging the response data
        console.log('Response data:', data);
    
        if (response.status === 200) {
          alert('Message sent successfully');
          // ... rest of your success logic (resetting the form, etc.)
        } else {
          alert('Failed to send message');
          // ... rest of your error handling
        }
      } catch (error) {
        // Logging any error during form submission
        console.error('Error during form submission:', error);
      }
    };
    

    return (
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <img src={contactImg} alt="Contact Us" />
            </Col>
            <Col size={12} md={6}>
              <h2>Get In Touch</h2>
              <form>
                <Row>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone Number"
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    ></textarea>
                    <button type="submit" onClick={handleSubmit}>
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                  {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    );
}