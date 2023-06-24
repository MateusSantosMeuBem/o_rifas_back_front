import { useEffect, useState } from 'react';

import './style.css'

import { NumberButtonProps } from './NumberButtonProps';


const handleClick = (
  setChosenNumbers: React.Dispatch<React.SetStateAction<string[]>>,
  label: string,
  isChecked: boolean,
) => {
  console.log(isChecked);
  if (!isChecked) {
    console.log(`Adding ${label}`);
    setChosenNumbers((prev) => [...prev, label]);
  } else {
    console.log(`Removing ${label}`);
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
