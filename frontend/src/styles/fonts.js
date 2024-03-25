import {css} from 'styled-components';


import GmarketSansOTFLight from '../assets/fonts/GmarketSansOTF/GmarketSansLight.otf';
import GmarketSansOTFMedium from '../assets/fonts/GmarketSansOTF/GmarketSansMedium.otf';
import GmarketSansOTFBold from '../assets/fonts/GmarketSansOTF/GmarketSansBold.otf';

export const fonts = css`

    /*지마켓 폰트*/
  @font-face {
    font-family: 'Gmarket Sans';
    font-weight: 300;
    src: url(${GmarketSansOTFLight});
  }
  @font-face {
    font-family: 'Gmarket Sans';
    font-weight: 500;
    src: url(${GmarketSansOTFBold});
  }
  
  
  @font-face {
    font-family: 'Gmarket Sans';
    font-weight: 400;
    src: url(${GmarketSansOTFMedium});
  }


`;
