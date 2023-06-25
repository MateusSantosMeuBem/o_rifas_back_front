import { useEffect, useState } from 'react';

import Banner from '@/Components/Banner';
import NumberButton from '@/Components/Numbers/NumberButton';
import Title from '@/Components/Title';
import { SellerNumbers, SellerProps, defaultSeller } from '@/props/SellerProps';
import ContactButton from '@/Components/Contact/ContactButton';
import '@/Pages/Raffle/style.css'

import { useParams } from 'react-router-dom';
import Payment from '@/Components/Payment';

const Raffle = () => {

  const [localSeller, setLocalSeller] = useState<SellerProps>(defaultSeller);
  const [chosenNumbers, setChosenNumbers] = useState<string[]>([]);
  const [price, setPrice] = useState<number>(0);
  const { seller } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://orifas.onrender.com/numbers/${seller}`);
      const apiResponse = await response.json();
      setLocalSeller({
        avaiableNumbers: apiResponse.avaiable_numbers,
        contact: apiResponse.contact,
        numbers: apiResponse.numbers,
        pix: apiResponse.pix,
        sellerName: apiResponse.seller_name,
        soldNumbers: apiResponse.sold_numbers
      });
    }

    fetchData();
  }, [seller])

  useEffect(() => {
    setPrice(chosenNumbers.length * 5);
  }, [chosenNumbers]);

  console.log(chosenNumbers);
  console.log(price);


  return (
    <>
      <Title />
      <Banner />
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
      <div className='containerSale'>
        <Payment price={price} />
        <ContactButton
          message=''
          sellerName={localSeller.sellerName}
          contact={localSeller.contact}
        />
      </div>
      {/* Números */}
      {/* Dados de comprar */}
      {/* Footer */}
    </>
  )
}
export default Raffle;
