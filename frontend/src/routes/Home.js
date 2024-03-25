import React from "react";
import {Link, Outlet} from "react-router-dom";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import styled from "styled-components";
import {COLOR} from "../utils/color";

import {toast, ToastContainer} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Article = styled.article`
  border : solid 1px ${COLOR.borderColor};
  border-radius: 10px;
  width : 100px;
  height : 100px;
  
  text-align: center;
  line-height: 100px;
`;



function Home(){

    function abc(){
        toast("호호호");
    };

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer />
        </>
    );
}

export default Home;