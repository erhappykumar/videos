import { Fragment } from "react";
import { useState } from "react";

function Video({ channel, title, time, url, keys, Lazy, Wait, wait }) {
  const [xstate, setXstate] = useState(0);
  //  function handleClick(e) {console.log("Clicked on",e.target.className),(e.target).style.color="red";}

  function mouseover(e) {
    console.log(Number(e.target.id),e.target.id);
    if (typeof Number(e.target.id) === "number"&&e.target.id!="" && wait == 0) {
      Lazy(Number(Number(e.target.id))); Wait(1);
      setTimeout(() => {
        Wait(0);
      }, 2000);
    }

    setXstate(Math.random());
  }
  return (
    
      <div className="raper" onTouchStart={mouseover} onMouseOver={mouseover} id={keys}>
        <br />
        <iframe src={url} className="img" key={keys}></iframe>
        <br /><br/>
        <button className="button">
          <a href={url}>Subscribe</a>
        </button>
        <br /> Channel {channel}
        <br />
        Title {title}
        <br />
        Time {time}
      </div>
   
  );
}

export default Video;
