package kr.co.reactboard.Board.Controller;

import ch.qos.logback.core.spi.ErrorCodes;
import com.mysql.cj.log.Log;
import com.mysql.cj.x.protobuf.Mysqlx;
import kr.co.reactboard.Board.Service.BoardService;
import kr.co.reactboard.Board.dto.Board;
import kr.co.reactboard.common.CustomException;
import kr.co.reactboard.common.ErrorCode;
import kr.co.reactboard.common.Pagination;
import kr.co.reactboard.common.Search;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.mvc.support.DefaultHandlerExceptionResolver;

import java.security.InvalidParameterException;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/board")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.PUT, RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.OPTIONS, RequestMethod.HEAD})
public class BoardController {
    private final BoardService boardService;

    @Autowired
    public BoardController( BoardService boardService ){
        this.boardService = boardService;
    }

    @GetMapping("/boards")
    public ResponseEntity<Pagination<Board>> getBoardList(
            @RequestParam(required=false, defaultValue = "1") int page ,
            @RequestParam(value = "rowSize",required=false,defaultValue = "10") int rowSize,
            @RequestParam( required=false,defaultValue = "10") int pageSize,
            Search search
    ){
        Pagination<Board> boardList = boardService.getBoardList(page, rowSize, pageSize , search);
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


    @PutMapping("/board/{id}")
    public ResponseEntity<Void> updateBoard(@RequestBody @Validated Board board, @PathVariable int id){
        System.out.println(board);
        System.out.println(id);
        System.out.println(LocalDateTime.now());
        board.setModeDate(LocalDateTime.now());
        boardService.updateBoard(board);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/board")
    public ResponseEntity<String> addBoard(@RequestBody @Validated Board board){
        System.out.println(LocalDateTime.now());
        board.setCreaDate(LocalDateTime.now());
        boardService.addBoard(board);

        return ResponseEntity.ok().build();

    }

    @DeleteMapping("/board/{idx}")
    public ResponseEntity<Void> deleteBoard(@PathVariable int idx){
        boardService.deleteBoard(idx);
        return ResponseEntity.ok().build();
    }

}

