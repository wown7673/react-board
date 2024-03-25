import {Link, Outlet, Route, Routes} from "react-router-dom";
import Footer from "../../layout/Footer";
import Boards from "./Boards";
import BoardWrite from "./BoardWrite";
import BoardDetail from "./BoardDetail";
import BoardUpdate from "./BoardUpdate";
import styled from "styled-components";
import {COLOR} from "../../utils/color";

const Main = styled.main`
  background-color: yellow;
  
  //height: 200px;
  
`;

const Nav = styled.nav`
  padding : 10px 0px;
  ul{
    display: flex;
    justify-content: center;
    gap : 3rem;
    //border-bottom: solid 1px ${COLOR.borderColor};
    margin : 10px 0;
  }
`;


export default function BoardHome() {
    return (
        <>
            <Main className="container">
                <Nav>
                    <ul>
                        <li><Link to='/board/boards'>게시판목록</Link></li>
                        <li><Link to='/board/write'>게시판등록</Link></li>
                        <li>건의</li>
                    </ul>
                </Nav>
                <Outlet/>
            </Main>


        </>
    );
}