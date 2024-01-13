package kr.co.reactboard.Board.Service;

import kr.co.reactboard.Board.dto.Board;
import kr.co.reactboard.Board.mapper.BoardMapper;
import kr.co.reactboard.common.Pagination;
import kr.co.reactboard.common.Search;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class BoardService {
    private final BoardMapper boardMapper;

    @Autowired
    public BoardService(BoardMapper boardMapper){
        this.boardMapper = boardMapper;
    }

    public Pagination<Board>  getBoardList(int page, int rowSize, int pageSize, Search search){
        int totalBoardCount = boardMapper.getBoardCount();
        Pagination<Board> pagination = new Pagination<>(page, rowSize, pageSize, totalBoardCount);

        Map map = new HashMap();
        map.put("startRow", pagination.getStartRow()-1);  // 쿼리인덱스가 0부터 시작해서
        map.put("rowSize", pagination.getRowsize());
        map.put("searchCondition", search.getCondition());
        map.put("searchValue", search.getValue());

        List<Board> boardList = boardMapper.getBoardList(map);
        pagination.setData(boardList);

        return pagination;
    }

    public Board getBoard(int id){
        return boardMapper.getBoard(id);
    }

    public void addBoard( Board board ){
        boardMapper.addBoard(board);
    }

    public void updateBoard( Board board ){
        boardMapper.updateBoard(board);
    }

    public void deleteBoard( int idx ){
        boardMapper.deleteBoard(idx);
    }
}
