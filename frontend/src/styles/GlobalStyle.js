import styled, {createGlobalStyle} from 'styled-components';
import reset from "styled-reset";
import {fonts} from './fonts';



const GlobalStyle = createGlobalStyle`
   
   // styled-reset 을 통한 리셋
   ${reset}
   
   // 폰트 
   ${fonts}
   
  // styled-reset 사용시 h 태그 폰트사이즈도 초기화 되므로 다시 설정...
   h1, h2, h3, h4, h5, h6{
      font-weight: bold;
   }
   
   h1{ font-size: 2em; }
   h2{ font-size: 1.5em; }
   h3{ font-size: 1.17em; }
   h4{ font-size: 1em; }
   h5{ font-size: 0.83em; }
   h6{ font-size: 0.67em; }
   
  
  // 추가적인 css 리셋
  a{
     text-decoration-line: none;
  }

   // 폰트
   body{
      font-family:'Gmarket Sans', sans-serif;
   }
   .container{
      max-width: 1200px;
      margin: auto;
   }
   

   
`;

export default  GlobalStyle;

