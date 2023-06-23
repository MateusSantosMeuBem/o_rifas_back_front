import { useEffect, useState } from 'react';

import Banner from "../../Components/Banner"
import NumberButton from "../../Components/Numbers/NumberButton"
import Title from "../../Components/Title"
import { SellerNumbers, SellerProps, defaultSeller } from "../../props/SellerProps";

import { useParams } from 'react-router-dom';

const Raffle = () => {

    const [localSeller, setLocalSeller] = useState<SellerProps>(defaultSeller);
    const { seller } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://orifas.onrender.com/numbers/${seller}`);
            const data = await response.json();
            setLocalSeller(data);
        }

        fetchData();
        console.log()
    }, [seller])

    return (
        <>
            <Title />
            <Banner />
            {localSeller.numbers.map(({ number, sold }: SellerNumbers) => (
                <NumberButton
                    label={number}
                    avaiable={sold === 'NÃO' ? true : false}
                    key={number}
                />
            ))}
            {/* Números */}
            {/* Dados de comprar */}
            {/* Footer */}
        </>
    )
}
export default Raffle;
