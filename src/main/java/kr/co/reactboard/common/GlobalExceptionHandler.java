package kr.co.reactboard.common;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(CustomException.class)
    protected ResponseEntity<ErrorResponseDto> handleCustomException(CustomException ex){
        ErrorResponseDto errorResponseDto = new ErrorResponseDto(ex.getErrorCode());

        return ResponseEntity.status(ex.getErrorCode().getStatus())
                .body(errorResponseDto);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    protected ResponseEntity<BindingResult> handleValidatedException( MethodArgumentNotValidException ex){
            BindingResult bindingResult = ex.getBindingResult();
        System.out.println(">>> "+bindingResult);
        for( FieldError error : bindingResult.getFieldErrors()){
            System.out.println("-->"+error);
        }
        return ResponseEntity.ok().body(bindingResult);
    }

    @ExceptionHandler(Exception.class)
    protected ResponseEntity<ErrorResponseDto> handleException(Exception ex){
        ErrorCode internalServerError = ErrorCode.INTERNAL_SERVER_ERROR;
        ErrorResponseDto errorResponseDto = new ErrorResponseDto(internalServerError);
        return ResponseEntity.status(internalServerError.getStatusCode())
                .body(errorResponseDto);
    }

}
