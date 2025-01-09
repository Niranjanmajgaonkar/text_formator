import './App.css';
import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState("orange");
  const [text, setText] = useState("");
  const [activeColor, setActiveColor] = useState("black"); // Declare state f

  // Update text on change
  const change = (event) => {
    setText(event.target.value);
  };

  // Count words
  const words = () => {
    return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  };

  // Count characters
  const character = () => {
    return text.length;
  };

  // Count numbers
  const numbers = () => {
    const digits = text.match(/\d/g); // Match all digits in the text
    return digits ? digits.length : 0;
  };

  return (
    <>
      <div className="w-screen h-screen" style={{ backgroundColor: color }}>
        {/* Header */}
        <h1 className="font-bold text-4xl flex pt-16 place-content-center">Text Formator</h1>

        {/* Textarea and Buttons */}
        <div className="flex items-center flex-col w-full h-max">
          {/* Wrapper for Textarea and Copy Buttons */}
          <div className="relative w-11/12 lg:w-3/5 mt-12">
            <textarea
              className="w-full h-52 border border-gray-300 rounded pl-4 pr-20"
              onChange={change}
              value={text}
              id="textArea"
              placeholder="Type something here..."
            ></textarea>
            
            {/* Top-right Copy Button */}
      

            {/* Bottom-right Copy Button */}
            <button
              className="absolute right-2 bottom-2 bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => {
                navigator.clipboard.writeText(text);
                const textArea = document.getElementById("textArea");
                textArea.select(); // Highlight the text
              }}
            >
              Copy
            </button>
          </div>

          <div className="flex justify-center mt-4 w-full space-x-4">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => setText(text.toUpperCase())}
            >
              Convert To UpperCase
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-6 text-center">
          <p>Words: {words()}</p>
          <p>Characters: {character()}</p>
          <p>Numbers: {numbers()}</p>
        </div>

        {/* Color Buttons */}
        {/* const [activeColor, setActiveColor] = useState(""); */}

<div className="absolute bottom-10 w-full flex flex-wrap justify-center gap-4 p-4">
  {["blue", "green", "yellow", "pink", "red", "purple", "cyan", "orange", "teal"].map((clr) => (
    <button
      key={clr}
      style={{
        backgroundColor: clr,
        color: activeColor === clr ? "black" : "white", // Change text color for active button
        borderRadius: "20px",
        padding: "5px 15px",
      }}
      onClick={() => {
        setColor(clr);
        setActiveColor(clr); // Update the active button state
      }}
    >
      {clr.charAt(0).toUpperCase() + clr.slice(1)}
    </button>
  ))}
</div>

      </div>
    </>
  );
}

export default App;
