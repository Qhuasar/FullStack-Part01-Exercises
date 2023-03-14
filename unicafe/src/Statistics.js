import Result from "./Result";

const Statistics = (props) => {
  return (
    <>
      <Result info={props.good} />
      <Result info={props.neutral} />
      <Result info={props.bad} />
      <Result info={props.all} />
      <Result info={props.average} />
      <Result info={props.precent} />
    </>
  );
};

export default Statistics;
