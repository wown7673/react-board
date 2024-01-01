package kr.co.reactboard.Board.dto;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Board {
    private int id;

    @Size(min=10, max=15, message = "제목의 길이는 10이상 15이하이어야 합니다.")
    @NotBlank(message = "제목을 입력하세요")
    private String title;
    private String content;
}
