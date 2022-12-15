import React from "react";
import { useParams } from "react-router-dom";
import ButtonCalc from "./ButtonCalc/ButtonCalc";
import ColorPicker from "./ColorPicker/ColorPicker";
import DadJoke from "../api/DadJoke/Dadjoke";
import PokemonApp from "./Pokemon/Pokemon";
import QuizAppComplete from "./QuizApp/QuizApp";
import Slots from "./Slots/Slots";
import TicTacToe from "./TicTacToe/TicTacToe";
import TodoApp from "./TodoApp/TodoApp";
import ShoppingList from "./ShoppingList/ShoppingList";


const Showcases = () => {
    const {showcaseId} = useParams()
    return (
        <>
            {showcaseId === "1" && <ButtonCalc/>}
            {showcaseId === "2" && <ColorPicker/>}
            {showcaseId === "3" && <QuizAppComplete/>}
            {showcaseId === "4" && <Slots/>}
            {showcaseId === "5" && <TicTacToe/>}
            {showcaseId === "6" && <PokemonApp/>}
            {showcaseId === "7" && <TodoApp/>}
            {showcaseId === "8" && <ShoppingList/>}
        </>
    );
    };

export default Showcases;
