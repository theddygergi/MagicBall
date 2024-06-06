import React, { useState } from "react";
import { QuestionInputProps } from "../types";
import "./QuestionInput.css";

const QuestionInput: React.FC<QuestionInputProps> = ({ onAskQuestion }) => {
  const [question, setQuestion] = useState("");
  const handleAskClick = () => {
    if (question.trim()) {
      onAskQuestion(question.trim());
      setQuestion("");
    }
  };

  return (
    <div id="question-section">
      <input
        type="text"
        id="question-input"
        placeholder="Enter your question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button id="ask-button" onClick={handleAskClick}>
        Ask
      </button>
    </div>
  );
};

export default QuestionInput;
