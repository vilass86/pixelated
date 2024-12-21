const ActivityHistory = ({ data }) => {
  if (!data || data.length === 0) return <p>No activity history available.</p>;

  return (
    <div>
      <h2>Activity History</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.date} - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ActivityHistory;
