import { Close, GitHub, LinkedIn, Mail, Phone } from "@mui/icons-material";
import { StyledContact } from "./style";
import { useTranslate } from "../../src/utils/use-i18n.util";
import { useForm } from "../../src/utils/use-form";
import { IContact } from '../../src/models/contact';
import { contactService } from "../../src/services/contact-service";
import { useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import Translate from "../../src/components/translate";

function Contact() {

    const [showSuccessToast, setShowSuccessToast] = useState(false);

    const ContactService = contactService();

    const contactForm = useForm<IContact>({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    });

    const sendForm = () => {
        const data = { ...contactForm.values };

        if (Object.values(data).some((val) => val.trim() === '' || !val)) return;

        // contactForm.clearForm();

        ContactService.sendContact(data).then(() => {
            setShowSuccessToast(true);
            setTimeout(() => setShowSuccessToast(false), 3500);
        });
    }

    return (
        <StyledContact>
            <div className="contact-links">
                <a className="contact-item" href="tel:+5519998944099">
                    <Phone sx={{ fontSize: 40 }} />
                    <Translate value="contact.items.phone" />
                </a>
                <a className="contact-item" href="mailto:gbmiiller@hotmail.com">
                    <Mail sx={{ fontSize: 40 }} />
                    <Translate value="contact.items.email" />
                </a>
                <a className="contact-item" href="https://github.com/gabriel-hsmiiller" target="_blank">
                    <GitHub sx={{ fontSize: 40 }} />
                    <Translate value="contact.items.github" />
                </a>
                <a className="contact-item" href="https://linkedin.com/in/gabriel-henrique-da-silva-miiller-a3b922178" target="_blank">
                    <LinkedIn sx={{ fontSize: 40 }} />
                    <Translate value="contact.items.linkedin" />
                </a>
            </div>
            <div className="form-container">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    sendForm();
                }}>
                    <h2><Translate value="contact.form.useForm" /></h2>
                    <div className="form-fields">
                        <input
                            placeholder={useTranslate('contact.form.name')}
                            name="name"
                            type="text"
                            value={contactForm.values.name}
                            onChange={contactForm.handleChange} />
                        <input
                            placeholder={useTranslate('contact.form.email')}
                            name="email"
                            type="email"
                            value={contactForm.values.email}
                            onChange={contactForm.handleChange} />
                        <input
                            className="grid-item-span"
                            placeholder={useTranslate('contact.form.subject')}
                            name="subject"
                            type="text"
                            value={contactForm.values.subject}
                            onChange={contactForm.handleChange} />
                        <textarea
                            className="grid-item-span"
                            placeholder={useTranslate('contact.form.message')}
                            name="message"
                            value={contactForm.values.message}
                            onChange={contactForm.handleChange}></textarea>
                    </div>
                    <button>
                        <Translate value="contact.form.send" />
                    </button>
                </form>
            </div>
            <h3><Translate value="contact.thanks" /></h3>
            { showSuccessToast &&
                <div className="contact-sent-toast">
                    <div className="contact-sent-toast-close" onClick={() => setShowSuccessToast(false)}><Close sx={{ fontSize: 24 }} /></div>
                    <div className="contact-sent-toast-message">
                        <MdCheckCircle size={32} />
                        <Translate value="contact.sent" />
                    </div>
                </div>
            }
        </StyledContact>
    )
}

export default Contact;