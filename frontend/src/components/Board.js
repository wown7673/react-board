import React from "react";

function Board({board}){
    return (

        <div>
            게시판 상세보기
            <h2>{board.title}</h2>
            <h5>{board.content}</h5>
        </div>
    );
}

export default Board;