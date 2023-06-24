export interface NumberButtonProps {
    avaiable?: boolean,
    label: string;
    setChosenNumbers: React.Dispatch<React.SetStateAction<string[]>>;
}