import React from "react";
import styled from "styled-components";
import {COLOR} from "../utils/color";
import {toast, ToastContainer} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

const FooterLayout = styled.footer`
  border-top : solid 1px ${COLOR.borderColor};
  border-bottom : solid 1px ${COLOR.borderColor};
  padding: 10px;
  font-size: 0.6rem;
  
  background-color: black;
  color :white;
  text-align: center;
  
  div{
    margin-bottom : 5px;
  }
  
`;


const EmailSpan = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;

function Footer(){
    const handleCopyToClipboard = () => {
        const email = 'wown7673@naver.com';
        navigator.clipboard.writeText(email);
        toast("복사 되었습니다.");
    };

    return (
        <>
        <FooterLayout>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
            <div>@2024 JJJ</div>
            <p>Contact us: <EmailSpan onClick={handleCopyToClipboard}>wown7673@naver.com</EmailSpan></p>
        </FooterLayout>
        </>
    );
}

export default Footer;

