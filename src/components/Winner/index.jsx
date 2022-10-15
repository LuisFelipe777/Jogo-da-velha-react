import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import "./styles.css"

export default function Whinner() {
    const { whoIsWinner } = useContext(GameContext);

    if (!whoIsWinner) return <></>;
    return (
        <p className="winner">
            {whoIsWinner} ganhou
        </p>
    );

}