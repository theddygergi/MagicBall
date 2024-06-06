import React from "react";
import { HistortListProps } from "../types";
import './HistoryBall.css';

const HistoryList: React.FC<HistortListProps> = ({ history }) => {
  return (
    <div id="history-section">
      <h1><span>Previous Questions</span></h1>
      <ul id="history-list">
        {history.map((entry, index)=> (
          <li key={index}>Q: {entry.question} - A: {entry.answer}</li>
        ))}
      </ul>
    </div>
  )
};

export default HistoryList;
