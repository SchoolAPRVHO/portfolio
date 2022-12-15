import React, { useState } from 'react';
import axios from 'axios';
import styles from './Qrcode.module.css';
import { Button } from '@mui/material';

const QrCodeGenerator = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [textString, setTextString] = useState('');

  const generateQrCode = async (text: string) => {
    try {
      setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>QR Code Generator</h1>
        <label htmlFor="inputText">Give here your wanted text</label>
        <input type="text" id='inputText' value={textString} onChange={(e)=> setTextString(e.target.value)} />
      <Button variant="contained" onClick={() => generateQrCode(textString)}>Generate QR Code</Button>
      {qrCodeUrl && <img src={qrCodeUrl} alt="QR code" />}
    </div>
  );
};

export default QrCodeGenerator;
