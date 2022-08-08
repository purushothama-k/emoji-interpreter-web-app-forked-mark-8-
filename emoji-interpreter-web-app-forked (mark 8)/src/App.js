import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");

  const inputHandler = function (event) {
    var userInput = event.target.value;

    var userInputMatch = emojipack[userInput];

    if (userInputMatch === undefined) {
      userInputMatch = "Sorry! the entered emoji is not listed here";
    }
    setInput(userInputMatch);
  };

  const emojipack = {
    "😀": "Smiling",
    "😂": "Lauging",
    "🥳": "Partying",
    "🤩": "Star-struck",
    "😟": "Worried",
    "👋": "Waving"
  };

  const emojiClick = function (emoji) {
    var userInputMatch = emojipack[emoji];
    setInput(userInputMatch);
  };

  const emojiWeHave = Object.keys(emojipack);

  return (
    <div className="App">
      <h1>Emoji 📖 Interpreter</h1>
      <input
        onChange={inputHandler}
        className="input-box"
        placeholder="Search your favourite emoji to know the meaning"
      ></input>
      <h2>{input}</h2>

      <h3>Emoji's that we use most</h3>
      {emojiWeHave.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClick(emoji)}
            style={{ cursor: "pointer", fontSize: "2rem", padding: "1rem" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
