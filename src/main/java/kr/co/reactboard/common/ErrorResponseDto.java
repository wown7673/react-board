package kr.co.reactboard.common;

import lombok.*;
import org.springframework.http.HttpStatus;

import java.util.List;
import java.util.Map;

@Getter
@Setter
public class ErrorResponseDto {
    private int statusCode;
    private HttpStatus status;
    private String errCode;
    private String message;
    private List<Map<String, String>> failValidate;

    public ErrorResponseDto(ErrorCode errorCode){
        this.statusCode = errorCode.getStatusCode();
        this.status = errorCode.getStatus();
        this.errCode = errorCode.getErrCode();
        this.message = errorCode.getMessage();
    }
}
