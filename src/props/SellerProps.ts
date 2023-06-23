export interface SellerNumbers {
    number: string,
    sold: string,
}

export interface SellerProps {
    avaiableNumbers: number,
    contact: string,
    numbers: SellerNumbers[],
    pix: string,
    sellerName: string,
    soldNumbers: number,
}

export const defaultSeller: SellerProps = {
    avaiableNumbers: 0,
    contact: '',
    numbers: [],
    pix: '',
    sellerName: '',
    soldNumbers: 0,
}