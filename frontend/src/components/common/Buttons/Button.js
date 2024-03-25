import styled from "styled-components";

const StyledButton = styled.button`
   /* 버튼의 기본 스타일 */
   display: inline-block;
   padding: 10px 20px;
   padding-top :  ${props => props.$py || "10px"};
   padding-bottom :  ${props => props.$py || "10px"};
  padding-left: ${props => props.$px || "20px"};
  padding-right: ${props => props.$px || "20px"};
  
   font-size: ${props => props.fontSize || "16px"};
  
   font-weight: 600;
   color: #ffffff;
   background-color: #1976d2;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   text-decoration: none;
   transition: background-color 0.3s ease;
   box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2); /* 그림자 효과를 추가합니다. */

   width : ${props => props.width || "auto"};
   height : ${props => props.height || "auto"};
  

   /* 버튼 호버 효과 */
   &:hover {
      background-color: #1565c0;
   }

   /* 버튼 액티브 효과 */
   &:active {
      background-color: #0d47a1;
   }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Button = ({children, disabled = false, ...rest})=>{
  return (
      <StyledButton disabled={disabled} {...rest}>{children}</StyledButton>
  );
};

export default Button;