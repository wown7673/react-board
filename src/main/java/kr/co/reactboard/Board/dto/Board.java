package kr.co.reactboard.Board.dto;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.Date;


@Data
@Builder
public class Board {
    private Integer id;

    @Size(min=10, max=15, message = "제목의 길이는 10이상 15이하이어야 합니다.")
    @NotBlank(message = "제목을 입력하세요")
    private String title;
    private String content;
    private String author;

    @JsonFormat(pattern ="yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime creaDate;

    @JsonFormat(pattern ="yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime modeDate;

    /*@DateTimeFormat(pattern ="yyyy-MM-dd HH:mm:ss")
    private Date creaDate;

    @DateTimeFormat(pattern ="yyyy-MM-dd HH:mm:ss")
    private Date modeDate;*/
}
