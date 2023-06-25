import './style.css'

import { PaymentProps } from './PaymentProps';

const Payment = ({ price }: PaymentProps) => {

    return (
        <>
            <span className='labelPrice'>
                { price.toFixed(2) }
            </span>
        </>
    )
}

export default Payment