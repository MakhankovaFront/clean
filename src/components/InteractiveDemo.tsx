import { useState } from "react";

const InteractiveDemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = (): void => {
    setCount(count + 1);
  };

  return (
    <div className="demo-widget">
      <h3>Interactive Demo</h3>
      <p>This is a React component inside LaunchKit!</p>
      <button className="button button-primary" onClick={handleClick}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default InteractiveDemo;
