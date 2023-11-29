import { useState, useRef} from "react";
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;

export const Contact = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState('Send'); 
    const [status, setStatus] = useState({});
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setButtonText("Validating Inputs...");
    
      // Check if any field is empty
      const inputs = form.current.querySelectorAll("input, textarea");
      const isAnyFieldEmpty = Array.from(inputs).some(input => !input.value.trim());
    
      if (isAnyFieldEmpty) {
        const missingFieldsMessage = "Please fill in all the fields.";
        setTimeout(() => {
          setStatus({
            success: false,
            message: missingFieldsMessage
          });
        }, 1000)

        // Reset status after 3 seconds
        setTimeout(() => {
          setButtonText("Send");

          // Second setTimeout to reset the button text after an additional delay
          setTimeout(() => {
            setStatus({});
          }, 1500); // Delay of 1800 milliseconds (1.8 seconds) to reset button text

        }, 1300);

        
        return; // Do not proceed with form submission
      }
      setButtonText("Sending...");
    
      // Proceed with form submission if all fields are filled
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            setStatus({
              success: true,
              message: "Message sent successfully! Santa will reply shortly :)"
            });

            // Reset status after 5 seconds
            setTimeout(() => {
              setStatus({});
            }, 2500);

            form.current.reset(); //reset the form so it's empty 
            setButtonText("Send"); 
                                                                                                              
        }, (error) => {
            console.log(error.text);
            setStatus({ 
              success: false, 
              message: "Oops! Something went wrong. Please try again." 
            });

            setButtonText("Send");

            // Reset status after 5 seconds
            setTimeout(() => {
              setStatus({});
            }, 5000);
        });
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
              <form ref={form}>
                <Row>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      name="from_firstname"
                      placeholder="First Name"
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      name="from_lastname"
                      placeholder="Last Name"
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      name="from_email"
                      placeholder="Email Address"
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="tel"
                      name="from_phonenum"
                      placeholder="Phone Number"
                    />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      name="message"
                      placeholder="Message"
                    ></textarea>
                     {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                    <button type="submit" onClick={handleSubmit}>
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    );
}