import { useEffect, useState } from 'react';

import ReactLoading from 'react-loading';

import '@/Components/HomeBody/style.css'
import SellerButton from './SellerButton';
import { SellerProps, defaultSeller } from '@/props/SellerProps';
import { fetchSellers } from '@/services/HomeBodyServices';


const HomeBody = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [localSellers, setLocalSellesr] = useState<SellerProps[]>([defaultSeller]);

  useEffect(() => {
    fetchSellers({
      loadingHandler: setIsLoading,
      sellersHandler: setLocalSellesr,
    });
  }, [])

  return (
    isLoading ?
      <ReactLoading
        type='spinningBubbles'
      /> :
      <>
        <span>Escolha com quem você deseja comprar:</span>
        {localSellers.map((seller) => (
          <SellerButton
            key={seller.sellerName}
            sellerName={seller.sellerName}
          />
        ))}
      </>
  )
}

export default HomeBody;