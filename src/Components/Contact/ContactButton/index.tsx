import whatsappLogo from '@/assets/WhatsAppOutlined.svg';
import './style.css';
import { ContactButtonProps } from './ContactButtonProps';

/**
 * Capitalize the first letter of a string
 * @param str String to be capitalized
 * @returns Capitalized string
 * @example
 * capitalize('hello') // Hello
 */
const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const ContactButton = ({
    sellerName,
    message,
    contact,
}: ContactButtonProps) => {
    return (
        <a className='contact-button' href={`${contact}?text=${encodeURIComponent(message)}`} target='_blank'>
            {capitalize(sellerName)}
            <img src={whatsappLogo} />
        </a>
    )
}

export default ContactButton;