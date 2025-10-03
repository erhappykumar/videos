import { Fragment } from "react"
import { useState } from "react";

function Video({channel,title,time,url,keys}) {
 function handleClick(e) {console.log("Clicked on",e.target.className),(e.target).style.color="red";}


  return (
     <div>
      
      
     <div className="raper"><br />
     <iframe src={url} className="img" frameborder="0" key={keys}></iframe></div><br/><button className="button"><a href={url}>Subscribe</a></button><br/> Channel {channel}<br/>Title {title}<br/>Time {time}
     </div>

  )
}

export default Video;