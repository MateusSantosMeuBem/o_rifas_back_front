import { SellerNumbers } from '@/props/SellerProps'
import './style.css'
import NumberButton from './NumberButton';
import { NumbersProps } from './NumberProps';

const Numbers = ({
  localSeller,
  setChosenNumbers,
}: NumbersProps) => {

  return (
    <div className='containerNumberButtons'>
      {localSeller.numbers.map(({ number, sold }: SellerNumbers) => (
        <NumberButton
          setChosenNumbers={setChosenNumbers}
          label={number}
          avaiable={sold === 'NÃO' ? true : false}
          key={number}
        />
      ))}
    </div>
  )
}

export default Numbers;