import React, { useState } from 'react'

const Comments = ({data}) => {
  const [showInput,setShowInput]=useState(false);
  const [reply,setReply]=useState("")

  function handleShowInput(){
    setShowInput(true);
  }
  function handleAddReply(id){
    console.log(id)
    addComments(id)
    setShowInput(false);
  }
  function addComments(id){

    if(data.id===id){
      data.reply.push({
        id:new Date().getTime(),
        text:reply,
        reply:[]
      })
    }else{
      data.reply.map((ele)=>addComments(ele.id))
    }
      setReply("")
      console.log(data)
  }
   
  return (
    <>
    {data.text?<div id='bot'><div >{data.text}</div>
    {showInput?"":<button onClick={handleShowInput}>reply</button>}
    {showInput?<div className="input">
            <input type="text" name="text" id="text" placeholder='enter your thought' value={reply} onChange={(e)=>setReply(e.target.value)}/>
            <button onClick={()=>handleAddReply(data.id)}>AddReply</button>
          </div>:""}
    </div>
    :""}
    <div style={{paddingLeft:15}}>
    {
      data.reply.length>0 && data.reply.map((ele)=><Comments data={ele} key={ele.id}/>)               
    }
    </div>
    </>

  )}  
export default Comments