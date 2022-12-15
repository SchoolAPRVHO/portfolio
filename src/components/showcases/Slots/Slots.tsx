import { Container } from "@mui/material";
import React, { useState } from "react";
import slotCherry from "./assets/slot-cherry.png";
import slotLemon from "./assets/slot-lemon.png";
import slotMelon from "./assets/slot-melon.png";
import slotPrune from "./assets/slot-prune.png";
import slotSeven from "./assets/slot-seven.png";

import styles from "./Slots.module.css";

export const Slot = ({ value }: { value: number }) => {
  let img = slotCherry;
  let alt = slotCherry;
  switch (value) {
    case 0:
      img = slotCherry;
      alt = slotCherry;
      break;
    case 1:
      img = slotLemon;
      alt = slotLemon;
      break;
    case 2:
      img = slotMelon;
      alt = slotMelon;
      break;
    case 3:
      img = slotPrune;
      alt = slotPrune;
      break;
    case 4:
      img = slotSeven;
      alt = slotSeven;
      break;
  }
  return (
    <div className={styles.slot}>
      <img src={img} alt={alt} style={{ width: 50 }} />
    </div>
  );
};

const getSlots = (slots: number) => {
  let slotNumbers: number[] = Array.from(Array(slots).keys()).map(() =>
    Math.floor(Math.random() * 5)
  );
  return slotNumbers;
};

export const SlotMachine = ({ slots }: { slots: number }) => {
  const [slotNumbers, setSlotNumbers] = useState(getSlots(slots));
  const [money, setMoney] = useState(100);

  const isWinning = () => {
    let winning = slotNumbers.every((slot) => slot === slotNumbers[0]);
    return winning;
  };

  const pullLever: React.MouseEventHandler<HTMLButtonElement> = () => {
    setSlotNumbers(getSlots(slots));
    if (isWinning()) {
      setMoney(money + 20);
    } else {
      setMoney((money) => money - 1);
    }
  };

  return (
    <div className={styles.slotMachineContainer}>
      {money > 0 && <div>Saldo: €{money}</div>}
      <div className={styles.slotMachineSubContainer}>
        <button
          className={styles.lever}
          onClick={pullLever}
          disabled={money > 0 ? false : true}
        >
          Pull Lever
        </button>
        {slotNumbers.map((slot, i) => (
          <Slot value={slot} key={i} />
        ))}
      </div>
      {money === 0 && <p className={styles.linearWipe}>Je bent bankroet!</p>}
    </div>
  );
};

const Slots = () => {
  return (
    <Container className={styles.container} maxWidth="md">
      <h1>Slotmachine</h1>
      <div className={styles.Slots}>
        <SlotMachine slots={3} />
      </div>
    </Container>
  );
};

export default Slots;
