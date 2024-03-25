import styled, {keyframes} from "styled-components";
import {useEffect, useMemo, useState} from "react";

import Button from "../../components/common/Buttons/Button";

import getRandomNumbers, {knuthShuffle}  from 'function/lottery';
import FloatingButton from "../../components/common/Buttons/FloatingButton";
import ImageNum from "../../components/lottery/ImageNum";
import LottoNumberPicker from "../../components/lottery/LottoNumberPicker";


const Main = styled.main`
  //border: solid 1px blue;
`;

const TextCenter = styled.div`
  text-align: center;
`;

const ChildDivCenter = styled.div`
  display: flex;
  justify-content: center;
`

const LottoNumberPickerBox = styled(ChildDivCenter)`
  margin : 10px auto;
`;

const RandomBtnBox = styled(ChildDivCenter)`
  margin-bottom: 10px;
`;

const EtcBtnBox = styled(ChildDivCenter)`
  gap: 10px;
`;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  gap: 10px;
`;

export default function RandomPickPage() {
    const [pickNum, setPickNum] = useState(Array.from({length:45},(v,i)=>0));
    const [isExclusionMode , setExclusionMode] = useState(false);

    function randomLottoNumber(){
        // 선택한 번호 개수
        const selectedNumsCount = pickNum.filter(v=>v==1).length;

        // 기존값 6개 초과시 동작X
        if(selectedNumsCount >6){ return;}

        // 이미 선택한값과 제외할 번호를 각각 새로운 배열에 담음 ( 랜덤뽑기시 제외하기위해 )
        const alreadySelectedNums = [];
        const exclusionNums = [];
        pickNum.forEach((v, i) => {
            switch (v){
                case 1 :  alreadySelectedNums.push(i + 1); break;
                case 2 :  exclusionNums.push(i+1); break;
            }
        });

        let isReset = false;
        let resultArr = [];
        if(selectedNumsCount ==6){
            isReset = true;
            resultArr = getRandomNumbers([],exclusionNums);
        }else{
            resultArr = getRandomNumbers(alreadySelectedNums, exclusionNums);
        }

        setPickNum((pre)=>{
            let newArr = pre;
            if(isReset){
                newArr = pre.map((v, i) => {
                    if(v===2) return 2;
                    return 0;
                });
                //newArr = Array.from({length:45},(v,i)=>0);
            }
            resultArr.forEach((v,i)=>{ newArr[v-1] =1; });

            return [...newArr];
        });
    }


    function reset(){
        setPickNum(Array.from({length:45}, v=>0));
        setExclusionMode(false);
    }



    return (
        <Main>
            <br/>
            <TextCenter>랜덤번호 생성</TextCenter>

            <LottoNumberPickerBox>
                <LottoNumberPicker
                    pickNum={pickNum}
                    setPickNum={setPickNum}
                    isExclusionMode={isExclusionMode}
                />
            </LottoNumberPickerBox>
            <RandomBtnBox>
                {isExclusionMode ?
                    (<Button width="185px" onClick={()=>randomLottoNumber({pickNum, setPickNum})} disabled>랜덤추천</Button>)
                    :
                    (<Button width="185px" onClick={()=>randomLottoNumber({pickNum, setPickNum})}>랜덤추천</Button>)
                }
            </RandomBtnBox>
            <EtcBtnBox>
                <Button width="90px" onClick={reset}>초기화</Button>
                {isExclusionMode ? <FloatingButton width="185px" onClick={()=>setExclusionMode(false)}>선택완료</FloatingButton>: <Button width="185px" onClick={()=>setExclusionMode(true)}>제외할 번호 선택</Button>}
            </EtcBtnBox>

            {pickNum.filter(v => v===1).length != 0  ? (<CenterDiv>
                <span>선택한 번호</span>&nbsp;
                <div>{pickNum.map((value,index)=> value==1 ? (<ImageNum key={index} num={index+1}/>) : null)}</div>
            </CenterDiv>) : null}

            <br/>
        </Main>
    );
}