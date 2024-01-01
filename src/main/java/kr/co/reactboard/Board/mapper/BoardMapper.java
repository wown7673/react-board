package kr.co.reactboard.Board.mapper;

import kr.co.reactboard.Board.dto.Board;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
public interface BoardMapper {
    List<Board> getBoardList();

    Board getBoard(int id);
}
