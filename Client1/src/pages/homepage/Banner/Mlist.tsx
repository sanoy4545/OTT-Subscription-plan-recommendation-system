import React from "react";
import "./mliststyle.css";
function Mlist(props: any) {
  return (
    <div>
      <div className="movielist">
        <div
          className="movieicon"
          style={{
            backgroundImage: `url(${props.imageIcon})`,
            marginLeft: props.left,
          }}
        >
          <div className="moviedescription"></div>
        </div>
      </div>
    </div>
  );
}

export default Mlist;
