import React from 'react';
import { useParams } from 'react-router-dom';
import DadJoke from './DadJoke/Dadjoke';
import KittyFetcher from './KittyImage/KittyImage';
import QrCodeGenerator from './Qrcode/Qrcode';


const Apis = () => {
    const {apiId} = useParams()
    return (
        <>
            {apiId === "1" && <DadJoke/>}
            {apiId === "2" && <KittyFetcher/>}
            {apiId === "3" && <QrCodeGenerator/>}
        </>
    );
}

export default Apis