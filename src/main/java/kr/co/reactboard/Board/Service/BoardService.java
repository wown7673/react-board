package kr.co.reactboard.Board.Service;

import kr.co.reactboard.Board.dto.Board;
import kr.co.reactboard.Board.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {
    private final BoardMapper boardMapper;

    @Autowired
    public BoardService(BoardMapper boardMapper){
        this.boardMapper = boardMapper;
    }

    public List<Board> getBoardList(){
        return boardMapper.getBoardList();
    }

    public Board getBoard(int id){
        return boardMapper.getBoard(id);
    }
}
