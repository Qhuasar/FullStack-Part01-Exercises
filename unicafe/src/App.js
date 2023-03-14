import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const good_handle_func = () => setGood(good + 1);
  const neutral_handle_func = () => setNeutral(neutral + 1);
  const bad_handle_func = () => setBad(bad + 1);
  const get_total = () => good + neutral + bad;
  const get_average = () => (good - bad) / 2;
  const get_precent_pos = () => (good / get_total()) * 100;
  const get_tag_info = (tag) => () => {
    switch (tag) {
      case "good":
        return { tag: tag, num: good };
      case "neutral":
        return { tag: tag, num: neutral };
      case "bad":
        return { tag: tag, num: bad };
      case "all":
        return { tag: tag, num: get_total() };
      case "average":
        return { tag: tag, num: get_average() };
      case "precent":
        return { tag: tag, num: get_precent_pos() };
      default:
        console.log(`Unable to find ${tag} tag!`);
    }
  };
  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <div>
        <h1>Give Feedback</h1>
        <Button handleFunc={good_handle_func} text={"good"} />
        <Button handleFunc={neutral_handle_func} text={"neutral"} />
        <Button handleFunc={bad_handle_func} text={"bad"} />
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleFunc={good_handle_func} text={"good"} />
      <Button handleFunc={neutral_handle_func} text={"neutral"} />
      <Button handleFunc={bad_handle_func} text={"bad"} />
      <h1>Statistics</h1>
      <Statistics
        good={get_tag_info("good")}
        neutral={get_tag_info("neutral")}
        bad={get_tag_info("bad")}
        average={get_tag_info("average")}
        all={get_tag_info("all")}
        precent={get_tag_info("precent")}
      />
    </div>
  );
}

export default App;
