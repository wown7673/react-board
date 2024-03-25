package kr.co.reactboard.lottery.service;

import kr.co.reactboard.lottery.dto.Lottery;
import kr.co.reactboard.lottery.mapper.LotteryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LotteryService {

    private LotteryMapper lotteryMapper;

    @Autowired
    public LotteryService( LotteryMapper lotteryMapper ){
        this.lotteryMapper = lotteryMapper;
    }


    public Lottery getLotteryNumber( String round ){
        return lotteryMapper.getLotteryNumber(round);
    }

    public int getRoundCount(){
        return lotteryMapper.getRoundCount();
    }
}
