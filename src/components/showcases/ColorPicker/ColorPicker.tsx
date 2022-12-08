import { Container } from '@mui/material';
import { flexbox } from '@mui/system';
import React, { FC, useState } from 'react';
import styles from './ColorPicker.module.css';

const ColorPickerComponent = () => {
  const [color, setColor] = useState('#000000');

  return (
          <Container maxWidth='md' className={styles.container}>
            <h1>Colorpicker</h1>
            <input type="color" value={color} onChange={(event) => setColor(event.target.value)}/>
            <select onChange={(event) => setColor(event.target.value)}>
                <option value="#000000">#000000</option>
                <option value="#FF0000">#FF0000</option>
                <option value="#00FF00">#00FF00</option>
                <option value="#0000FF">#0000FF</option>
            </select>
            <div style={{width: 100, height: 100, backgroundColor: color}} />
          </Container>
  );
}

interface ColorPickerProps {}

const ColorPicker: FC<ColorPickerProps> = () => (
  <div className={styles.ColorPicker}>
    <ColorPickerComponent/>
  </div>
);

export default ColorPicker;
