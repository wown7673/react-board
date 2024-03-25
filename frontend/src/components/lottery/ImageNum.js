import styled from "styled-components";

const NumberImg = styled.img`
      width: 30px;
      margin : 0px 1px;
    `;

export default function ImageNum({num}){
    return (
        <NumberImg src={`${process.env.PUBLIC_URL}/image/lottery/nums/ball_${num}.png`}></NumberImg>
    );
}