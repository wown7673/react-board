package kr.co.reactboard.lottery.mapper;

import kr.co.reactboard.lottery.dto.Lottery;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LotteryMapper {
    public Lottery getLotteryNumber( String round );

    int getRoundCount();
}
