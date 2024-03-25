package kr.co.reactboard.lottery.dto;


import lombok.Data;

@Data
public class Lottery {
    private int id , turn_num;
    private String num1, num2, num3, num4, num5, num6, num_bo;
}
