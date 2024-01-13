package kr.co.reactboard.common;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.*;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(CustomException.class)
    protected ResponseEntity<ErrorResponseDto> handleCustomException(CustomException ex){
        ErrorResponseDto errorResponseDto = new ErrorResponseDto(ex.getErrorCode());

        return ResponseEntity.status(ex.getErrorCode().getStatus())
                .body(errorResponseDto);
    }

    // 유효성 검사 실패
    @ExceptionHandler(MethodArgumentNotValidException.class)
    protected ResponseEntity<ErrorResponseDto> handleValidatedException( MethodArgumentNotValidException ex){
        ErrorResponseDto errorResponseDto = new ErrorResponseDto(ErrorCode.VALID_FAIL);
        BindingResult bindingResult = ex.getBindingResult();

        // 유효성 실패된 필드와 메시지를 map에 담아 리스트로 반환
        List<Map<String, String>> faildValid = new ArrayList<>();

        for( FieldError error : bindingResult.getFieldErrors()){
            Map<String, String> map = new HashMap();
            map.put(error.getField(), error.getDefaultMessage());
            faildValid.add(map);
        }
        errorResponseDto.setFailValidate(faildValid);
        return ResponseEntity.status(errorResponseDto.getStatus()).body(errorResponseDto);
    }

    @ExceptionHandler(Exception.class)
    protected ResponseEntity<ErrorResponseDto> handleException(Exception ex){
        System.out.println("글로벌 오류 진짜 내용");
        System.out.println(ex);
        System.out.println(ex.getMessage());
        System.out.println(ex.getCause());
        ErrorCode internalServerError = ErrorCode.INTERNAL_SERVER_ERROR;
        ErrorResponseDto errorResponseDto = new ErrorResponseDto(internalServerError);
        return ResponseEntity.status(internalServerError.getStatusCode())
                .body(errorResponseDto);
    }

}
