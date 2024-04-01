import React, { useEffect, useState } from "react";
import data from "./../../data.json";

function JokeContent() {
  const [joke, setJoke] = useState([]);
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);
  const [showAllJoke, setShowAllJoke] = useState(true);

  useEffect(() => {
    setJoke(data);
  }, []);

  const recordVote = (type) => {
    const updatedJokes = [...joke];
    const currentJokes = updatedJokes[currentJokeIndex];

    if (type === "like") {
      currentJokes.like++;
    } else if (type === "dislike") {
      currentJokes.dislike++;
    }
    setJoke(updatedJokes);
    console.log("currentJokes: ", currentJokes);

    showAnotherJoke();
  };

  const showAnotherJoke = () => {
    if (currentJokeIndex < joke.length - 1) {
      setCurrentJokeIndex(currentJokeIndex + 1);
    } else {
      setShowAllJoke(false);
    }
  };

  return (
    <div className="text-center lg:py-24 sm:py-14 max-sm:py-9">
      {showAllJoke ? (
        <div>
          <h1 className="text-left text-gray-600 font-normal lg:text-[17.5px] lg:px-[25rem] py-11 md:px-[10rem] sm:px-[4rem] max-sm:px-[4rem] max-sm:text-[8px]">
            {joke[currentJokeIndex]?.paragraph}
          </h1>
          <div className="lg:px-[31rem] py-11 md:px-[20rem]">
            <hr />
          </div>
          <div className="text-white">
            <button
              onClick={() => {
                recordVote("like");
              }}
              className="bg-blue-600 lg:px-20 lg:py-3 mr-10 md:px-18 md:py-18 sm:px-8 sm:py-2 max-sm:px-5 max-sm:py-1"
            >
              This is Funny!
            </button>
            <button
              onClick={() => {
                recordVote("dislike");
              }}
              className="bg-green-500 lg:px-20 lg:py-3 md:px-18 md:py-18 sm:px-8 sm:py-2 max-sm:px-5 max-sm:py-1"
            >
              This is not funny.
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1 className=" text-gray-600 font-normal lg:text-2xl lg:px-[25rem] py-11 md:px-[10rem] sm:px-[4rem] max-sm:px-[4rem] max-sm:text-[10px]">
            That's all the jokes for today! Come back another day!
          </h1>
        </div>
      )}
    </div>
  );
}

export default JokeContent;
