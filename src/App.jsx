import { useState } from 'react'
import './App.css'
import Signup from './component/Signup'
import Comments from './component/Comments'
import { data } from './assets/data'
function App() {
  const [count, setCount] = useState(0)
  const [comments, setComments] = useState(data)
  const [reply, setReply] = useState("")

  function handleAddReply(data) {
    if (data.id === 1) {
      data.reply.push({
        id: new Date().getTime(),
        text: reply,
        reply: []
      })
    } else {
      data.reply.map((ele) => addComments(ele.id))
    }
    setReply("")
    console.log(data)
  }

  return (
    <>
      <div className="container">
        {/* <Signup/> */}
        <div className="input">
          <input type="text" name="text" id="text" placeholder='enter your thought ' onChange={(e) => setReply(e.target.value)} value={reply} /> <button onClick={() => handleAddReply(comments)}>Add Comment</button>
        </div>
        <Comments data={comments} />

      </div>
    </>
  )
}

export default App
