import styled from 'styled-components';

const Bloco = styled.div`
 width: 100%;
 flex-direction: column;
 align-items: center;
 display: flex;
 background-color: #343a40;
 color: #ffffff;
 padding: 1rem;
 margin: 0;
 box-sizing: border-box;
 box-shadow: 6px 4px 0 rgba(0.1, 0, 0, 0);;
`



const Rodape = () => {
    return (
        <Bloco>
            <p>© 2024 PixelNest. Este é um projeto acadêmico sem fins lucrativos desenvolvido por Narayana Moreira e Larissa Silva</p>
        </Bloco>
    )
}

export default Rodape