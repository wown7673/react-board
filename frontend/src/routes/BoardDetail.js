import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

import Board from "../components/Board";

function BoardDetail() {
    const params = useParams();
    const [board, setBoard] = useState({});

    const navi = useNavigate();

    async function getBoard() {
        const response = await axios.get(`//localhost:8989/board/board/${params.idx}`);
        setBoard(response.data);
    }

    const handleDelete = async () => {
        const result = window.confirm("삭제하시겠습니까?");
        if (result) {
            const response = await axios.delete(`http://localhost:8989/board/board/${params.idx}`);
            console.log("삭제응답결과"+response.data);
            navi("/board/boards");
        }
    };

    useEffect(() => {
        getBoard();
    }, []);




    return (
        <div>
            <Board board={board}/>
            <div>
                <button onClick={()=>navi("/board/update/"+board.id)}>수정</button>
                <button onClick={handleDelete}>삭제</button>
                <button onClick={()=>navi("/board/boards")}>목록</button>
            </div>
        </div>
    );
}

export default BoardDetail;