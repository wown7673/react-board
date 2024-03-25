import styled from "styled-components";


export const CenterDiv = styled.div`
  text-align: center;
  width : ${props=> props.width || '100%'};
  height : ${props=> props.height || '100%'};
`;