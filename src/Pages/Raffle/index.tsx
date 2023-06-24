import { useEffect, useState } from 'react';

import Banner from '@/Components/Banner';
import { buildMessage } from '@/utils/string';
import NumberButton from '@/Components/Numbers/NumberButton';
import Title from '@/Components/Title';
import { SellerNumbers, SellerProps, defaultSeller } from '@/props/SellerProps';

import { useParams } from 'react-router-dom';
import Contact from '@/Components/Contact';

const Raffle = () => {

  const [localSeller, setLocalSeller] = useState<SellerProps>(defaultSeller);
  const [chosenNumbers, setChosenNumbers] = useState<string[]>([]);
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

  return (
    <>
      <Title />
      <Banner />
      {localSeller.numbers.map(({ number, sold }: SellerNumbers) => (
        <NumberButton
          setChosenNumbers={setChosenNumbers}
          label={number}
          avaiable={sold === 'NÃO' ? true : false}
          key={number}
        />
      ))}
      {/* Números */}
      {/* Dados de comprar */}
      <Contact
        message={buildMessage(chosenNumbers, localSeller.sellerName, localSeller.pix)}
        sellerName={localSeller.sellerName}
        contact={localSeller.contact}
      />
      {/* Footer */}
    </>
  )
}
export default Raffle;
