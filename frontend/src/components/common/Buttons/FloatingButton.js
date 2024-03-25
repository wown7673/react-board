
// 키프레임 애니메이션 정의
import styled, {keyframes} from "styled-components";
import Button from "./Button";

const floatingAnimation = keyframes`
      0% {
        transform: scale(1);
        filter: brightness(100%); /* 시작 시 색상 밝기 */
        opacity: 1;
      }
      50% {
        transform: scale(1.05);
        filter: brightness(80%); /* 중간에 색상 어둡게 */
        opacity: 0.8;
      }
      100% {
        transform: scale(1);
        filter: brightness(100%); /* 다시 원래 밝기로 */
        opacity: 1;
      }
`;

const FloatingButton = styled(Button)`
      animation: ${floatingAnimation} 1.5s infinite; /* 3초 간격으로 무한 반복 */
  
      width : ${props => props.width || "auto"}
    
      &:hover {
        animation-play-state: paused; /* 마우스 오버 시 애니메이션 일시 중지 */
      }
`;

export default FloatingButton;