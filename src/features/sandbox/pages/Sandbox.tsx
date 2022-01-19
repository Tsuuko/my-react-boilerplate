import { useState } from 'react';

export const Sandbox: React.VFC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Count: {count}</div>
      <button type="button" onClick={() => setCount((v) => v - 1)}>
        -
      </button>
      <button type="button" onClick={() => setCount((v) => v + 1)}>
        +
      </button>
    </>
  );
};
