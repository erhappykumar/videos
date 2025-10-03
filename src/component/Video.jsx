import { Fragment } from "react"
import { useState } from "react";

function Video({channel,title,time,url,keys}) {
  // function handleClick(e) {console.log("Clicked on",e.target.className),(e.target).style.color="red";}

 const [number, setNumber] = useState(0)
function count() {setNumber(number + 10)}
  return (
     <div>
      <h1>{number}</h1>
      <button onClick={count}>counter</button>
     {/* <div className="raper">
     <iframe src={url} className="img" frameborder="0" key={keys}></iframe></div><br/><button className="button"><a href={url}>Subscribe</a></button><br/> channel {channel}<br/><button className="btn" onClick={handleClick}>addbtn</button>title {title}<br/>Time {time} */}
     </div>

  )
}

export default Video;