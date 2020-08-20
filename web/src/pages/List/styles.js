import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1180px;
    height: 100vh;
    padding: 0 30px;
    margin: 32px auto;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
    }

    header .back {
        text-decoration: none;
        color: #444;
    }

    header .back:hover {
        opacity: 0.7;
    }
    
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;

        padding: 20px 0;
    }

    @media (max-width: 570px) {

        ul {
            grid-template-columns: 1fr;
        }
    }
`;
