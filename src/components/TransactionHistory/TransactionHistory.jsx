import css from "./TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.theader}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {items.map((item) => (
          <tr key={item.id}>
            <td className={css.typeName}>
              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
            </td>
            <td className={css.center}>{item.amount}</td>
            <td className={css.center}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
