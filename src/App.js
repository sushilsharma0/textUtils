import React, { useState } from "react"; // Import the necessary modules from React
// import ModeBtn from "./components/ModeBtn";
// import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
// import About from "./components/About";

function App() {
  const [result, setresult] = useState(""); // Initialize a state variable for the result
  const [text, setText] = useState("Enter text here"); // Initialize a state variable for the input text
  const [mode, setMode] = useState("white");

  const enableDarkMode = () => {
    if (mode === "white") {
      setMode("black");
    } else {
      setMode("white");
    }
  };

  // Define a function to handle changes in the input text
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Define a function to perform find and replace
  const handleOnChange = () => {
    const findText = document.querySelector("#find").value; // Get the value from the "find" input field
    const replaceText = document.querySelector("#replace").value; // Get the value from the "replace" input field

    if (!findText) {
      alert("Please enter a search text."); // Show an alert if no search text is provided
      return; // Exit the function
    }

    if (text.match(findText) === null) {
      alert("Word not found"); // Show an alert if the search text is not found in the input text
      return; // Exit the function
    }

    const regex = new RegExp(findText, "gi"); // Create a regular expression for case-insensitive global search
    const updatedText = text.replace(regex, replaceText); // Perform the find and replace operation
    setresult(updatedText); // Update the result state with the updated text
  };

  // Define a function to copy the result to the clipboard
  const handleCopyResult = () => {
    // Create a text area element to copy the result
    const textArea = document.createElement("textarea");
    textArea.value = result;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Result copied to clipboard");
  };

  const handleUpCase = () => {
    const res = text.toUpperCase();
    setresult(res);
  };
  const handleLoCase = () => {
    const res = text.toLowerCase();
    setresult(res);
  };

  //${mode === 'white' ? 'text-black' : 'text-white'}

  return (
    
    <div className="bg-gradient-to-b from-blue-300 to-blue-500 min-h-screen flex flex-col justify-center items-center p-4">
      <div
        className={`bg-${mode}  p-6 rounded shadow-lg w-full md:w-2/3 lg:w-1/2`}
      >
        {/* Title */}
        <div className="flex justify-between items-center">
          <h1
            className={`text-3xl font-semibold ${
              mode === "white" ? "text-black" : "text-white"
            } mb-4`}
          >
            Text Analysis
          </h1>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onClick={enableDarkMode}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span
              className={`ml-3 text-sm font-medium ${
                mode === "white" ? "text-black" : "text-white"
              } dark:${mode === "white" ? "text-black" : "text-white"}`}
            >
              Enable Dark Mode
            </span>
          </label>
        </div>

              {/* <ModeBtn /> */}

        {/* Textarea for input */}
        <textarea
          className="w-full h-32 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 bg-gray-100 text-gray-800 placeholder-gray-500 mb-4"
          placeholder="Enter text here"
          value={text}
          onChange={handleChange} // Attach the handleChange function to the textarea's onChange event
        ></textarea>
        <div className="flex space-x-2 mb-4">
          {/* Input for finding a word */}
          <input
            type="text"
            placeholder="Find word"
            id="find"
            className="w-1/2 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 bg-gray-100 text-gray-800 placeholder-gray-500"
          />
          {/* Input for replacing a word */}
          <input
            type="text"
            placeholder="Replace word"
            id="replace"
            className="w-1/2 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 bg-gray-100 text-gray-800 placeholder-gray-500"
          />
        </div>
        {/* Button to trigger the find and replace operation */}
        <button
          onClick={handleOnChange} // Attach the handleOnChange function to the button's onClick event
          className="bg-blue-600 mb-2 text-white p-2 rounded-lg w-full hover-bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Find and Replace
        </button>
        <button
          onClick={handleUpCase}
          className="bg-blue-600 mb-2 text-white p-2 rounded-lg w-full hover-bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Change to UperCase
        </button>
        <button
          onClick={handleLoCase}
          className="bg-blue-600 mb-2 text-white p-2 rounded-lg w-full hover-bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Change to LowerCase
        </button>
        {/* Section title for the results */}
        <h2
          className={`text-2xl mt-4 ${
            mode === "white" ? "text-black" : "text-white"
          }`}
        >
          Results
        </h2>
        <div className="bg-gray-200 p-2 rounded-lg mt-2">
          {/* Display the results using a preformatted text element */}
          <pre className={`whitespace-pre-wrap text-black`}>{result}</pre>
        </div>
        {result && (
          <button
            onClick={handleCopyResult} // Attach the handleCopyResult function to the button's onClick event
            className="bg-blue-600 text-white p-2 rounded-lg w-full hover-bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4"
          >
            Copy Result
          </button>
        )}
      </div>
    </div>
    
  );
}

export default App;
