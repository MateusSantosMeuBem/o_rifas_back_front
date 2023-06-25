import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ReactLoading from 'react-loading';

import Contact from '@/Components/Contact';
import Numbers from '@/Components/Numbers';
import Payment from '@/Components/Payment';
import '@/Components/RaffleBody/style.css'

import { SellerProps, defaultSeller } from '@/props/SellerProps';

import { buildMessage } from '@/utils/string';
import { buildValueToPay } from '@/utils/math';
import { fetchSeller } from '@/services/RaffleBodyServices';

const RaffleBody = () => {
  const [localSeller, setLocalSeller] = useState<SellerProps>(defaultSeller);
  const [chosenNumbers, setChosenNumbers] = useState<string[]>([]);
  const [price, setPrice] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { seller } = useParams();
  const valuePerRaffle = 5;

  useEffect(() => {
    fetchSeller({
      loadindHandler: setIsLoading,
      sellerHandler: setLocalSeller,
      sellerName: seller
    });
  }, [seller])

  useEffect(() => {
    setPrice(buildValueToPay(chosenNumbers.length, valuePerRaffle));
  }, [chosenNumbers]);

  return (
    isLoading ?
      <ReactLoading
        type='bubbles'
      /> :
      <>
        <Numbers
          localSeller={localSeller}
          setChosenNumbers={setChosenNumbers}
        />
        <div className='containerSale'>
          <Payment price={price} />
          <Contact
            message={buildMessage(chosenNumbers, localSeller.sellerName, localSeller.pix)}
            sellerName={localSeller.sellerName}
            contact={localSeller.contact}
          />
        </div>
      </>
  )
}

export default RaffleBody;