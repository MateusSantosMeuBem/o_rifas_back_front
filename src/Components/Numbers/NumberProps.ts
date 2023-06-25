import { SellerProps } from "@/props/SellerProps";

export interface NumbersProps {
    localSeller: SellerProps,
    setChosenNumbers: React.Dispatch<React.SetStateAction<string[]>>,
}