import {useEffect, useState} from "react";
import Modal from '../components/Modal';
import {useNavigate} from "react-router-dom";
import axios from "axios";


export default function BoardWrite(){
    const navigate = useNavigate();

    const [board, setBoard] = useState({
        title :'',
        content :'',
        author:'jjj'
    });

    const [error, setError] = useState({
        title :'',
        content:''
    });

    // 최초 저장 이후 vlid체크모드가 활성화됨
    // 그래야 이후 valid실패한 error 실시간으로 표시/제거 가능
    const [validMode, setValidMode] = useState(false);

    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    function onChange(ev){
        console.log("필드값 체인지");
        const {name, value} = ev.target;
        setBoard({
            ...board,
            [name] :value
        });

    }
    function validate(){
        console.log("유효성검사 validate()함수 실행");
        const tempError ={
            title:'',
            content:''
        };

        if(board.title.length<10 || board.title.length>15){
            tempError.title = "제목은 10자이상 15자이하이어야 합니다.";
        }else{
            delete tempError.title;
        }

        if(!board.content){
            tempError.content = "내용이 입력되어야 합니다.";
        }else{
            delete tempError.content;
        }

        return tempError;
    }

    // 저장 버튼 로직
    function saveBoard(){
        console.log("저장버튼");
        setValidMode(true);
        if(!Object.keys(error).length==0){
            console.log("유효성검사실패");
            return;
        }

        axios.post("//localhost:8989/board/board", board)
            .then(value => {
                    alert("등록되었습니다");
            }).catch(reason => {
            console.log("실패");
        })
    }

    // 취소버튼 -> 확인모달 오픈
    function handleCancel(){
        // 글이 입력되었을때만
        if(board.title || board.content){
            setIsConfirmOpen(true);
        }
    }

    // modal 클로즈
    function handleModalOpen(){
        setIsConfirmOpen(false);
    }

    // modal -> 작성취소
    function handleCancleWrite(){
        navigate(-1);
    }

    // 입력값이 바뀔때마다 유효성 검사
    useEffect(() => {
        setError(validate());
    }, [board]);


    return (
        <div>
            <div>
                <span>제목</span>
                <input type='text' name='title' value={board.title} onChange={onChange} />
                {validMode && error.title && (<span>{error.title}</span>)}
            </div>
            <div>
                <span>내용</span>
                {validMode && error.content && (<span>{error.content}</span>)}
                <textarea
                    name='content'
                    cols='30'
                    rows='10'
                    value={board.content}
                    onChange={onChange}
                />
            </div>
            <input type='hidden' name='author' value={board.author}/>


                {isConfirmOpen && <Modal onModalOpen={handleModalOpen} onCancleWrite={handleCancleWrite}/>}

            <div>
                <button onClick={saveBoard}>저장</button>
                <button onClick={handleCancel}>취소</button>
            </div>
        </div>
    );
}

