import styled from "styled-components";
import {Link, NavLink, Outlet} from "react-router-dom";
import {COLOR} from "../../utils/color";

const Main = styled.main`
  max-width: 1200px;
  margin : auto;
`;

const Nav = styled.nav`
    ul{
      display: flex;
      gap:2rem;
      justify-content: center;
      margin : 5px 0px;
    }
  
    ul li a{
      display: inline-block;
      border: solid 2px ${COLOR.borderColor};
      border-radius: 30px;
      padding: 10px;
      height : 20px;
      line-height: 20px;
    }
`;

const StyledNavLink = styled(NavLink)`
  /*Nav -> NavLink만 바꾸고 .active 로 스타일만 주면 활성화된 메뉴스타일이 적용됨*/
  &.active{
    background-color: ${COLOR.borderColor};
  }
`;

function LotteryHome() {
    return (
        <Main>
            <Nav>
                <ul>
                    <li><StyledNavLink to='/lottery/create'>로또 번호 생성기</StyledNavLink></li>
                    <li><StyledNavLink to='/lottery/roundWinNums'>회차별 당첨번호</StyledNavLink></li>
                    <li><StyledNavLink to='/lottery/test'>테스트</StyledNavLink></li>
                </ul>
            </Nav>
            <Outlet/>
        </Main>
    );
}

export default LotteryHome;