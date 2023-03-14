import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  return (
    <table>
      <tbody>
        <StatisticLine info={props.good} />
        <StatisticLine info={props.neutral} />
        <StatisticLine info={props.bad} />
        <StatisticLine info={props.all} />
        <StatisticLine info={props.average} />
        <StatisticLine info={props.precent} />
      </tbody>
    </table>
  );
};

export default Statistics;
