import{ useState } from "react";
import "../App.css";
import { assets } from "../assets/assets";
import SectionTitle from "../Components/SectionTitle";
import Header from '../Components/Header';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid. It should be 10 digits.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully");
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  };

  return (
    <div className="contact-container">
      <Header
        title="Get in Touch with Us" 
        para="We are here to assist you. Whether you have a question about our services, we are just a message away." 
        image={"https://images.pexels.com/photos/27509020/pexels-photo-27509020/free-photo-of-b-w-pentax.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
      />
      <div className="contact-main">
        <div className="contact-head">
          <SectionTitle sectionTitle={"CONTACT US"} />
        </div>
        <div className="contact-content">
          <div className="contact-form">
            <h1>you can connect with us when you need help<span style={{color:"#228b22"}}>!</span></h1>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="NAME*" 
                  value={formData.name} 
                  onChange={handleChange} 
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="EMAIL*" 
                  value={formData.email} 
                  onChange={handleChange}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="PHONE*" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  maxLength={10}
                />
                {errors.phone && <p className="error-message">{errors.phone}</p>}
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="MESSAGE*" 
                  rows={7} 
                  value={formData.message} 
                  onChange={handleChange} 
                />
              </div>
              <button type="submit">submit</button>
            </form>
          </div>
          <div className="contact-content-details">
            <div className="contact-form-cross">
              <h1>Consulven</h1>
            </div>
            <div className="contact-details">
              <img className="contact-details-vector" src={assets.dotcircle} alt="" />
              <div className="contact-details-blank"></div>
              <div className="contact-details-main">
                <div className="contact-details-section">
                  <div className="contact-details-icon">
                    <img src={assets.location} alt="" />
                  </div>
                  <a href="https://maps.app.goo.gl/Gy4iLRzcNQLNMqe7A" target="_blank">Unit No. 51, “The Platform”<br />GIFT SEZ, Gift City</a>
                </div>
                <div className="contact-details-section">
                  <div className="contact-details-icon">
                    <img src={assets.mail} alt="" />
                  </div>
                  <a href="mailto:info@consulvenifsc.com">info@consulvenifsc.com</a>
                </div>
                <div className="contact-details-section">
                  <div className="contact-details-icon">
                    <img src={assets.phone} alt="" />
                  </div>
                  <a href="tel:081488812523">+91 81488812523</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <SectionTitle sectionTitle={"VISIT US"} />
          <img src={assets.map} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
