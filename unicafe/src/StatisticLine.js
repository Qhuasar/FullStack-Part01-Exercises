const StatisticLine = (props) => {
  const { tag, num } = props.info();
  return (
    <tr>
      <td>
        {tag}: {num}
      </td>
    </tr>
  );
};

export default StatisticLine;
