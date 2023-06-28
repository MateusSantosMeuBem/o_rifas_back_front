import { FetchSellerProps } from "./RaffleBodyServiesProps";

export const fetchSeller = async ({
    loadindHandler,
    sellerName,
    sellerHandler,
}: FetchSellerProps) => {
    loadindHandler(true);
    const backUrl = 'https://orifas.onrender.com'
    const response = await fetch(`${backUrl}/numbers/${sellerName}`);
    const apiResponse = await response.json();
    sellerHandler({
        avaiableNumbers: apiResponse.avaiable_numbers,
        contact: apiResponse.contact,
        numbers: apiResponse.numbers,
        pix: apiResponse.pix,
        sellerName: apiResponse.seller_name,
        soldNumbers: apiResponse.sold_numbers
    });
    loadindHandler(false);
}