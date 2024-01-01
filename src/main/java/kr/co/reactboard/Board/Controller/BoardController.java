package kr.co.reactboard.Board.Controller;

import ch.qos.logback.core.spi.ErrorCodes;
import com.mysql.cj.log.Log;
import com.mysql.cj.x.protobuf.Mysqlx;
import kr.co.reactboard.Board.Service.BoardService;
import kr.co.reactboard.Board.dto.Board;
import kr.co.reactboard.common.CustomException;
import kr.co.reactboard.common.ErrorCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.mvc.support.DefaultHandlerExceptionResolver;

import java.security.InvalidParameterException;
import java.util.List;

@RestController
@RequestMapping("/board")
public class BoardController {
    private final BoardService boardService;

    @Autowired
    public BoardController( BoardService boardService ){
        System.out.println("커밋테스트");
        this.boardService = boardService;
    }

    @GetMapping("/boards")
    public ResponseEntity<List<Board>> getBoardList(){
        List<Board> boardList = boardService.getBoardList();

        return ResponseEntity.ok(boardList);
    }

    @GetMapping("/board/{id}")
    public ResponseEntity<Board> getBoard( @PathVariable int id){
        Board board = boardService.getBoard(id);
        if(board==null){
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        }
        return ResponseEntity.ok(board);
    }

    @PostMapping("/board")
    public ResponseEntity<String> addBoard(@Validated Board board){
        return ResponseEntity.ok().build();
    }
}

