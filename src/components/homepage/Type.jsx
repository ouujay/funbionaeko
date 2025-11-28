import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Engineer",
          "Full Stack Developer",
          "LLM Specialist",
          "Mobile App Developer",
          "Startup Founder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
