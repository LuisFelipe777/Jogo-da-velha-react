import { useContext, useEffect } from "react";
import { GameContext } from "../../contexts/GameContext";
import CalculateWinner from "../../utils/CalculateWinner";
import Player from "../Player";
import Reset from "../Reset";
import Square from "../Square";
import Whinner from "../Winner";
import "./styles.css";

export default function Boord() {
    const { squares, setWhoIsWinner } = useContext(GameContext);

    useEffect(() => {
        const winner = CalculateWinner(squares);
        if (winner) {
            setWhoIsWinner(winner);
        }
    }, [squares]);
    return (

        <div className="board-container">
            <Player />
            <Whinner />
            <Reset />
            <div className="board">
                {squares.map((value, index) => (
                    <Square value={value} index={index} key={index} />
                ))}
            </div>
        </div>
    );
}