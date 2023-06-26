import whatsappLogo from '@/assets/WhatsAppOutlined.svg';
import './style.css';
import { ContactButtonProps } from './ContactButtonProps';
import { capitalize } from '@/utils/string';

const ContactButton = ({
    sellerName,
    message,
    contact,
}: ContactButtonProps) => {
    console.log(message);
    
    
    return (
        <a className='contact-button' href={`${contact}?text=${encodeURIComponent(message)}`} target='_blank'>
            {capitalize(sellerName)}
            <img src={whatsappLogo} />
        </a>
    )
}

export default ContactButton;