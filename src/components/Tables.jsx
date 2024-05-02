import "../styles/Tables.css";

const Table = ({ tableHead, tableRows }) => {
  const renderTableHead = () => {
    return tableHead.map((header, index) => (
      <th key={index} scope="col">
        {header}
      </th>
    ));
  };

  const renderTableRows = () => {
    return tableRows.map((row, index) => (
      <tr key={index}>
        {row.map((cell, cellIndex) => (
          <td key={cellIndex}>{cell}</td>
        ))}
      </tr>
    ));
  };
  return (
    <div className="table-container">
      <table class="table">
        <thead class="thead-dark">
          <tr>{renderTableHead()}</tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
};

export default Table;
