const Achievements = ({ data }) => {
  if (!data || data.length === 0) return <p>No achievements available.</p>;

  return (
    <div>
      <h2>Achievements</h2>
      <ul>
        {data.map((achievement, index) => (
          <li key={index}>
            <strong>{achievement.title}</strong>: {achievement.description}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Achievements;
