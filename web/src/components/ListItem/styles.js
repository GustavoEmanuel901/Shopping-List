import styled from 'styled-components';

export const Container = styled.li`
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;

    strong {
        display: block;  
        font-size: 16px;
        color: #41414d;
        margin-bottom: 5px;
    }

    p {
        color: #737388;
        line-height: 21px;
        font-size: 16px; 
        margin-bottom: 10px;
    }

    p + strong {
        margin-top: 32px;
    }
`;
