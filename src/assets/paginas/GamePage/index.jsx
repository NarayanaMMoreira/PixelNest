import { useParams } from "react-router-dom"
import games from '../../json/games.json'; 
import styled from "styled-components";

const Title = styled.h1`
    color: #000000;
    align-items: center;
    margin: 100px;
    `


const GamePage = () => {

    const parametros = useParams();
    const game = games.find((game) => {
        return game.id_nome === parametros.id;
    })

    return (
        <div>
            <img src="" alt="" />
            <Title>{game.title}</Title>
            <p>{game.catchphrase}</p>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <p>{game.summary}</p>
            <div>
                <video src=""></video>
                <p>{game.gameplay}</p>
            </div>
            <div>
                <h2>Curiosidades do Jogo</h2>
                <p>{game.curiosities}</p>
            </div>
        </div>
    )
}

export default GamePage