import React from "react";
import { useParams } from "react-router-dom";
import ButtonCalc from "./ButtonCalc/ButtonCalc";
import ColorPicker from "./ColorPicker/ColorPicker";
import QuizAppComplete from "./QuizApp/QuizApp";
import Slots from "./Slots/Slots";
import TicTacToe from "./TicTacToe/TicTacToe";


const Showcases = () => {
    const {showcaseId} = useParams()
    return (
        <>
            {showcaseId === "1" && <ButtonCalc/>}
            {showcaseId === "2" && <ColorPicker/>}
            {showcaseId === "3" && <QuizAppComplete/>}
            {showcaseId === "4" && <Slots/>}
            {showcaseId === "5" && <TicTacToe/>}
        </>
    );
    };

export default Showcases;