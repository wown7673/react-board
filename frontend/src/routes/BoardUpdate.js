import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios, {Axios} from "axios";
import Modal from "../components/Modal";

const BoardUpdate = ()=>{
    const {idx} = useParams();
    const [isModalOpen , setModalOpen] = useState(false);
    const [isModify, setModify] = useState(false);

    const [board, setBoard] = useState({
        id  :'',
        title :'',
        content :''
    });

    const navi = useNavigate();

    const getBoard = async () => {
        const response = await axios({
            url: `http://localhost:8989/board/board/${idx}`,
            method: "get",
        });
        console.log(response.data);
        setBoard(response.data);
    };

    function handleChange(e) {
        console.log("수정함");
        setModify(true);
        const {name, value} = e.target;
        setBoard({
            ...board,
            [name] : value
        })
    }

    async function handleSave() {
        if (isModify) {
            const response = await axios({
                url : `http://localhost:8989/board/board/${board.id}`,
                method : "put",
                data : board,
            });
            navi(`/board/board/${board.id}`);
        } else {
            alert("바뀐내용없음");
        }
    }

    function onModalOpen(){
        setModalOpen(false);
    }

    function onCancleWrite(){
        setModalOpen(false);
        navi(-1);
    }

    useEffect(  () => {
        getBoard();
    }, []);


    function handleUpdateCancle() {
        setModalOpen(true);
    }

    return (
        <>
            <form>
                <input
                    name="title"
                    value={board.title}
                    onChange={handleChange}
                />
                <br/>
                <textarea
                    name="content"
                    cols='30'
                    rows='10'
                    value={board.content}
                    onChange={handleChange}
                />
            </form>
            <div>
                <button onClick={handleSave}>저장</button>
                <button onClick={handleUpdateCancle}>취소</button>
            </div>
            {isModalOpen && (<Modal onModalOpen={onModalOpen} onCancleWrite={onCancleWrite}/>) }
        </>
    );
}


export default BoardUpdate;