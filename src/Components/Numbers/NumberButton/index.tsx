import { useState } from 'react';

import './style.css'

import { NumberButtonProps } from './NumberButtonProps';

const handleClick = (
  setChosenNumbers: React.Dispatch<React.SetStateAction<string[]>>,
  label: string,
  isChecked: boolean,
) => {
  if (!isChecked) {
    setChosenNumbers((prev) => [...prev, label]);
  } else {
    setChosenNumbers((prev) => prev.filter((number) => number !== label));
  }
}

const NumberButton = ({
  avaiable,
  label,
  setChosenNumbers,
}: NumberButtonProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <input
      type='button'
      value={label}
      disabled={!avaiable}
      className={isChecked ? 'checked' : 'unchecked'}
      onClick={() => {
        setIsChecked(!isChecked);
        handleClick(setChosenNumbers, label, isChecked);
      }}
    />
  )
}

export default NumberButton
