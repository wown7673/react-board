import styled, {css, keyframes} from "styled-components";


const borderPulse = keyframes`
      0% {
        //opacity 를 사용하면 자식들도 적용되므로 rgba의 4번째 옵션인 투명도를 이용하면 자식에게 전파X
        border-color: rgba(255, 0, 0, 1);
      }
      50% {
        border-color: rgba(255, 0, 0, 0.3);
      }
      100% {
        border-color: rgba(255, 0, 0, 1);
      }
`;

const animationRule = css`
  ${borderPulse} 1.5s infinite;
`


const LotteryInputPickerTable = styled.table`
  border: solid 3px ${props => props.$isExclusionMode ? 'rgba(255, 0, 0, 0.3)' : 'red'};
  animation: ${props => props.$isExclusionMode ? animationRule : 'none'};
    
  input[type='checkbox']{
    display: none;
  }

  input[type='checkbox']+label{
    display: inline-block;
    width:20px;
    height: 25px;
    border: solid 1px red;
    cursor:pointer;
    position: relative;
    
    margin : 2.5px 2px;
    
    font-size: 12px;
    color:red;
    text-align: center;
    line-height: 25px;
    
    user-select: none;  // 해당 요소 드래그 불가능하게 설정...( 이유는 잘못클릭시 드래그가되버려서 )
  }
  
  input[type='checkbox']+label::before{
    content: '';
    background-color: white;
    position: absolute;
    left: -1px;
    top:20%;
    bottom: 20%;
    width: 1px;
  }

  input[type='checkbox']:checked+label::before{
    //background-color: red;
  }
  
  input[type='checkbox']+label::after{
    content: '';
    background-color: white;
    position: absolute;
    right: -1px;
    top:20%;
    bottom: 20%;
    width: 1px;
  }
  
  input[type='checkbox']:checked+label{
    //background-color: #555555;
    width:20px;
    height: 25px;
    border : none;
    color:white;
    background-color: blue;
  }
`;


export default function LottoNumberPicker({pickNum, setPickNum , isExclusionMode}) {

    function toggleCheckBox(num,e){
        // 제외모드일 경우
        if(isExclusionMode){
            setPickNum((pre)=>{
                pre[num-1] = e.target.value!=2 ? 2 : 0;
                return [...pre];    // 새로운 배열을 반환 안 하면 재랜더링안됨!
            });
            return;
        }


        if(pickNum.filter(v=>v==1).length>=6 && (e.target.value ==0) ){
            alert("6개만 선택가능합니다");
            return;
        }
        setPickNum((pre)=>{
            pre[num-1] = e.target.value==0 ? 1 : 0;
            return [...pre];    // 새로운 배열을 반환 안 하면 재랜더링안됨!
        });
    }

    // 로또용지 렌더링
    const numArr = Array.from({ length: 45 }, (_, idx) => idx + 1);
    const result = [];
    for (let i = 0; i < numArr.length; i++) {
        if (i % 7 === 0) {
            // 7개의 <td>를 하나의 <tr>로 묶음
            const tdElements = [];
            for (let j = 0; j < 7; j++) {
                const currentIndex = i + j;
                if(currentIndex>=45) break;
                tdElements.push(
                    <td key={currentIndex}>
                        <input type={"checkbox"}
                               id={`num${numArr[currentIndex]}`}
                               value={pickNum[currentIndex]}
                               checked={pickNum[currentIndex]==0 ? false : true}
                               onChange={(e)=>toggleCheckBox(numArr[currentIndex],e)}
                        />
                        { pickNum[currentIndex] == 2 ?
                            <label style={{backgroundColor:'#555555', opacity:'0.2'}} htmlFor={`num${numArr[currentIndex]}`}>
                                {numArr[currentIndex]}
                            </label>
                            :
                            <label htmlFor={`num${numArr[currentIndex]}`}>
                                {numArr[currentIndex]}
                            </label>
                        }
                    </td>
                );
            }
            result.push(<tr key={`row${i / 7 + 1}`}>{tdElements}</tr>);
        }
    }

    return (
            <LotteryInputPickerTable $isExclusionMode={isExclusionMode}>
                <thead></thead>
                <tbody>{result}</tbody>
            </LotteryInputPickerTable>
    );
}
