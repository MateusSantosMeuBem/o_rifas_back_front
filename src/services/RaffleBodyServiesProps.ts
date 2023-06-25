import { SellerProps } from "@/props/SellerProps";

export interface FetchSellerProps {
    loadindHandler: React.Dispatch<React.SetStateAction<boolean>>,
    sellerName?: string,
    sellerHandler: React.Dispatch<React.SetStateAction<SellerProps>>,
}