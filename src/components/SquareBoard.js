import { useEffect, useState } from "react";



const SquareBoard=()=>{
    const WinningSequence=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];
    const [boardValues,SetBoardValues]=useState([]);
    const [ticvalue,SetTicValue]=useState('');
    const [winner,SetWinner]=useState('');
    let arr=[];
    let k=0;
    const onButtonClick=(e)=>{
        if(!boardValues[e.target.id]){
            SetBoardValues(prevValue=>{
                const temp=[...prevValue];
                temp[e.target.id]=ticvalue;
                return temp;
            })
            
        }
    }
    useEffect(()=>{
        //As use Effect runs in the initial render we can set intial Player 
        ticvalue==''? SetTicValue('X'):(ticvalue=='X')?SetTicValue('O'):
        SetTicValue('X');
        //Now check whether any combination sequence is true
        for(let item of WinningSequence){
            const [a,b,c]=item;
            const board=[...boardValues];
            if(board[a]=='X'&& board[b]=='X'&& board[c]=='X'){
                SetWinner('X')
            }
            else if(board[a]=='O'&& board[b]=='O'&& board[c]=='O'){
                SetWinner('O')
            }
        }
    },[boardValues])
    for (let i=0;i<3;i++){
        let sub_arr=[]
        for(let j=0;j<3;j++){
            sub_arr.push(<li key={k} ><button disabled={winner?true:false} id={k} className="ind-btns" onClick={(e)=>{onButtonClick(e)}}>{boardValues[k]}</button></li>);
            k++;
        }
        arr.push(<ul>{sub_arr}</ul>)
    }
    return(<div>
        {arr}
        <div><h4>Next Player turn: {ticvalue}</h4></div>
        {/* winner will be displayed only after match ends */}
        <div style={winner?{display:'block'}:{display:'none'}}><h2>Hurray Winner is : {winner}</h2></div>
    </div>)
}
export default SquareBoard;