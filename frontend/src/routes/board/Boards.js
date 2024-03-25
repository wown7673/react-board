import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

function Boards() {
    const navigate = useNavigate();
    const [boards, setBoards] = useState([]);

    // 페이징관련
    const [paging, setPaging] = useState({
        page: '1',
        pageSize: '4',
        rowSize: '5',
        startRow: '',
        endRow: '',
        startPage: '',
        endPage: '',
        totalBoardCount: '',
        totalPageCount: '',
    });

    const [search, setSearch] = useState({
        page : '1',
        searchCondition :'',
        searchValue :''
    });

    async function getBoards() {
        // 객체 -> 쿼리스트링으로
        let queryString = new URLSearchParams(search).toString();


        // 만약 default값은 서버에 등록되어있는데 클라이언트에서 default값을 수정하려면 아래를 추가
        queryString += "&pageSize=3&rowSize=5";
        console.log("전송될 쿼리스트링",queryString);
        const response = await axios.get(`//localhost:8989/board/boards?${queryString}`);

        // 게시판목록 데이터
        setBoards(response.data.data);
        console.log("응답데이터",response.data);

        // 페이징 데이터
        setPaging({
            ...response.data,
        });
    }

    useEffect(() => {
        // 초기 1페이지
       getBoards();
    }, [search]);

    function moveToWrite() {
        navigate('/board/write');
    }

    function handlePageClick(e){
        console.log("페이지버튼클릭",e.target.value);
        setSearch({...search, page : e.target.value});
        //getBoards();
    }

    function pageRender(){
        const pageCnt = paging.endPage - paging.startPage;
        const result = [];

        if(paging.startPage > 1){
            result.push(<button key={"previous"} onClick={handlePageClick} value={paging.startPage-1}>이전</button>);
        }

        for(let i=paging.startPage; i<=paging.endPage; i++){
            result.push(<button key={i} onClick={handlePageClick} value={i}>{i}</button>);
        }

        if(paging.endPage < paging.totalPageCount){
            result.push(<button key={"next"} onClick={handlePageClick} value={paging.endPage+1}>다음</button>);
        }
        return result;
    }

    return (
        <div>
            <h3>게시판 목록</h3>
            <ul>
                {boards.map((board,index) => (
                        <li key={index}>
                            <Link to={`/board/${board.id}`}> {board.title} </Link>
                        </li>
                    )
                )}
            </ul>
            <div>
                {pageRender()}
            </div>
            <div>
                <button onClick={moveToWrite}>새글</button>
            </div>
        </div>
    );
}

export default Boards;