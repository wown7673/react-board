package kr.co.reactboard.common;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Pagination<T> {
    // 기본 세팅값
    int page;
    int rowsize;
    int pagesize;
    int totalBoardCount;

    // row계산값
    int startRow;
    int endRow;

    // page계산값
    int startPage;
    int endPage;
    int totalPageCount;

    // 데이터
    List<T> data;

    public Pagination(int page, int rowSize, int pageSize, int totalBoardCount){
        this.page = page;
        this.rowsize = rowSize;
        this.pagesize = pageSize;
        this.totalBoardCount = totalBoardCount;

        // row계산
        startRow = (page-1)*rowSize +1;
        endRow = startRow + rowSize -1;
        if( endRow > totalBoardCount){
            endRow = totalBoardCount;
        }

        // page계산
        totalPageCount = (totalBoardCount-1)/rowsize + 1;
        startPage = page-((page-1) % pageSize);
        endPage = startPage + pageSize -1;
        if(endPage > totalPageCount){
            endPage = totalPageCount;
        }


    }
}
