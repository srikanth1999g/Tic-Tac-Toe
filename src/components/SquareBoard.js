

import react, { useEffect, useState } from "react";


const SquareBoard=()=>{

    const [BoardArray,SetBoardArray]= useState(Array(3).fill(Array(3).fill(null)))
    const list=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    const [GameStatus,SetGameStatus]=useState(false);
    const [winner,SetWinner]=useState('');
    const [TicValue,SettickValue]=useState('X');
   
    const liListener=document.getElementById("li-ele");
    console.log(liListener);
    useEffect(()=>{
        let boardArr=new Array(9).fill('');
        for(let k=0;k<list.length;k++){
            let [a,b,c]=list[k];
            
            
            let count=0;
            for( let i=0;i<BoardArray.length;i++){
                for(let j=0;j<BoardArray[i].length;j++){
                    let x=[...BoardArray]
                    x[i]=[...BoardArray[i]]
                   boardArr[count]=x[j][i]
                   count++;
                }
            }
            
           
            
            if(boardArr[a]=='X'&& boardArr[b]=='X' && boardArr[c]=="X"){
                SetGameStatus(true)
                SetWinner('X');
                
               

                
            }
            else if(boardArr[a]=='O'&& boardArr[b]=='O' && boardArr[c]=="O"){
               SetGameStatus(true);
              SetWinner('O')
             

              


            }
            
            
         
        }
       
       
    },[TicValue])
   

    const onClickedEventHandler=(i,j)=>{
       
       
        if(BoardArray[i][j]==null){
            
            if(TicValue=='X'){
                SetBoardArray(prevBoardArray=>{
                    let board=[...prevBoardArray]
                    
                    board[i]=[...board[i]]
                    board[i][j]='X';
                   
                   
                    return board;
                })
              
             
                SettickValue('O')
                
               
                
            }
            else if(TicValue=='O'){
                SetBoardArray(prevBoardArray=>{
                    let board=[...prevBoardArray]
                    board[i]=[...board[i]]
                    board[i][j]='O';
                   
                    return board;
                })
                SettickValue('X');
                

            }
           
           
        }
    }
    
    const renderedBoard= BoardArray.map((item,index)=>{
        //
        return (<div key={index}>
            {item.map((SubItem,sInd)=>{
              return  <button disabled={GameStatus} onClick={()=>{onClickedEventHandler(index,sInd)}} key={sInd}>{SubItem}</button>
            })}
        </div>)

    })
    
     const onClickStartGame=(e)=>{
         SettickValue('X')
             SetWinner('')
             SetGameStatus(false)
          SetBoardArray(prevBoardArray=>{
             let board=[[null,null,null],[null,null,null],[null,null,null]];
              return board;
          })
        
     }
     console.log(GameStatus);
    return (<div>
         <div className="final-board" >
        {renderedBoard}</div>
   
    <div  ><button onClick={(e)=>onClickStartGame(e)} >Go to Game Start</button></div>
    <div> Next move by player:{TicValue}</div>
    <div><p>Winner is:{winner}</p></div>

    </div>
    )
}

export default SquareBoard;