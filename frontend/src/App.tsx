import React, { useEffect, useState } from "react";
import { QuestionAnswer } from "./types";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { onValue, push, ref } from "firebase/database";
import { database } from "./firebase";
import MagicBall from "./components/MagicBall";
import QuestionInput from "./components/QuestionInput";
import HistoryList from "./components/HistoryBall";
import Login from "./components/Login";
import Logout from "./components/Logout";
import "./App.css";

const answers = [
  "Yes",
  "No",
  "Maybe",
  "Ask again later",
  "Definitely",
  "Absolutely not",
  "Probably",
  "I don't think so",
];
const App: React.FC = () => {
  const [currentAnswer, setCurrentAnswer] = useState("8");
  const [history, setHistory] = useState<QuestionAnswer[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    if (user) {
      const userHistoryRef = ref(database, `users/${user.uid}/questions`);
      onValue(userHistoryRef, (snapshot) => {
        const historyData: QuestionAnswer[] = [];
        snapshot.forEach((childSnapshot) => {
          historyData.push(childSnapshot.val() as QuestionAnswer);
        });
        setHistory(historyData);
      });
    }
  }, [user]);

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
  };

  const handleAskQuestion = (question: string) => {
    const answer = getRandomAnswer();
    setCurrentAnswer(answer);

    if (user) {
      const newEntry: QuestionAnswer = {
        question: question,
        answer: answer,
        timestamp: Date.now(),
      };

      const userQuestionsRef = ref(database, `users/${user.uid}/questions`);
      push(userQuestionsRef, newEntry);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Magic 8 Ball</h1>
        <p>Ask a question and discover your fate!</p>
      </header>
      <main>
        {user ? (
          <>
            <MagicBall answer={currentAnswer} />
            <QuestionInput onAskQuestion={handleAskQuestion} />
            <HistoryList history={history} />
            <Logout />
          </>
        ) : (
          <Login />
        )}
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Magic 8 Ball</p>
      </footer>
    </div>
  );
};

export default App;
