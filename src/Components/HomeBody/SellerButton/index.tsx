import RightArrow from '@/assets/ArrowRightOutlined.svg';
import './style.css';
import { SellerButtonProps } from './SellerProps';
import { capitalize } from '@/utils/string';

const SellerButton = ({
    sellerName,
}: SellerButtonProps) => {
    return (
        <a className='seller-button' href={`/${sellerName}`}>
            {capitalize(sellerName)}
            <img src={RightArrow} className='icon' />
        </a>
    )
}

export default SellerButton;