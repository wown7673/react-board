import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";
import {COLOR} from "../utils/color";

const HeaderLayout = styled.header`
  border-top : solid 1px ${COLOR.borderColor};
  border-bottom : solid 1px ${COLOR.borderColor};
  
  .container{
    display: flex;
    justify-content: space-between;   // 축정렬
    align-items: center;   // 교차축정렬
    height: 50px;
    //border: solid 2px green;
    
    nav {
      flex : 1;
      margin: 0 30px;
    }

    ul{
      display: flex;
      gap:1rem;
    }

    ul li{
      //border : solid 1px blue;
      width: 80px;
      height: 50px;
      text-align: center;
      line-height: 50px;

      font-size: 1.2rem;
    }
    
  }
`;

const StyledNavLink = styled(NavLink)`
  display:inline-block;
  height: 100%;
  &.active{
    background-color: ${COLOR.borderColor};
    width: 80px;
    height: 50px;
  }
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  
  img{
    width : 50px;
    height: 50px;
  }
`;


const User = styled.div`
  width:30px;
  height:30px;
  background-color: blue;
  border-radius: 50%;
`;



export default function Header(){


    return (
        <HeaderLayout>
            <div className="container">
                <Logo><Link to={"/"}><img src={`${process.env.PUBLIC_URL}/image/logo/logo.jpeg`}></img></Link></Logo>
                <nav>
                    <ul>
                        <li><StyledNavLink to={"/board"}>게시판</StyledNavLink></li>
                        <li><StyledNavLink to={"/lottery"}>로또</StyledNavLink></li>
                    </ul>
                </nav>
                <User />
            </div>
        </HeaderLayout>
    );
}


