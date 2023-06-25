import { useEffect, useState } from 'react';

import ReactLoading from 'react-loading';

import Banner from '@/Components/Banner';
import { buildMessage } from '@/utils/string';
import NumberButton from '@/Components/Numbers/NumberButton';
import Title from '@/Components/Title';
import { SellerNumbers, SellerProps, defaultSeller } from '@/props/SellerProps';
import Contact from '@/Components/Contact';
import '@/Pages/Raffle/style.css'

import { useParams } from 'react-router-dom';
import Payment from '@/Components/Payment';
import { buildValueToPay } from '@/utils/math';

const Raffle = () => {

  const [localSeller, setLocalSeller] = useState<SellerProps>(defaultSeller);
  const [chosenNumbers, setChosenNumbers] = useState<string[]>([]);
  const [price, setPrice] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { seller } = useParams();
  const valuePerRaffle = 5;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
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
      setIsLoading(false);
    }

    fetchData();
  }, [seller])

  useEffect(() => {
    setPrice(buildValueToPay(chosenNumbers.length, valuePerRaffle));
  }, [chosenNumbers]);

  return (
    <>
      <Title />
      <Banner />
      {!isLoading ?
        <>
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
            <Contact
              message={buildMessage(chosenNumbers, localSeller.sellerName, localSeller.pix)}
              sellerName={localSeller.sellerName}
              contact={localSeller.contact}
            />
          </div>
        </> :
        <ReactLoading
          type='bubbles'
        />
      }
      {/* Footer */}
    </>
  )
}
export default Raffle;
