import Boord from "../../components/Boord";
import GameContextProvider from "../../contexts/GameContext";
import "./styles.css"

export default function Home() {
    return (
        <GameContextProvider>
            <Boord />
        </GameContextProvider>
    );
}