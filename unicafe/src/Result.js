const Result = (props) => {
  const { tag, num } = props.info();
  return (
    <>
      <p>
        {tag}: {num}
      </p>
    </>
  );
};

export default Result;
