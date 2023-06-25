import ContactButton from "./ContactButton"
import { ContactButtonProps } from "./ContactButton/ContactButtonProps"

import './style.css'

const Contact = ({
    sellerName,
    message,
    contact,
}: ContactButtonProps) => {
    return (
        <div className="contact">
            <span className="contact-label">Compre com...</span>
            <ContactButton
                contact={contact}
                message={message}
                sellerName={sellerName}
            />
        </div>
    )
}

export default Contact;