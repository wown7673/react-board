import styled from "styled-components";

const Main = styled.main`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default function Welcome(){

    return (
        <Main>
            홈입니다요~
        </Main>

    );
}