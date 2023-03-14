const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.parts.reduce((part_sum, part) => part_sum + part.exercises, 0)}
      </p>
    </>
  );
};

export default Total;
