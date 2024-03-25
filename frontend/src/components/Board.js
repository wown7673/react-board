import React from "react";

function Board({board}){
    return (

        <div>
            <h4>{board.title}</h4>
            <span>{board.content}</span>
        </div>
    );
}

export default Board;