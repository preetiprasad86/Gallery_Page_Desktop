import React from "react";
import "./Group89.css";

function Group89(props) {
  const { line4, line5, line6, line7, group, line8 } = props;

  return (
    <div className="group-89">
      <img className="line-4" src={line4} />
      <img className="line" src={line5} />
      <img className="line" src={line6} />
      <img className="line" src={line7} />
      <div className="bigrid-3x2-gap">
        <img
          className="vector"
          src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-104@2x.svg"
        />
      </div>
      <div className="bigrid-3x2-gap-1">
        <div className="group" style={{ backgroundImage: `url(${group})` }}></div>
      </div>
      <img className="line-8" src={line8} />
    </div>
  );
}

export default Group89;
