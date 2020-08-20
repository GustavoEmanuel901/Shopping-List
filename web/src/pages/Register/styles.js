import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 100%;
  margin: 30px;
  
  max-width: 450px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 10px black;

  h1 {
    text-align: center;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    padding: 10px 20px;
  }

  .input-block label {
    margin-bottom: 5px;
  }

  .input-group {
    display: flex;
  }

  .env {
    display: flex;
    align-items: center;
    justify-content: center
  }

  .env button {
    width: 90%;
  }

  .link {
    text-align: center;
    margin-top: 30px;
    text-decoration: none;
    color: #444;
    cursor: pointer;
    transition: 0.4s;
  }

  .link:hover {
    opacity: 0.7;
  }
`;
