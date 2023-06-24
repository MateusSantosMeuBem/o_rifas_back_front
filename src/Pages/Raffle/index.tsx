import { useEffect, useState } from 'react';

import Banner from '@/Components/Banner';
import NumberButton from '@/Components/Numbers/NumberButton';
import Title from '@/Components/Title';
import { SellerNumbers, SellerProps, defaultSeller } from '@/props/SellerProps';
import ContactButton from '@/Components/Contact/ContactButton';

import { useParams } from 'react-router-dom';

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

  console.log(chosenNumbers);

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
      <ContactButton
        message=''
        sellerName={localSeller.sellerName}
        contact={localSeller.contact}
      />
      {/* Números */}
      {/* Dados de comprar */}
      {/* Footer */}
    </>
  )
}
export default Raffle;
