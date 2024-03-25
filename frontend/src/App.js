import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import Boards from "./routes/board/Boards";
import Home from "./routes/Home";
import BoardDetail from "./routes/board/BoardDetail";
import BoardWrite from "./routes/board/BoardWrite";
import BoardUpdate from "./routes/board/BoardUpdate";
import BoardHome from "./routes/board/BoardHome";

import LoginForm from "./components/LoginForm";
import Delivery from "./routes/delivery/Delivery";

import LotteryHome from "./routes/lottery/LotteryHome";

import NotFoundPage from "./routes/common/NotFoundPage";

import GlobalStyle from "./styles/GlobalStyle";
import RandomPickPage from "./routes/lottery/RandomPickPage";
import Test from "./components/Test";
import React from "react";

import Welcome from "./routes/Welcome";
import {Reset} from "styled-reset";
import RoundWinNumsPage from "./routes/lottery/RoundWinNumsPage";




function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                {/* Header,Footer,Nav을 보여주고 싶은 컴포넌트 */}
                <Route path="/" element={<Home/>}>
                    <Route path="/" element={<Welcome/>}/>
                    <Route path='/board/' element={<BoardHome/>} >
                        <Route index element={<Boards/>} />     {/*아래와 동일하지만 /board/로 왔을시 바로 이게 라우팅됨*/}
                        <Route path='boards' element={<Boards/>} />
                        <Route path="write" element={<BoardWrite/>} />
                        <Route path=":idx" element={<BoardDetail />} />
                        <Route path="update/:idx" element={<BoardUpdate />} />
                    </Route>

                    <Route path="/lottery" element={<LotteryHome />}>
                        <Route index element={<RandomPickPage/>} />
                        <Route path='create' element={<RandomPickPage/>} />
                        <Route path='roundWinNums' element={<RoundWinNumsPage/>} />

                        <Route path='test' element={<Test/>} />
                        <Route path='*' element={<NotFoundPage />} />
                    </Route>
                </Route>


                <Route path="/delivery" element={<Delivery />} />

                {/* Header,Footer,Nav을 안 보여주고 싶은 컴포넌트 */}
                <Route path="/test" element={<LoginForm/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;