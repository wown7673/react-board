package kr.co.reactboard.Board.mapper;

import kr.co.reactboard.Board.dto.Board;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Mapper
public interface BoardMapper {
    List<Board> getBoardList( Map map);

    Board getBoard(int id);

    void addBoard( Board board );

    void updateBoard( Board board );

    void deleteBoard( int idx );

    int getBoardCount();
}
