const Result = ({ info: { rate, num } }) => {
  console.log(rate, num);
  return (
    <>
      <p>
        {rate}: {num}
      </p>
    </>
  );
};

export default Result;
