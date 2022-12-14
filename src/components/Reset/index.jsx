import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import "./styles.css"

export default function Reset() {
    const { setSquares, setIsXNext, setWhoIsWinner } = useContext(GameContext);
    function handleClick() {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
        setWhoIsWinner("");
    }
    return <p className="reset">
        <button type="button" onClick={handleClick}>Reset</button>
    </p>
}