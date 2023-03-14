import Result from "./Result";

const Results = (props) => {
  return (
    <>
      <Result info={props.good} />
      <Result info={props.neutral} />
      <Result info={props.bad} />
    </>
  );
};

export default Results;
