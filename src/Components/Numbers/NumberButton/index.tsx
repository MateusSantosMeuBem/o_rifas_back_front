import { useState } from 'react';

import './style.css'

import { NumberButtonProps } from './NumberButtonProps';

const NumberButton = ({
    avaiable,
    label,
}: NumberButtonProps) => {

    const [isChecked, setIsChecked] = useState<boolean>(false);

    return (
        <input
            type='button'
            value={label}
            disabled={!avaiable}
            className={isChecked ? 'checked' : 'unchecked'}
            onClick={() => setIsChecked(!isChecked)}
        />
    )
}

export default NumberButton
