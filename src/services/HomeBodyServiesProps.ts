import { SellerProps } from "@/props/SellerProps";

export interface FetchSellersProps {
    loadingHandler: React.Dispatch<React.SetStateAction<boolean>>,
    sellersHandler: React.Dispatch<React.SetStateAction<SellerProps[]>>,
}