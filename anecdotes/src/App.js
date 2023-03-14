import { useState } from "react";
import Button from "./Button";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const votes_arr = Array(anecdotes.length).fill(0);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(votes_arr);
  const [most_votes, setMostVotes] = useState(0);

  const get_rand_anedc = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  const set_most_votes = () => {
    console.log(votes);
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > votes[selected]) {
        return;
      }
    }
    setMostVotes(selected);
    return;
  };

  const add_vote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    set_most_votes();
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]}</p>
      <Button handleFunc={get_rand_anedc} text={"next anecdocte"} />
      <Button handleFunc={add_vote} text={"vote"} />

      <h1>Anecdote with most votes</h1>
      {anecdotes[most_votes]}
      <p>has {votes[most_votes]}</p>
    </div>
  );
};

export default App;
