import { FetchSellersProps } from "./HomeBodyServiesProps";

export const fetchSellers = async ({
  loadingHandler,
  sellersHandler,
}: FetchSellersProps) => {
  loadingHandler(true);
  const backUrl = 'https://orifas.onrender.com';
  const response = await fetch(`${backUrl}/sellers`);
  const apiResponse = await response.json();
  const updatedSellers = apiResponse.map((seller: any) => ({
    avaiableNumbers: seller.avaiable_numbers,
    contact: seller.contact,
    numbers: seller.numbers,
    pix: seller.pix,
    sellerName: seller.seller_name,
    soldNumbers: seller.sold_numbers,
  }));
  sellersHandler(updatedSellers);
  loadingHandler(false);
};