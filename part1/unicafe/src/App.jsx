import { useState } from "react";

const Button = ({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad;
    const average = all === 0 ? 0 : (good - bad) / all;
    const positive = all === 0 ? 0 : (good / all) * 100;

    return (
        <div>
            <p>good: {good}</p>
            <p>neutral: {neutral}</p>
            <p>bad: {bad}</p>
            <p>all: {all}</p>
            <p>average: {average.toFixed(2)}</p>
            <p>positive: {positive.toFixed(1)}%</p>
        </div>
    );
};

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <h2>give feedback</h2>
            <Button onClick={() => setGood(good + 1)} text="good" />
            <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
            <Button onClick={() => setBad(bad + 1)} text="bad" />
            <h2>statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    );
};

export default App;

// import { useState } from "react";

// const Button = ({ onClick, text }) => {
//     return <button onClick={onClick}>{text}</button>;
// };

// const Statistics = ({ good, neutral, bad }) => {
//     const all = good + neutral + bad;
//     const average = all === 0 ? 0 : (good - bad) / all;
//     const positive = all === 0 ? 0 : (good / all) * 100;

//     return (
//         <div>
//             <p>good {good}</p>
//             <p>neutral {neutral}</p>
//             <p>bad {bad}</p>
//             <p>all {all}</p>
//             <p>average {average}</p>
//             <p>positive {positive} %</p>
//         </div>
//     );
// };

// const App = () => {
//     // save clicks of each button to its own state
//     const [good, setGood] = useState(0);
//     const [neutral, setNeutral] = useState(0);
//     const [bad, setBad] = useState(0);

//     return (
//         <div>
//             <h2>give feedback</h2>
//             <Button onClick={() => setGood(good + 1)} text="good" />
//             <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
//             <Button onClick={() => setBad(bad + 1)} text="bad" />
//             <h2>statistics</h2>
//             <Statistics good={good} neutral={neutral} bad={bad} />
//         </div>
//     );
// };

// export default App;
