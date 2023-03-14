import { useState } from "react";
import Button from "./Button";
import Results from "./Results";
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const good_handle_func = () => setGood(good + 1);
  const neutral_handle_func = () => setNeutral(neutral + 1);
  const bad_handle_func = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleFunc={good_handle_func} text={"good"} />
      <Button handleFunc={neutral_handle_func} text={"neutral"} />
      <Button handleFunc={bad_handle_func} text={"bad"} />
      <h1>Statistics</h1>
      <Results
        good={{ rate: "good", num: good }}
        neutral={{ rate: "neutral", num: neutral }}
        bad={{ rate: "bad", num: bad }}
      />
    </div>
  );
}

export default App;
