import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from '../assets/img/contactImg.png';

export const Contact = () => {
    const formInitialDetails = {
        fullName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [buttonAnimation, setButtonAnimation] = useState(false);
    const [status, setStatus] = useState({});
    const [errors, setErrors] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const showMessage = (msg, success = true, duration = success ? 5000 : null) => {
        setStatus({ message: msg, success });

        // Hide message after `duration` milliseconds
        if (duration) {
            setTimeout(() => {
                setStatus({ message: "", success: null });
            }, duration);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        setButtonAnimation(true);

        try {

            const newErrors = {};
            if (!formDetails.fullName) newErrors.firstName = true;
            if (!formDetails.lastName) newErrors.lastName = true;
            if (!formDetails.email) newErrors.email = true;
            if (!formDetails.message) newErrors.message = true;
                
            setErrors(newErrors);

            if (Object.keys(newErrors).length > 0) {

                let response = await fetch("https://gd3g088tw9.execute-api.us-east-2.amazonaws.com/prod/contact", {
                    //let response = await fetch("http://localhost:5000/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    body: JSON.stringify(formDetails),
                });

                setButtonText("Send");
                setButtonAnimation(false);

                // Log the full response to see what's coming back
                const result = await response.json();
                console.log("API Response:", result);

                setFormDetails(formInitialDetails);

                if (response.ok && result.code === 200) {
                    showMessage('Thanks for reaching out! I\'ll get back to you as soon as possible.', true, 10000);
                } else {
                    // Log the error for more detail
                    console.error("API call was not successful. Response code:", response.status, "Message:", result.status || 'Unknown error');
                    showMessage('Something went wrong, please try again later.', false, 10000);
                }
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setButtonText("Send");
            setButtonAnimation(false);
            showMessage('Something went wrong, please try again later.', false, 10000);
        }
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={12} className="px-1">
                                    <input type="text" value={formDetails.fullName} placeholder="Full Name" maxLength="150" onChange={(e) => onFormUpdate('fullName', e.target.value)} className={errors.fullName ? 'input-error' : ''} />                                   
                                </Col>
                                <Col sm={12} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email" maxLength="150" onChange={(e) => onFormUpdate('email', e.target.value)} className={errors.email ? 'input-error' : ''} />                                   
                                </Col>
                                <Col sm={12} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone Number" maxLength="15" onChange={(e) => onFormUpdate('phone', e.target.value)} className={errors.phone ? 'input-error' : ''} />         
                                </Col>
                                <Col sm={12} className="px-1">
                                    <textarea rows="6" value={formDetails.message} placeholder="Message" maxLength="1000" onChange={(e) => onFormUpdate('message', e.target.value)} className={errors.message ? 'input-error' : ''}></textarea>                                  
                                </Col>
                                <Col sm={12} className="px-1 d-flex align-items-center">
                                    <button type="submit" className={buttonAnimation ? "submitting" : ""}>
                                        <span>{buttonText}</span>
                                    </button>
                                    {status.message && (
                                        <div className="contact-result ms-auto">
                                            <p className={status.success === false ? "danger" : "success"}>
                                                {status.message}
                                            </p>
                                        </div>
                                    )}
                                </Col>
                                
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}