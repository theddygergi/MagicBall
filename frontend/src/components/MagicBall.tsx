import React from "react";
import { MagicBallProps } from "../types";
import "./MagicBall.css";

const MagicBall: React.FC<MagicBallProps> = ({ answer }) => {
  return (
    <div id="magic-8-ball">
      <div id="ball">
        <div id="window">
          <p id="answer">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default MagicBall;
