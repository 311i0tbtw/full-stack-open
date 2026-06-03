import { useState } from "react";

const Button = ({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad;

    if (all === 0) {
        return <div>no feedback given</div>;
    }

    const average = all === 0 ? 0 : (good - bad) / all;
    const positive = all === 0 ? 0 : (good / all) * 100;

    return (
        <table>
            <tbody>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={bad} />
                <StatisticLine text="all" value={all} />
                <StatisticLine text="average" value={average.toFixed(2)} />
                <StatisticLine
                    text="positive"
                    value={`${positive.toFixed(1)}%`}
                />
            </tbody>
        </table>
    );
};

const StatisticLine = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
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
