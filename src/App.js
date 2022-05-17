import { useState } from "react";

import "./App.css";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <header>
                <h1>Counter</h1>
                <h2>Current value of count is {count}</h2>
            </header>
            <button onClick={() => setCount(0)}>Reset Counter</button>
            <button
                onClick={() =>
                    count > 20
                        ? "You reach the maximum value"
                        : setCount(count + 1)
                }
            >
                Increase Counter
            </button>
            <button
                onClick={() =>
                    count <= 0
                        ? "You reach the minimum value"
                        : setCount(count - 1)
                }
            >
                Decrease Counter
            </button>
        </div>
    );
};

export default App;
