import React, { useMemo, useState } from 'react'
// The useMemo hook in React is used to optimize performance by memorizing a computed value, so it is only recalculated when it dependencies change. It prevents unnecessary recalculations of expensive operations on every render.
const UseMemo = () => {
    const [number, setNumber] = useState(1);
    const [theme, setTheme] = useState("light");

    const factorial = (n) => {
        console.log("Calculating factorial...");
        if (n < 0) return 0;
        return n === 0 ? 1 : n * factorial(n - 1);
    };

    const memoizedFactorial = useMemo(() => factorial(number), [number]); // The first argument is a function that performs the computation. The second argument is an array of dependencies. If any dependency changes, the function will be re-executed.

    //Benefits of useMemo 
    // 1 Reduces unnecessary computations.
    // 2 Optimizes performance in complex or expensive operations.
    // 3 Useful when passing computed values or child components to prevent unnecessary renders.

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
  return (
    <div>UseMemo
          <div><center>
              <h1>useMemo Example</h1>
              <label>
                  Enter a number:{" "}
                  <input
                      type="number"
                      value={number}
                      onChange={(e) => setNumber(Number(e.target.value))}
                  />
              </label>
              <p>Factorial: {memoizedFactorial}</p>
              <button onClick={toggleTheme}>
                  Toggle Theme ({theme === "light" ? "Light" : "Dark"})
              </button>
          </center>
          </div>
    </div>
  )
}

export default UseMemo