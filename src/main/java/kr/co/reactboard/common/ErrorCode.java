package kr.co.reactboard.common;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;


@Getter
@AllArgsConstructor
public enum ErrorCode {
    // Httpstatus.valueOf(400) => HttpStatus.BAD_REQUEST 라는 HTTP객체를 얻을수있지만 공부 및 명시적으로 여기서 한눈에 알아볼수있기에 둘다 정의함

    // 400
    INVALID_REQUEST(400, HttpStatus.BAD_REQUEST, "COMMON-ERR-400","잘못된 요청입니다."),

    VALID_FAIL(400, HttpStatus.BAD_REQUEST, "COMMON-VALID-400", "유효성 검사 실패"),

    // 404
    USER_NOT_FOUND(404, HttpStatus.NOT_FOUND,"MEMBER-ERR-404", "해당하는 정보의 사용자를 찾을 수 없습니다."),

    // 500
    INTERNAL_SERVER_ERROR(500, HttpStatus.INTERNAL_SERVER_ERROR, "COMMON-ERR-500", "서버 에러입니다. 관리자에게 문의하세요"),
    ;

    private int statusCode;
    private HttpStatus status;
    private String errCode;
    private String message;
}
