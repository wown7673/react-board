import styled from "styled-components";
import Button from "../../components/common/Buttons/Button";
import {COLOR} from "../../utils/color";
import ImageNum from "../../components/lottery/ImageNum";
import axios, {get} from "axios";
import {useEffect, useRef, useState} from "react";


const Main = styled.main`
  width:600px;
  margin: 0 auto;
  
  border : solid yellow 1px;
`;


const SelectRoundHeight = "30px";
const SelectRound = styled.section`
  display: flex;
  justify-content: right;
  gap:5px;
  
  height: ${SelectRoundHeight};
  line-height: ${SelectRoundHeight};
  padding : 5px;
  margin-right: 30px;
  
  span{
    vertical-align: center;
  }
  
  select{
    width : 80px;
    padding-left: 10px;
  }
`;

const WinResult = styled.section`
  border : solid 1px ${COLOR.borderColor};
  text-align: center;
`;





async function fetchWinningNumbers({round, setNums}) {
    try {
        const response = await axios.get(`http://localhost:8989/lottery/${round}`);
        const data = response.data;
        setNums({turn_num:data.turn_num, num1:data.num1, num2:data.num2, num3:data.num3, num4:data.num4, num5:data.num5, num6:data.num6 , num_bo:data.num_bo});
        //setNums(response.data);

    } catch (error) {
        console.log(error);
    }
}


async function fetchRoundCount({setRoundCount, setNums}) {
    try {
        const response = await axios.get("http://localhost:8989/lottery/roundCount");
        const round = response.data;
        setRoundCount(round);

        await fetchWinningNumbers({round, setNums});
    }catch (err){
        console.log(err);
    }
}



function selectWinNums(age){
    return 1;
}


function RoundWinNumsPage(){
    const [nums, setNums] = useState([]);
    const [roundCount, setRoundCount ] = useState();
    const selectRef = useRef(null);

    const [test, setTest ] = useState(0);

    const RenderOptions = ()=>{
        console.log(roundCount);
        const arr = [];
        for(let i=roundCount; i>=1; i--){
            if(i==roundCount){
                arr.push(<option key={i} value={i}>{i}</option>);
            }else{
               arr.push(<option key={i} value={i}>{i}</option>);
            }
        }
        return arr;
    }


    const selectWinNums = async () => {
        let round = selectRef.current.value;
        await fetchWinningNumbers({round, setNums});

    }


    useEffect(() => {
        fetchRoundCount({setRoundCount,  setNums});
    }, []);





    return (
        <Main>
            <SelectRound>
                <span>{roundCount}</span>
                <span>회차 선택</span>
                <select defaultValue={roundCount} ref={selectRef}>
                    {RenderOptions()}
                </select>
                <Button $py="0" onClick={selectWinNums}>조회</Button>
            </SelectRound>
            <WinResult>
                { nums.length !=0 &&
                    <>
                        <span>{nums.turn_num}회</span>
                        &nbsp;
                        <ImageNum key={nums.num1} num={nums.num1}/>
                        <ImageNum key={nums.num2} num={nums.num2}/>
                        <ImageNum key={nums.num3} num={nums.num3}/>
                        <ImageNum key={nums.num4} num={nums.num4}/>
                        <ImageNum key={nums.num5} num={nums.num5}/>
                        <ImageNum key={nums.num6} num={nums.num6}/>
                        <ImageNum key={nums.num_bo} num={nums.num_bo}/>
                    </>
                 }
            </WinResult>
        </Main>
    );
}

export default RoundWinNumsPage;