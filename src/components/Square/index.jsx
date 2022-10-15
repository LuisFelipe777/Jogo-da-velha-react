import { useContext } from "react"
import { GameContext } from "../../contexts/GameContext";

export default function Square({ value, index }) {
    const { squares, setSquares, isXNext, setIsXNext, whoIsWinner } = useContext(GameContext);
    function handleClick() {
        if (squares[index]) return;
        if (whoIsWinner) return;
        const newSquares = [...squares];
        newSquares[index] = isXNext ? "X" : "O";
        setSquares(newSquares);
        setIsXNext(!isXNext);
    }
    return (
        <button type="button" onClick={handleClick}>{value}</button>
    );
}