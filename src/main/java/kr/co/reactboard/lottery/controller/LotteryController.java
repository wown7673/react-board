package kr.co.reactboard.lottery.controller;

import kr.co.reactboard.lottery.dto.Lottery;
import kr.co.reactboard.lottery.service.LotteryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/lottery")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.PUT, RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.OPTIONS, RequestMethod.HEAD})
public class LotteryController {

    private int a = 2;
    private LotteryService lotteryService;


    @Autowired
    public LotteryController( LotteryService lotteryService ){
        this.lotteryService = lotteryService;
    }

    @GetMapping("/roundCount")
    public int getRoundCount(){
        return lotteryService.getRoundCount();
    }

    @GetMapping("/{round}")
    public Lottery getLotteryNumber( @PathVariable String round ){
        return lotteryService.getLotteryNumber(round);
    }
}
