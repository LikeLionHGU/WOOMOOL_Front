import React, { useEffect, useState } from "react";

const TestPage = () => {
  return (
    <div className="TestPage">
      <FloatingDiv
        className="custom-class"
        style={{ backgroundColor: "blue", width: "100px", height: "100px" }}
        interval={3000}
        maxDistance={75}
        maxTilt={15}
      >
        <p>I'm floating!</p>
      </FloatingDiv>
    </div>
  );
};

const FloatingDiv = ({
  children,
  className = "",
  style = {},
  interval = 600,
  maxDistance = 50,
  maxTilt = 10,
}) => {
  const [transform, setTransform] = useState("");

  useEffect(() => {
    const animateDiv = () => {
      const xMove = Math.random() * maxDistance * 2 - maxDistance;
      const yMove = Math.random() * maxDistance * 2 - maxDistance;
      const tilt = Math.random() * maxTilt * 2 - maxTilt;

      setTransform(`translate(${xMove}px, ${yMove}px) rotate(${tilt}deg)`);
    };

    animateDiv(); // Initial animation
    const intervalId = setInterval(animateDiv, interval);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [interval, maxDistance, maxTilt]);

  return (
    <div
      className={`floating-div ${className}`}
      style={{
        ...style,
        transform,
        transition: `transform ${interval / 1000}s ease-in-out`,
      }}
    >
      {children}
    </div>
  );
};

export default TestPage;
